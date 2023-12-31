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

    // ! This below is getByText method which also have selector option
    // const paraElement = screen.getByText("All fields are required", {
    //   selector: "p",
    // });
    // expect(paraElement).toBeInTheDocument();

    // ! This below is getByDisplayValue  method
    const displayValueElement = screen.getByDisplayValue("true");
    expect(displayValueElement).toBeInTheDocument();
    // ! This below is getByAltText method
    const imageElement = screen.getByAltText("This is an image");
    expect(imageElement).toBeInTheDocument();

    // ! This below is getByTitle method
    const titleElement = screen.getByTitle("close");
    expect(titleElement).toBeInTheDocument();

    // ! This below is getByTestId method
    const testIdElement = screen.getByTestId("custom-element");
    expect(testIdElement).toBeInTheDocument();

    // ! TextMatch below
    // ? Exact Match
    // const paraElement = screen.getByText("All fields are required");
    // ? substring match
    // const paraElement = screen.getByText("fields ", { exact: false });
    // ? Functional Match
    const paraElement = screen.getByText((content) =>
      content.startsWith("All")
    );
    expect(paraElement).toBeInTheDocument();
  });
});
