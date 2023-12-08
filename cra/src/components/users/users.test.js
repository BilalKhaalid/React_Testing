import { render, screen } from "@testing-library/react";
import Users from "./Users";

describe("Users tests", () => {
  test("should render correctly", () => {
    render(<Users />);
    const textElement = screen.getByRole("heading", {
      name: "Users",
    });
    expect(textElement).toBeInTheDocument();
  });
});
