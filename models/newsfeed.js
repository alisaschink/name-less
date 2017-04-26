module.exports = function(sequelize, DataTypes) {
  var Newsfeed = sequelize.define("Newsfeed",{
    content: {
      type: DataTypes.TEXT
    }
  },
  // options
  {
    underscored: true,
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        Newsfeed.belongsTo(models.User,
        {
          onDelete: 'CASCADE',
          foreignKey: {
            allowNull: false,
          }
        });
      }
    } // end of classMethods
  });
  return Newsfeed;
};