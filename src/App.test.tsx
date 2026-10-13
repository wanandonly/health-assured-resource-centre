import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders Initialize App text", () => {
    render(<App />);
    const textElement = screen.getByText(/Initialize App/i);
    expect(textElement).toBeInTheDocument();
  });
});
