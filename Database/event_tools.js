let bcrypt = require("bcrypt");
const { QueryTypes } = require('sequelize');

class Event_Tools {
  constructor(sequelize) {
    this.sequelize =  sequelize;
  }

  /* Adds an event to a given class */
  async add_event(classid, eventid, eventtype, eventtitle, eventdescription,
      eventdate) {
    try {
      await this.sequelize.models.events.create({
        class_id: classid,
        event_id: eventid,
        event_type: eventtype,
        event_title: eventtitle,
        event_description: eventdescription,
        event_date: eventdate
      });
      return true;
    }
    catch (error) {
      throw error;
    }
  }

  /* Updates the event with the specified event_id */
  /* If any of the parameters are null, do not change them */
  async update_event(eventid, eventtype, eventtitle, eventdescription, eventdate) {
    try {
      // Find the event and update it as necessary
      await this.sequelize.models.events.findAll({ where: {event_id: eventid} })
          .then((events) => {
        // Update the first event (there should only be one with event_id)
        let event_ = events[0];
        let new_type = eventtype ? eventtype : event_.event_type;
        let new_title = eventtitle ? eventtitle : event_.event_title;
        let new_description = eventdescription ? eventdescription : event_.event_description;
        let new_date = eventdate ? eventdate : event_.event_date;
        event_.update({
          event_type: new_type,
          event_title: new_title,
          event_description: new_description,
          event_date: new_date
        })
      });
      return true;
    }
    catch(error) {
        throw error;
    }
  }

  /* Returns a list of jsons containing the events of all the classes that userid has. Sorted by date ascending */
  async get_events(userid) {
    try {
      var events = await this.sequelize.query(
        `SELECT * FROM user_classes uc, events e
        WHERE uc.user_id = ? and uc.class_id = e.class_id ORDER BY e.event_date asc`,
        {
          replacements: [userid],
          type: QueryTypes.SELECT
        } 
      );
      return await events
    }
    catch (error) {
      throw error;
    }
  }

  /*TODO: implement function */
  async get_events_from_class(userid, classid){

  }
}
module.exports = Event_Tools;
