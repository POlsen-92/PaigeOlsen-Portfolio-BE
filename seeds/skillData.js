const { Skill } = require("../models");

const seedSkill = async () => {
  const skillData = await Skill.bulkCreate([
    {
      id: 1,
      name: "JavaScript ES6",
      type: "Language",
    },
    {
      id: 2,
      name: "CSS3",
      type: "Language",
    },
    {
      id: 3,
      name: "HTML5",
      type: "Language",
    },
    {
      id: 4,
      name: "SQL",
      type: "Language",
    },
    {
      id: 5,
      name: "GitHub",
      type: "Application",
    },
    { 
      id: 6,
      name: "MySQL",
      type: "Application",
    },
    {
      id: 7,
      name: "Heroku",
      type: "Application",
    },
    {
      id: 8,
      name: "MongoDB",
      type: "Application",
    },
    {
      id: 9,
      name: "Express",
      type: "Tool",
    },
    { 
      id: 10,
      name: "React",
      type: "Tool",
    },
    {
      id: 11,
      name: "Node",
      type: "Tool",
    },
    {
      id: 12,
      name: "Handlebars",
      type: "Tool",
    },
    {
      id: 13,
      name: "jQuery",
      type: "Tool",
    },
    {
      id: 14,
      name: "BootStrap",
      type: "Tool",
    },
    { 
      id: 15,
      name: "PureCSS",
      type: "Tool",
    },
  ]);
};

module.exports = seedSkill;