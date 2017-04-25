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

      }
    } // end of classMethods
  });
  return Job;
};