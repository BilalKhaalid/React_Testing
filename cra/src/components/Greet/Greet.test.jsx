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

// * JEST will look for files that have .test.js/jsx/ts/jsx suffix and it will also look for files that have spec.js/jsx/ts/tsx files suffix it will also look for files that are under __test__ / test folder names

// * We can also use it global keyword instead of test and the test will work in older code bases we can find it keyword for testing if we want to run a particular test we can use fit keyword and if we want a test to be skip temporarily we can use xit keyword as follows

// describe("nested", () => {
//   // ! Test with it keyword
//   it("greet render with a name", () => {
//     render(<Greet name="Bilal" />);
//     const textElement = screen.getByText("Hello Bilal");
//     expect(textElement).toBeInTheDocument();
//   });

//   // ! Test with fit keyword
//   fit("greet render with a name", () => {
//     render(<Greet name="Bilal" />);
//     const textElement = screen.getByText("Hello Bilal");
//     expect(textElement).toBeInTheDocument();
//   });

//   // ! Test with xit keyword
//   xit("greet render with a name", () => {
//     render(<Greet name="Bilal" />);
//     const textElement = screen.getByText("Hello Bilal");
//     expect(textElement).toBeInTheDocument();
//   });

// });
