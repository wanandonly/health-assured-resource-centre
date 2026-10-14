import { render, screen } from "@testing-library/react";
import Filter from "./Filter";

describe("Filter", () => {
  test("renders filter input", () => {
    render(<Filter filterText="" onFilterChange={() => {}} />);
    const filterElement = screen.getByPlaceholderText(
      "Filter by title or tags...",
    );
    expect(filterElement).toBeInTheDocument();
  });
});
