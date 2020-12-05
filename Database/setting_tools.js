class Setting_Tools {
  constructor(sequelize) {
    this.sequelize =  sequelize;
  }

  /* Creates an entry in the settings table with called paramenters, returns
     true on success.
     Calls sequelize.models create */
  async create_setting(setting_name,setting_type){
      try {
        await this.sequelize.models.settings.create({
          setting_name: setting_name,
          setting_type: setting_type
        });
        return true;
      }
      catch(error) {
        throw error;
      }
  }

  /* Creates an entry in the user settings table with called parameters,
     returns true on success.
     Calls sequelize.models findOne & sequelize.models create */
  async create_user_setting(username,setting_name,value) {
    try {
      var user = await this.sequelize.models.users.findOne({
        attributes: ['user_id'],
        where: {
          user_name: username
        }
      });
      var setting = await this.sequelize.models.settings.findOne({
        attributes: ['setting_id'],
        where: { setting_name: setting_name }
      });
      await this.sequelize.models.user_settings.create({
        user_id: user.user_id,
        setting_id: setting.setting_id,
        value: value
      });
      return true;
    }
    catch (error) {
      throw error;
    }
  }

}
module.exports = Setting_Tools;
