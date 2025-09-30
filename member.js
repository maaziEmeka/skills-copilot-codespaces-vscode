function skillsMembers(sequelize, DataTypes) {
  const SkillsMembers = sequelize.define('SkillsMembers', {
    skillId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Skills',
        key: 'id'
      }
    },
    memberId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Members',
        key: 'id'
      }
    }
  });

  return SkillsMembers;
}
