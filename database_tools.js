const initModels = require('./models/init-models.js');
const user_tools = require('./user_tools.js');
const class_tools = require('./class_tools.js');
const setting_tools = require('./setting_tools.js');

class Database_Tools {
/* This class holds instances for each of the tools classes. This is so their
   members can be called from one instance of this class

   In order to call functions from these classes use the following syntax:
   database_tool.classes.create_class(parameters...)
   .then(result => { console.log(result); }) // prints true
   .catch((err) => { console.log(err); });   // prints error if thrown

*/

  constructor(sequelize) {
    this.sequelize =  sequelize;
    this.sequelize.authenticate();
    initModels(this.sequelize);

    this.users = new user_tools(sequelize);
    this.classes = new class_tools(sequelize);
    this.settings = new setting_tools(sequelize);
  }
}
module.exports = Database_Tools;
