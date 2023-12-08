import { renderHook } from "@testing-library/react";
import useCounter from "../hooks/useCounter";
describe("useCounter", () => {
  test("should renders initial value of 0", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test("should renders same initial value", () => {
    const { result } = renderHook(useCounter, {
      initialProps: 10,
    });
    expect(result.current.count).toBe(10);
  });
});
