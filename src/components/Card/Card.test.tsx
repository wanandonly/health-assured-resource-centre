import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  test("renders all card elements correctly", () => {
    render(
      <Card
        title="Test Title"
        image="https://www.datocms-assets.com/93767/1753971746-photo.jpg"
        tags={["wellbeing", "mindfulness", "relaxation"]}
        watchTime={25}
      />,
    );
    const titleElement = screen.getByText("Test Title");
    expect(titleElement).toBeInTheDocument();

    const imageElement = screen.getByAltText("Test Title");
    expect(imageElement).toBeInTheDocument();

    const tagElements = screen.getAllByText(
      /wellbeing|mindfulness|relaxation/i,
    );
    expect(tagElements.length).toBe(3);

    const watchTimeElement = screen.getByText(/Watch Time: 25/i);
    expect(watchTimeElement).toBeInTheDocument();
  });
});
