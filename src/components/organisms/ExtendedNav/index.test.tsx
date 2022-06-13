import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import ExtendedNav from "./index";
import '@testing-library/jest-dom'
describe("Extended Nav test", () => {
  test("should display", () => {
    render(
      <BrowserRouter>
        <ExtendedNav />
       </BrowserRouter>
    );
    const element = screen.getByText("Entreprenuership");
    expect(element).toBeInTheDocument();
  });
});
