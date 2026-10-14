import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Sort from "./Sort";

describe("Sort", () => {
  test("renders sort dropdown", () => {
    render(<Sort sortBy="category" onSortChange={() => {}} />);
    const sortElement = screen.getByRole("combobox");
    expect(sortElement).toBeInTheDocument();

    const optionElements = screen.getAllByRole("option");
    expect(optionElements.length).toBe(3);
    expect(optionElements[0]).toHaveTextContent("Sort by");
    expect(optionElements[1]).toHaveTextContent("Category");
    expect(optionElements[2]).toHaveTextContent("Date");
  });

  test("calls onSortChange when sort option is changed", () => {
    const onSortChangeMock = jest.fn();
    render(<Sort sortBy="category" onSortChange={onSortChangeMock} />);
    const sortElement = screen.getByRole("combobox");
    userEvent.click(sortElement);
    const dateOption = screen.getByText("Date");
    userEvent.click(dateOption);
    fireEvent.change(sortElement, { target: { value: "date" } });
    expect(onSortChangeMock).toHaveBeenCalledTimes(1);
    expect(onSortChangeMock).toHaveBeenCalledWith("date");
  });
});
