import { render, screen } from "@testing-library/react";
import Sort from "./Sort";

describe("Sort", () => {
  test("renders sort dropdown", () => {
    render(<Sort sortBy="category" onSortChange={() => {}} />);
    const sortElement = screen.getByRole("combobox");
    expect(sortElement).toBeInTheDocument();

    const optionElements = screen.getAllByRole("option");
    expect(optionElements.length).toBe(2);
    expect(optionElements[0]).toHaveTextContent("Sort by Category");
    expect(optionElements[1]).toHaveTextContent("Sort by Date");
  });
});
