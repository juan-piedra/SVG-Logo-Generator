const {Circle,Triangle, Square} = require("./shapes.js");

describe("Circle test", () => {
    test("circle with #1761d7 color", () => {
      const shape = new Circle();
      shape.shapeColor("#1761d7");
      expect(shape.create()).toEqual(
        '<circle cx="150" cy="115" r="80" fill="#1761d7" />'
      );
    });
  });

describe("Triangle test", () => {
  test("triangle with blue", () => {
    const shape = new Triangle();
    shape.shapeColor("blue");
    expect(shape.create()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

describe("Square test", () => {
  test("square with purple", () => {
    const shape = new Square();
    shape.shapeColor("purple");
    expect(shape.create()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="purple" />'
    );
  });
});
