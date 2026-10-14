import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders title, sort dropdown, and all resource cards correctly", () => {
    render(<App />);
    const titleElement = screen.getByText("Health Assured Resource Centre");
    expect(titleElement).toBeInTheDocument();

    const sortDropdown = screen.getByRole("combobox");
    expect(sortDropdown).toBeInTheDocument();

    const cardElements = screen.getAllByRole("card");
    expect(cardElements.length).toBeGreaterThan(0);

    cardElements.forEach((card) => {
      const titleElement = card.querySelector("h3");
      expect(titleElement).toBeInTheDocument();

      const imageElement = card.querySelector("img");
      expect(imageElement).toBeInTheDocument();

      const tagElements = card.querySelectorAll("span");
      expect(tagElements.length).toBeGreaterThan(0);

      const watchTimeElement = card.querySelector("p");
      expect(watchTimeElement).toBeInTheDocument();
    });
  });
});
