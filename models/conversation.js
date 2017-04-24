module.exports = function(sequelize, DataTypes) {
  var Conversation = sequelize.define("Conversation",{});
  return Conversation;
};
// module.exports = function(sequelize, DataTypes) {
//   var Conversation = sequelize.define('User',
//     // columns of table
//     {
//       is_employer: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: false,
//       }
//     },
//     // options
//     {
//       underscored: true,
//       freezeTableName: true,
//       classMethods: {
//         associate: function(models) {
//         }
//       } // end of classMethods
//     }); // end of .define
//   return Conversation;
// };