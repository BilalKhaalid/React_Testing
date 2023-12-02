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

test("greet render correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
});

test("greet render with a name", () => {
  render(<Greet name="Bilal" />);
  const textElement = screen.getByText("Hello Bilal");
  expect(textElement).toBeInTheDocument();
});
