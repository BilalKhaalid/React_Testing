import Skills from "./Skills";
import { render, screen } from "@testing-library/react";
describe("Skills", () => {
  const skills = ["HTML", "CSS", "JAVASCRIPT"];
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

  test("Login button renders correctly", () => {
    render(<Skills skills={skills} />);
    const LoginButton = screen.getByRole("button", { name: "Login" });
    expect(LoginButton).toBeInTheDocument();
  });

  // ! This below is queryByRole method of RTL
  test("start learning button does not renders", () => {
    render(<Skills skills={skills} />);
    const learningButton = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(learningButton).not.toBeInTheDocument();
  });

  // ! This below is FindByRole method of RTL
  test("start learning button renders eventually", async () => {
    render(<Skills skills={skills} />);
    const learningButton = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      {
        // timeout: 2000,
      }
    );
    expect(learningButton).toBeInTheDocument();
  });
});
