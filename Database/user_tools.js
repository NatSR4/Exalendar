let bcrypt = require("bcrypt");

class User_Tools {
  constructor(sequelize) {
    this.sequelize =  sequelize;
  }

  /* Creates a user with the called parameters, returns true on succues
     Calls sequelize.models create & bcrypt.hash for password hashing */
  async create_user(first, last, username, password) {
    try {
      const rounds = 10;
      bcrypt.hash(password, rounds,async (err,hash) => {
      await this.sequelize.models.users.create({
        first_name: first,
        last_name: last,
        user_name: username,
        pwd_hash: hash
      });
      return true;
      });
    }
    catch (error) {
      throw error;
    }
  }

  /* Verifies a username and password combo, returns true if match
     Calls sequelize.models findOne & bcrypt.compare */
  async verify_user(username, password_attempt) {
    try {
      var hash = await this.sequelize.models.users.findOne({
        attributes: ['pwd_hash'],
        where: { user_name: username }
      });
      return await bcrypt.compare(password_attempt, hash.pwd_hash);
    }
    catch (error) {
      throw error;
    }
  }

}
module.exports = User_Tools;
