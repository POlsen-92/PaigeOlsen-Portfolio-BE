
const sequelize = require('../config/connection');
const seedProject = require('./projectData');
const seedEducation = require ('./educationData');
const seedSkill = require('./skillData');



const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedProject()
  console.log('\n----- PROJECTS SEEDED -----\n');

  await seedEducation()
  console.log('\n----- EDUCATION SEEDED -----\n');
  
  await seedSkill()
  console.log('\n----- SKILLS SEEDED -----\n');
  
  process.exit(0);
};

seedDatabase();