import { fireEvent, render, screen } from "@testing-library/react";
import AboutBook from "./AboutBook";
import '@testing-library/jest-dom'
describe("Display Book Tab", () => {
  test("activate second tab when clicked", () => {
    render(<AboutBook />);
    const tab1 = screen.getByText(/Synopsis/i);
    const tab2 = screen.getByText(/Who is it for/i);
    const tab3 = screen.getByText(/About the author/i);

    expect(tab1).toHaveAttribute("aria-selected", "true");
    expect(tab2).toHaveAttribute("aria-selected", "false");
    expect(tab3).toHaveAttribute("aria-selected", "false");

    fireEvent.click(tab2);
    expect(tab1).toHaveAttribute("aria-selected", "false");
    expect(tab2).toHaveAttribute("aria-selected", "true");
    expect(tab3).toHaveAttribute("aria-selected", "false");

    fireEvent.click(tab3);
    expect(tab1).toHaveAttribute("aria-selected", "false");
    expect(tab2).toHaveAttribute("aria-selected", "false");
    expect(tab3).toHaveAttribute("aria-selected", "true");
  });
});
