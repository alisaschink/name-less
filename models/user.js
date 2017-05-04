// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", 
    {
      // uuid: {
      //   type: DataTypes.UUID,
      //   defaultValue: DataTypes.UUIDV1,
      //   primaryKey: true
      // },
      name: {
        type: DataTypes.STRING,
      },
      username: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      is_employer: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      img: {
        type: DataTypes.STRING,
      },
      location: {
        type: DataTypes.STRING,
      },
    },

    {
	  underscored: true,
	  freezeTableName: true,
	  classMethods: {
	    associate: function(models) {
	      User.belongsTo(models.Industry,
          {
            foreignKey: {
              allowNull: false,
            }
          });
        User.hasMany(models.Message);
        User.hasMany(models.Newsfeed);
        User.hasMany(models.Credential);
        User.hasOne(models.Company);
	    }
	  }, // end of classMethods
    // Creating a custom method for our User model. This will check if an unhashed password entered by
    // The user can be compared to the hashed password stored in our database
    instanceMethods: {
      validPassword: function(password) {
        return bcrypt.compareSync(password, this.password);
      }
    },
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    hooks: {
      beforeCreate: function(user, options, cb) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
        cb(null, options);
      }
    }
  });
  return User;

};

// module.exports = function(sequelize, DataTypes) {
//   var User = sequelize.define('User',
//     // columns of table
//     {
//       name: {
//         type: DataTypes.STRING,
//       },
//       email: {
//         type: DataTypes.STRING,
//       },
//       password_hash: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       is_employer: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: false,
//       },
//       img: {
//         type: DataTypes.STRING,
//       },
//       location: {
//         type: DataTypes.STRING,
//       },
//     },
//     // options
//     {
//       underscored: true,
//       freezeTableName: true,
//       classMethods: {
//         associate: function(models) {
//           User.belongsTo(models.Industry);
//           User.belongsTo(models.Company);
//         }
//       } // end of classMethods
//     }); // end of .define
//   return User;
// };