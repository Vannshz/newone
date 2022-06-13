import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import '@testing-library/jest-dom'
const MockHeader = () => (
  <BrowserRouter>
      <Header />
  </BrowserRouter>
);

describe("Header tests before login", () => {
  test("should login", async () => {
    render(<MockHeader />);

    expect(window.location.pathname).toEqual("/");

    const myLibrary = screen.queryByText(/My Library/i);
    expect(myLibrary).not.toBeNull();

    const explore = screen.queryByText(/Explore/i);
    expect(explore).not.toBeNull();
  });
});
