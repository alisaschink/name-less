module.exports = function(sequelize, DataTypes) {
  var Job = sequelize.define("Job",{
    title: {
      type: DataTypes.STRING
    },
    location: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    responsibilities: {
      type: DataTypes.TEXT
    },
    qualifications: {
      type: DataTypes.TEXT
    }
  },
  // options
  {
    underscored: true,
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        Job.belongsTo(models.Industry,{
          foreignKey: {
            allowNull: false,
          }
        });
        Job.belongsTo(models.Company, {
          foreignKey: {
            allowNull: false,
          }
        });
        Job.belongsTo(models.User, {
          foreignKey: {
            allowNull: false,
          }
        });
      }
    } // end of classMethods
  });
  return Job;
};