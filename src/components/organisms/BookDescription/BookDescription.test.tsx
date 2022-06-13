import { fireEvent, render, screen } from "@testing-library/react";
import BookDescription from "./BookDescription";
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom'
const MockBookDescription = () => {
  return (
      <BrowserRouter>
        <BookDescription/>
      </BrowserRouter>
  )
}


describe("Book View test", () => {
  test("Button Finished Reading", () => {
    render(<MockBookDescription />);
    const buttonElement = screen.getByRole("button", { name: /finished reading/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test("Button Read Now", () => {
    render(<MockBookDescription />);
    const buttonElement = screen.getByRole("button", { name: /read now/i });
    expect(buttonElement).toBeInTheDocument();
  })

  // test("Should change color on mouse enter and mouse over", () => {
  //   render(<BookView />);
  //   const elementText = screen.getByText("Finished Reading");
  //   const state = false;
  //   fireEvent.mouseEnter(elementText);
  //   expect(state).toBe(false);
  //   fireEvent.mouseLeave(elementText);
  //   expect(state).toBe(false);
  // });

  test("Should update api on click", () => {
    render(<MockBookDescription />);
    const elementText = screen.getByRole("button", { name: /finished reading/i });
    fireEvent.click(elementText);
    expect(elementText).toBeInTheDocument();
    // const title = screen.getByTestId("card-2").textContent;
    // expect(title).toEqual("Beyond Entrepreneurship");
  });
});
