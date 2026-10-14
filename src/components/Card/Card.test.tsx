import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "./Card";

describe("Card", () => {
  const cardProps = {
    title: "Test Title",
    thumbnail: "https://www.datocms-assets.com/93767/1753971746-photo.jpg",
    tags: ["wellbeing", "mindfulness", "relaxation"],
    duration: 25,
    description: "Test description",
    date_uploaded: "2023-01-01",
  };

  test("renders title, thumbnail, tags and duration on first load", () => {
    render(
      <Card
        title={cardProps.title}
        thumbnail={cardProps.thumbnail}
        tags={cardProps.tags}
        duration={cardProps.duration}
        description={cardProps.description}
        date_uploaded={cardProps.date_uploaded}
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

    const watchTimeElement = screen.getByText(/Duration: 25 minutes/i);
    expect(watchTimeElement).toBeInTheDocument();
  });

  test("renders description and date_uploaded when card is clicked", async () => {
    render(
      <Card
        title={cardProps.title}
        thumbnail={cardProps.thumbnail}
        tags={cardProps.tags}
        duration={cardProps.duration}
        description={cardProps.description}
        date_uploaded={cardProps.date_uploaded}
      />,
    );

    const cardElement = screen.getByRole("card");
    await userEvent.click(cardElement);

    const descriptionElement = screen.getByText("Test description");
    expect(descriptionElement).toBeInTheDocument();

    const dateUploadedElement = screen.getByText(/Date Uploaded: 2023-01-01/i);
    expect(dateUploadedElement).toBeInTheDocument();
  });
});
