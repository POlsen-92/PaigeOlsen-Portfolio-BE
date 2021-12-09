const { Project } = require("../models");

const seedProject = async () => {
  const projectData = await Project.bulkCreate([
    {
      id: 1,
      title: "TableTop - D&D Online",
      description: "This app was created with Virtual D&D players in mind, with this project you can meet up with friends to create a campaign or find new players within our community forum to group up with.",
      repo: "https://github.com/POlsen-92/TableTop-FrontEnd",
      live: "https://table-top-fe.herokuapp.com/",
      tech: "React.js, MySQL, TinyMCE, Socket.io, BootStrap",
      img: "../../style/images/tabletop_ss.png",
    },
    {
      id: 2,
      title: "Manatee Clicker",
      description: "A click game to pay homage to Cookie Clicker and Flappy Birds but uses Manatees instead. Join the aggregation and start collecting your Manatees today!",
      repo: "https://github.com/POlsen-92/Manatee-Clicker",
      live: "https://manatee-clicker.herokuapp.com/",
      tech: "JavaScript, MySQL, Handlebars, Express and jPlayer",
      img: "../../style/images/manatee_ss.png",
    },
    {
      id: 3,
      title: "Exercise Generator App",
      description: "A versatile, clean, and helpful website where you can choose from a large selection of area-specific exercises to make your best daily workout.",
      repo: "https://github.com/POlsen-92/WorkOut_Generator_App",
      live: "https://polsen-92.github.io/WorkOut_Generator_App/",
      tech: "JavaScript, Pure.CSS",
      img: "../../style/images/exercise_ss.png",
    }, 
    {
      id: 4,
      title: "Team Profile Generator",
      description: "Command Line input generator utilizing Inquirer npm package to take user input and generate a webpage for displaying basic information of team members that were provided",
      repo: "https://github.com/POlsen-92/Team-Profile-Generator",
      tech: "JavaScript, BootStrap, Inquirer",
      img: "../../style/images/teamprofile_ss.png",
    }, 
  ]);
};

module.exports = seedProject;