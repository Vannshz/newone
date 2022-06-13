import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";
import '@testing-library/jest-dom'
describe("Search Bar test", () => {
  test("Display search bar", () => {
    render(<SearchBar />);
    const searchElement = screen.getByPlaceholderText(
      "Search by title or author"
    );
    // fireEvent.change(searchElement, { target: { value: "searching" } });
   // expect(searchElement).toHaveValue("searching");
  });
});
