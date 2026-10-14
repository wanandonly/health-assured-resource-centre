import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
  test("Cards are sorted by category when sort option is changed to category", () => {
    render(<App />);
    const sortDropdown = screen.getByRole("combobox");
    userEvent.selectOptions(sortDropdown, "category");

    const cardElements = screen.getAllByRole("card");
    const categories = cardElements.map((card) => {
      const categoryElement = card.querySelector("h2");
      return categoryElement ? categoryElement.textContent : "";
    });

    expect(categories).toEqual([...categories].sort());
  });
  test("Cards are sorted by date when sort option is changed to date", () => {
    render(<App />);
    const sortDropdown = screen.getByRole("combobox");
    userEvent.selectOptions(sortDropdown, "date");

    const cardElements = screen.getAllByRole("card");
    const dates = cardElements.map((card) => {
      const dateElement = card.querySelector("p:last-of-type");
      return dateElement
        ? dateElement.textContent?.replace("Date Uploaded: ", "")
        : "";
    });

    expect(dates).toEqual(
      [...dates].sort(
        (a, b) => new Date(a!).getTime() - new Date(b!).getTime(),
      ),
    );
  });
});
