module.exports = function(sequelize, DataTypes) {
  var Conversation = sequelize.define("Conversation",
  {
    is_employer: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
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
  return Conversation;
};
