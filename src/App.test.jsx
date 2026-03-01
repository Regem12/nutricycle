import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import App from "./App";

describe("App Component", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </MemoryRouter>,
    );

    expect(
      screen.getByText("Turning Vegetable Waste into Growth"),
    ).toBeInTheDocument();
  });

  it("renders Header component", () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </MemoryRouter>,
    );

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("renders Footer component", () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </MemoryRouter>,
    );

    expect(screen.getByText(/© 2025 NutriCycle Project/i)).toBeInTheDocument();
  });

  it("renders main sections", () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </MemoryRouter>,
    );

    // Check that main hero title is rendered
    expect(
      screen.getByText("Turning Vegetable Waste into Growth"),
    ).toBeInTheDocument();
  });
});
