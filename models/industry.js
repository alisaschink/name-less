module.exports = function(sequelize, DataTypes) {
  var Industry = sequelize.define("Industry",
  {
    name: {
      type: DataTypes.STRING
    },
    img: {
      type: DataTypes.STRING
    }
  },
  // options
  {
    underscored: true,
    freezeTableName: true
  });
  return Industry;
};