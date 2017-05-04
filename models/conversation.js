module.exports = function(sequelize, DataTypes) {
  var Conversation = sequelize.define("Conversation",
  {
    is_anonymous: {
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
        Conversation.hasMany(models.Message);
      }
    } // end of classMethods
  });
  return Conversation;
};
