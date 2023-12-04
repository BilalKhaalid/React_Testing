import Application from "./Application";
import { render, screen } from "@testing-library/react";

describe("Application", () => {
  render(<Application />);
  test("renders correctly", () => {
    const textBoxElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(textBoxElement).toBeInTheDocument();

    // ! When we have multiple elements of the same role we can use the options object in getByRole method
    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    // ! If we have headings in the Documents all the h1 to h6 element have same role as heading so we can do the following
    // ? We can do this method but it is case sensitive
    // const headingElement = screen.getByRole("heading",{
    //   name:"This is heading"
    // });

    // * This method is recommended
    const headingElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(headingElement).toBeInTheDocument();

    const headingElement2 = screen.getByRole("heading", {
      level: 2,
    });
    expect(headingElement2).toBeInTheDocument();

    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();

    const checkBoxElement = screen.getByRole("checkbox");
    expect(checkBoxElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
