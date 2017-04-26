module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define("Message",
  {
    subject: {
      type: DataTypes.STRING
    },
    text: {
      type: DataTypes.TEXT
    },
    attachment: {
      type: DataTypes.STRING
    }
  },
  // options
  {
    underscored: true,
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        Message.belongsTo(models.User,
          {
            foreignKey: {
              allowNull: false,
            }
          });
        Message.belongsTo(models.Conversation, 
          {
            foreignKey: {
              allowNull: false,
            }
          });
      }
    } // end of classMethods
  });
  return Message;
};