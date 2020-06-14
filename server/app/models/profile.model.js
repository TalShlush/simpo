module.exports = (sequelize, Sequelize) => {
  const Profile = sequelize.define("profile", 
  {  id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: Sequelize.INTEGER
	},
	name: {
		type: Sequelize.STRING,
		allowNull: true
	},
	bio: {
		type: Sequelize.STRING,
		allowNull: true
	},
	fb_id: {
		type: Sequelize.STRING,
		allowNull: true
	}
},{
    freezeTableName: true,
    tableName: 'profiles',
    underscored: true
});
  return Profile;
};
