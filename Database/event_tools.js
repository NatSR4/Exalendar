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
        event_description: event_description,
        eventdate: eventdate
      });
      return true;
    }
    catch (error) {
      throw error;
    }
  }

  /* TODO: make the documentation better here 
  returns a list of jsons containing the events of all the classes that userid has */
  async get_events(userid) {
    try {
      var events = await this.sequelize.query(
        `SELECT * FROM user_classes uc, events e
        WHERE uc.user_id = ? and uc.class_id = e.class_id`,
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
