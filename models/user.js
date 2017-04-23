// module.exports = function(sequelize, DataTypes) {
//   var User = sequelize.define('User',
//     // columns of table
//     {
//       name: {
//         type: DataTypes.STRING,
//       },
//       email: {
//         type: DataTypes.STRING,
//       },
//       password_hash: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       is_employer: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: false,
//       },
//       img: {
//         type: DataTypes.STRING,
//       },
//       location: {
//         type: DataTypes.STRING,
//       },
//     },
//     // options
//     {
//       underscored: true,
//       freezeTableName: true,
//       classMethods: {
//         associate: function(models) {
//           User.belongsTo(models.Industry);
//           User.belongsTo(models.Company);
//         }
//       } // end of classMethods
//     }); // end of .define
//   return User;
// };