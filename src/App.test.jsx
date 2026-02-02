import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("renders without crashing", () => {
    render(<App />);

    expect(
      screen.getByText("Turning Vegetable Waste into Growth"),
    ).toBeInTheDocument();
  });

  it("renders Header component", () => {
    render(<App />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("renders Footer component", () => {
    render(<App />);

    expect(screen.getByText(/© 2025 NutriCycle Project/i)).toBeInTheDocument();
  });

  it("renders main sections", () => {
    render(<App />);

    // Check that main hero title is rendered
    expect(
      screen.getByText("Turning Vegetable Waste into Growth"),
    ).toBeInTheDocument();
  });
});
