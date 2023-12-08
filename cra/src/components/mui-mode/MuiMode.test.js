import { render, screen } from "../../test-utils";
import MuiMode from "./MuiMode";

describe("MuiMode", () => {
  test("MuiMode render correctly", () => {
    render(
      <MuiMode />
      //  {
      //   // ! This wraps the element with provider every time it renders
      //   wrapper: Providers,
      // }
    );
    const typography = screen.getByRole("heading");
    expect(typography).toHaveTextContent("dark mode");
  });
});
