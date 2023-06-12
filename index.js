const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");

const questions = [
  {
    name: "acronym",
    type: "input",
    message: "What is the acronym for your logo? (Enter up to 3 characters)",
  },
  {
    name: "textColor",
    type: "input",
    message:
      "What color will your text be? (Enter a color keyword OR hexadecimal number)",
  },
  {
    name: "shape",
    type: "list",
    choices: ["Circle", "Triangle", "Square"],
    message: "Choose the shape of your logo.",
  },
  {
    name: "shapeColor",
    type: "input",
    message:
      "What color will your shape be? (Enter a color keyword OR hexadecimal number)",
  },
];

const createSVG = (answers) => {
  let svg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  svg += "<g>";
  svg += `${answers.shape}`;

  let userShape;
  if (answers.shape === "Triangle") {
    userShape = new Triangle();
    svg += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`;
  } else if (answers.shape === "Square") {
    userShape = new Square();
    svg += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`;
  } else {
    userShape = new Circle();
    svg += `<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}"/>`;
  }

  svg += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.acronym}</text>`;
  svg += "</g>";
  svg += "</svg>";

  fs.writeFile('logo.svg', svg, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Generated logo.svg");
    }
  });
};

inquirer.prompt(questions).then(createSVG);
