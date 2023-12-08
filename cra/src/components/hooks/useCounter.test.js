import { act, render, renderHook } from "@testing-library/react";
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

  test("should increment the counter", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  test("should decrement the counter", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
});
