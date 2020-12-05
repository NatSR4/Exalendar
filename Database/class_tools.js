class Class_Tools {
  constructor(sequelize) {
    this.sequelize =  sequelize;
  }

  /* Creates an entry in class table with the called parameters, returns true on
     success.
     Calls sequelize.models create & sequelize.models findOne */
  async create_class(class_name, teacher_name) {
    try {
      var user = await this.sequelize.models.users.findOne({
        attributes: ['user_id'],
        where: { user_name: teacher_name }
      });
      await this.sequelize.models.classes.create({
        class_name: class_name,
        teacher_id: user.user_id
       });
      return true;
    }
    catch (error) {
      throw error;
    }
  }

  async create_user_class(username, class_name) {
    try {
      var user = await this.sequelize.models.users.findOne({
        attributes: ['user_id'],
        where: { user_name: username}
      });
      var usr_class = await this.sequelize.models.classes.findOne({
        attributes: ['class_id'],
        where: { class_name: class_name }
      });
      await this.sequelize.models.user_classes.create({
        user_id: user.user_id,
        class_id: usr_class.class_id
      });
      return true;
    }
    catch (error) {
      throw error;
    }
  }

}
module.exports = Class_Tools;
