import { render, screen } from "@testing-library/react";
import DashboardPage from "../pages/dashboard";
import { AuthProvider } from "../context/AuthContext";

test("display nasa picture of the day", async () => {
  render(<DashboardPage />, { wrapper: AuthProvider });

  const image = await screen.findByAltText("Picture of the author");
  expect(image).toBeInTheDocument();
});
