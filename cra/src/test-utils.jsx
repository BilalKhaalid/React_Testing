import React from "react";
import { render } from "@testing-library/react";
import Providers from "./components/providers/App-Providers";

const customRender = (ui, options) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
