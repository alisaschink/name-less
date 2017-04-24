module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define("Message",{});
  return Message;
};