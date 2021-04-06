const logger = require('./logger')

const passport = require('koa-passport')
const CasStrategy = require('passport-cas2').Strategy

const { getNameAndMajor } = require('../modules/directory')

const Student = require('../api/students/students.model')

passport.serializeUser((user, done) => {
  done(null, user.rcs_id)
})

passport.deserializeUser(async (rcsId, done) => {
  try {
    const user = await Student.findOne().byUsername(rcsId)
    return done(null, user)
  } catch (err) {
    return done(err)
  }
})

const cas = new CasStrategy({
  casURL: 'https://cas-auth.rpi.edu/cas'
}, async function getOrCreateStudent (username, profile, done) {
  username = username.toLowerCase()
  try {
    let student = await Student.findOne().byUsername(username)

    if (student) {
      // New user!!
      logger.info(`Creating new student '${username}'...`)

      student = Student({
        rcs_id: username,
        accountLocked: true // WAITLIST
      })

      try {
        const directoryData = await getNameAndMajor(username)
        if (directoryData.name.first && directoryData.name.last) {
          student.name = directoryData.name
        }
        if (directoryData.major) {
          student.major = directoryData.major
        }
      } catch (e) {
        // Couldn't get name and major from directory
      }
    }

    student.lastLogin = new Date()

    await student.save()

    if (student.accountLocked) return done(new Error('Account locked.'))

    return done(null, student)
  } catch (e) {
    return done(e)
  }
})

passport.use(cas)
