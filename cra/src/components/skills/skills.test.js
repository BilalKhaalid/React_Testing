import Skills from "./Skills";
import { render, screen } from "@testing-library/react";
describe("Skills", () => {
  const skills = ["HTML,CSS,JAVASCRIPT"];
  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("skillsList render correctly", () => {
    render(<Skills skills={skills} />);
    const liElements = screen.getAllByRole("listitem");
    expect(liElements).toHaveLength(skills.length);
  });
});
