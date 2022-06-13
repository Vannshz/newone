import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookDetailPage from "./index";
import '@testing-library/jest-dom'


describe("Book Detail Page test", () => {
  test("Should display", () => {
    render(
      <BrowserRouter>
        <BookDetailPage />
      </BrowserRouter>
    );

    const titles = screen.getAllByRole("heading");
    expect(titles.length).toBe(4);

    const readNow = screen.getByText(/Read Now/i);
    expect(readNow).toBeInTheDocument();

    const finishedButton = screen.getByText(/Finished Reading/i);
    expect(finishedButton).toBeInTheDocument();

    const synopsis = screen.getByText(/Synopsis/i);
    expect(synopsis).toBeInTheDocument();
  });
});
