import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import user from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("Counter", () => {
  test("counter renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    expect(countElement).toBeInTheDocument();
    expect(incrementButton).toBeInTheDocument();
  });

  test("count renders 1 after clicking increment button", async () => {
    user.setup();
    render(<Counter />);
    await act(async () => {
      const incrementButton = screen.getByRole("button", {
        name: "Increment",
      });
      await user.click(incrementButton);
    });
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("renders a count of 10 after clicking set button", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    await act(async () => {
      await user.type(amountInput, "10");
    });
    expect(amountInput).toHaveValue(10);
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    await act(async () => {
      await user.click(setButton);
    });
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  test("elements focus in correct order", async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    await user.tab();
    expect(incrementButton).toHaveFocus();
    const amountInput = screen.getByRole("spinbutton");
    await user.tab();
    expect(amountInput).toHaveFocus();
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
