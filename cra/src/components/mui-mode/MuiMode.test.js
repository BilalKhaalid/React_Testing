import { render, screen } from "@testing-library/react";
import MuiMode from "./MuiMode";
import Providers from "../providers/App-Providers";

describe("MuiMode", () => {
  test("MuiMode render correctly", () => {
    render(<MuiMode />, {
      // ! This wraps the element with provider every time it renders
      wrapper: Providers,
    });
    const typography = screen.getByRole("heading");
    expect(typography).toHaveTextContent("dark mode");
  });
});
