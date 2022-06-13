import { render, screen } from "@testing-library/react";
import Card from "./Card";

import '@testing-library/jest-dom'

describe("Card", () => {
  test("Show Display Finised Card", () => {
    render(
      <Card
        title="Book Title"
        author="Book Author"
        time="12-min read"
        read="1.9k reads"
        isFinished={true}
        value={1}
      />
    );
    const cardDisplay = screen.getByAltText("img");
    expect(cardDisplay).toBeInTheDocument();

    const title = screen.getByText("Book Title");
    expect(title).toBeInTheDocument();

    const authorElement = screen.getByText("Book Author");
    expect(authorElement).toBeInTheDocument();

    const timeElement = screen.getByText("12-min read");
    expect(timeElement).toBeInTheDocument();

    const readElement = screen.getByText("1.9k reads");
    expect(readElement).toBeInTheDocument();

    const finishedButton = screen.getByText(/Finished/i);
    expect(finishedButton).toBeInTheDocument();
  });

  test("Show Display Read Again Card", () => {
    render(
      <Card
        title="Book Title"
        author="Book Author"
        time="12-min read"
        read="1.9k reads"
        readAgain={true}
        value={1}
      />
    );
    const cardDisplay = screen.getByAltText("img");
    expect(cardDisplay).toBeInTheDocument();

    const title = screen.getByText("Book Title");
    expect(title).toBeInTheDocument();

    const authorElement = screen.getByText("Book Author");
    expect(authorElement).toBeInTheDocument();

    const timeElement = screen.getByText("12-min read");
    expect(timeElement).toBeInTheDocument();

    const readElement = screen.getByText("1.9k reads");
    expect(readElement).toBeInTheDocument();

    const readAgain = screen.getByText(/Read Again/i);
    expect(readAgain).toBeInTheDocument();
  });

  test("Show Display Add To Library Card", () => {
    render(
      <Card
        title="Book Title"
        author="Book Author"
        time="12-min read"
        read="1.9k reads"
        addToLibrary={true}
        value={1}
      />
    );
    const cardDisplay = screen.getByAltText("img");
    expect(cardDisplay).toBeInTheDocument();

    const title = screen.getByText("Book Title");
    expect(title).toBeInTheDocument();

    const authorElement = screen.getByText("Book Author");
    expect(authorElement).toBeInTheDocument();

    const timeElement = screen.getByText("12-min read");
    expect(timeElement).toBeInTheDocument();

    const readElement = screen.getByText("1.9k reads");
    expect(readElement).toBeInTheDocument();

    const finishedButton = screen.getByText(/Add to Library/i);
    expect(finishedButton).toBeInTheDocument();
  });
});
