import Application from "./Application";
import { render, screen } from "@testing-library/react";

describe("Application", () => {
  render(<Application />);
  test("renders correctly", () => {
    // const textBoxElement = screen.getByRole("textbox", {
    //   name: "Name",
    // });
    // expect(textBoxElement).toBeInTheDocument();

    // ! This below is getByLabelText method
    // const textElement2 = screen.getByLabelText("Name");
    // expect(textElement2).toBeInTheDocument();

    // ! When we have multiple elements of the same role we can use the options object in getByRole method
    // const bioElement = screen.getByRole("textbox", {
    //   name: "Bio",
    // });
    // expect(bioElement).toBeInTheDocument();

    // ! This below is getByLabelText method
    // * When we have multiple element with same label we can specify a selector
    const textarea = screen.getByLabelText("Bio", {
      selector: "textarea",
    });
    expect(textarea).toBeInTheDocument();
    const textarea2 = screen.getByLabelText("Bio", {
      selector: "input",
    });
    expect(textarea2).toBeInTheDocument();

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

    // const checkBoxElement = screen.getByRole("checkbox");
    // expect(checkBoxElement).toBeInTheDocument();

    // ! This below is getByLabelText method
    const checkBoxElement2 = screen.getByLabelText(
      "I agree to terms and conditions"
    );
    expect(checkBoxElement2).toBeInTheDocument();

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();

    // ! This below is getByPlaceholder method
    const PlaceHolderElement = screen.getByPlaceholderText("Form");
    expect(PlaceHolderElement).toBeInTheDocument();
  });
});
