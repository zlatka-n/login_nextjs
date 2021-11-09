import React from "react";
import SignIn from "../components/SignIn";
import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";

test("on initial render, the pay button is disabled", async () => {
  render(<SignIn />);
  expect(await screen.findByRole("button", { name: /Login/i })).toBeDisabled();
});
