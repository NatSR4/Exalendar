let bcrypt = require("bcrypt");
const { QueryTypes } = require('sequelize');

class Event_Tools {
  constructor(sequelize) {
    this.sequelize =  sequelize;
  }

  /* TODO: make the documentation better here 
  returns a list of jsons containing the events of all the classes that userid has */
  async get_events(userid) {
    try {
      var events = await this.sequelize.query(
        'SELECT * FROM user_classes uc, events e WHERE uc.user_id = ? and uc.class_id = e.class_id',
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