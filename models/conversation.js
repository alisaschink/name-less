module.exports = function(sequelize, DataTypes) {
  var Conversation = sequelize.define("Conversation",
  {
    is_anonymous: {
      type: DataTypes.BOOLEAN,
    },
    user_1: {
      // needs to chance back to string when using uuid?
      type: DataTypes.INTEGER
    },
    user_2: {
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING
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
