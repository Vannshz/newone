import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Logo from "./Icons";

describe("Should display logo", () => {
  test("Display logo", () => {
    render(<Logo />);
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
  });
});
