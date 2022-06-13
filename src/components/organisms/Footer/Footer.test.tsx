import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import '@testing-library/jest-dom'
describe("Footer", () => {
  test("logo display", () => {
    render(<Footer />);
    const logo = screen.getByAltText(/Logo/i);
    expect(logo).toBeInTheDocument();
  });
  
  test("Footer Quote", () => {
    render(<Footer />);
    const quote = screen.getByText(/Big Ideas /i);
    expect(quote).toBeInTheDocument();
  })
});