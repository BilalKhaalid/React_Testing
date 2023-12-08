import { render, screen } from "@testing-library/react";
import Users from "./Users";
import { server } from "../mocks/server";
import { rest } from "msw";

describe("Users tests", () => {
  test("should render correctly", () => {
    render(<Users />);
    const textElement = screen.getByRole("heading", {
      name: "Users",
    });
    expect(textElement).toBeInTheDocument();
  });

  test("should render a list of users", async () => {
    render(<Users />);
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).toHaveLength(3);
  });

  test("should render error", () => {
    server.use(
      rest.get("https://jsonplaceholder.typicode.com/users"),
      (req, res, ctx) => {
        return ctx.status(500);
      }
    );
    render(<Users />);
    const error = screen.getByText("Error fetching users");
    expect(error).toBeInTheDocument();
  });
});
