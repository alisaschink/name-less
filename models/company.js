module.exports = function(sequelize, DataTypes) {
  var Company = sequelize.define("Company",{
    name: {
      type: DataTypes.STRING,
    }
   } ,
   // options
  {
   underscored: true,
   freezeTableName: true,
   classMethods: {
     associate: function(models) {
      
     }
   }, // end of classMethods
  });
  return Company;
};

