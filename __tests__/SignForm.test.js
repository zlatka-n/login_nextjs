import React from "react";
import SignForm from "../components/SignForm";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("on initial render, the  button is disabled", async () => {
  render(<SignForm />);

  expect(await screen.findByRole("button", { name: /Login/i })).toBeDisabled();
});
