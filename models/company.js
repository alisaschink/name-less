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
        Company.belongsTo(models.Industry,
        {
          foreignKey: {
            allowNull: true,
          }
        });
        Company.belongsTo(models.User,
        {
          foreignKey: {
            allowNull: false,
          }
        });
        Company.hasMany(models.Job);
      }
   }, // end of classMethods
  });
  return Company;
};

