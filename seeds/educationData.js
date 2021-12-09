const { Education } = require("../models");

const seedEducation = async () => {
  const educationData = await Education.bulkCreate([
    {
      id: 1,
      title: "Bachelors of Science in Nutrition and Exercise Physiology",
      description: "4 year degree in Nutrition and Exercise Physiology aimed towards working with patients in outpatient CardioPulmonary Rehab. This education demonstrated a need to create a branch between providing medical care and nurturing relationships in order to motivate our patients. ",
      location: "Washington State University",
      graduation: "May 2016",
      type: "Bachelors"
    },
    {
      id: 2,
      title: "Bachelors of Science in Biology",
      description: "4 year degree focusing on pre-med biology courses. In this degree I gained a deep understanding of human biology and an appreciation for experimental and fact centered processes",
      location: "Washington State University",
      graduation: "Dec 2020",
      type: "Bachelors"
    },
    {
      id: 3,
      title: "Full Stack Coding Bootcamp Certificate",
      description: "12-Week Full Time Bootcamp which covered primary full-stack web development tech such as JavaScript, CSS, BootStrap, React, MySQL and touching on subjects such as Redux, NoSQL and more",
      location: "University of Washington",
      graduation: "Dec 2021",
      type: "Certificate"
    },
    {
      id: 4,
      title: "Learn JavaScript",
      description: "20 hour course that covered JavaScript fundamentals for front-end and back-end development",
      location: "CodeCademy",
      graduation: "Sep 2021",
      type: "Certificate"
    },
    {
      id: 5,
      title: "Learn jQuery",
      description: "9 hour course that covered the basics of jQuery in order to add dynamic behavior to static web pages",
      location: "CodeCademy",
      graduation: "Oct 2021",
      type: "Certificate"
    },
    {
      id: 6,
      title: "Learn React",
      description: "20 hour course covering how to build powerful, interactive applications with React.js",
      location: "CodeCademy",
      graduation: "Dec 2021",
      type: "Certificate"
    },
    {
      id: 7,
      title: "Learn HTML",
      description: "9 hour course learning the basics of HTML5 and start building & editing web pages",
      location: "CodeCademy",
      graduation: "Sep 2021",
      type: "Certificate"
    },
    {
      id: 8,
      title: "Learn CSS",
      description: "10 hour course learning how to style and visually organize HTML with CSS",
      location: "CodeCademy",
      graduation: "Sep 2021",
      type: "Certificate"
    },
    {
      id: 9,
      title: "Learn Asynchronous JavaScript",
      description: "1 hour course covering promises and async await syntax",
      location: "CodeCademy",
      graduation: "Oct 2021",
      type: "Certificate"
    },
  ]);
};

module.exports = seedEducation;