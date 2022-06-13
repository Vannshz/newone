import { render, screen } from "@testing-library/react";
import FooterNav from "./FooterNav";
import MyData from "../../../data/FooterNav";
import '@testing-library/jest-dom'
describe("Footer Nav", () => {
  test("display editorial nav items", () => {
    render(<FooterNav title="Editorial" data={MyData.Editorial} />);
    const element = screen.getByText(/Editorial/i);
    expect(element).toBeInTheDocument();
  });

  test("display useful links nav items", () => {
    render(<FooterNav title="Useful Links" data={MyData.UsefulLinks} />);
    const element = screen.getByText(/Useful links/i);
    expect(element).toBeInTheDocument();
  });

  test("display company nav items", () => {
    render(<FooterNav title="Company" data={MyData.Company} />);
    const element = screen.getByText(/Company/i);
    expect(element).toBeInTheDocument();
  });
});
