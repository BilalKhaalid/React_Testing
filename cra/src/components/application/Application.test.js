import Application from "./Application";
import { render, screen } from "@testing-library/react";

describe("Application", () => {
  render(<Application />);
  test("renders correctly", () => {
    const textBoxElement = screen.getByRole("textbox");
    expect(textBoxElement).toBeInTheDocument();

    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();

    const checkBoxElement = screen.getByRole("checkbox");
    expect(checkBoxElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
