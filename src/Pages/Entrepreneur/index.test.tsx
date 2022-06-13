import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import EntrepreneurPage from "./index";
import '@testing-library/jest-dom'


describe("Entrepreneur Page test", () => {
  test("Should display", () => {
    render(
      <BrowserRouter>
        <EntrepreneurPage />
      </BrowserRouter>
    );

    const trending = screen.getByText(/Trending Blinks/i);
    expect(trending).toBeInTheDocument();

    const justAdded = screen.getByText(/Just added/i);
    expect(justAdded).toBeInTheDocument();

    const featured = screen.getByText(/Featured Audio blinks/i);
    expect(featured).toBeInTheDocument();
  });
});
