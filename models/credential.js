module.exports = function(sequelize, DataTypes) {
  var Credential = sequelize.define("Credential",{
    heading: {
      type: DataTypes.STRING
    },
    subheading: {
      type: DataTypes.STRING
    },
    details: {
      type: DataTypes.TEXT
    },
    section_name: {
      type: DataTypes.STRING
    }
  },
  // options
  {
    underscored: true,
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        Credential.belongsTo(models.User,
        {
          foreignKey: {
            allowNull: false,
          }
        });
      }
    } // end of classMethods
  });
  return Credential;
};