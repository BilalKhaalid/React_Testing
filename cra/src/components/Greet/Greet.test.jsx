// // ! This my first test
// import { render, screen } from "@testing-library/react";
// import Greet from "./Greet";

// test("greet run correctly", () => {
//   render(<Greet />);
//   const textElement = screen.getByText("Hello");
//   expect(textElement).toBeInTheDocument();
// });

// ! This test is written by following TDD Test Driven Development or Red/Green Testing protocols

import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

// test("greet render correctly", () => {
//   render(<Greet />);
//   const textElement = screen.getByText("Hello");
//   expect(textElement).toBeInTheDocument();
// });

// test("greet render with a name", () => {
//   render(<Greet name="Bilal" />);
//   const textElement = screen.getByText("Hello Bilal");
//   expect(textElement).toBeInTheDocument();
// });

// ! We can group test together using following syntax

describe("Greet tests", () => {
  test("greet render correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });
  // // ! We can have nested group inside groups
  // describe("nested", () => {
  //   test("greet render with a name", () => {
  //     render(<Greet name="Bilal" />);
  //     const textElement = screen.getByText("Hello Bilal");
  //     expect(textElement).toBeInTheDocument();
  //   });
  // });
});

// ! We can have as many groups of test as we want

describe("nested", () => {
  test("greet render with a name", () => {
    render(<Greet name="Bilal" />);
    const textElement = screen.getByText("Hello Bilal");
    expect(textElement).toBeInTheDocument();
  });
});
