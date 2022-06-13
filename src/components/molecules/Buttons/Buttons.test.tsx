import { render, screen } from "@testing-library/react";
import Button from "./Buttons";
import '@testing-library/jest-dom'
import IconTypography from "../IconTypography/IconTypography";
import { ReactComponent as Add } from "../../../images/add.svg";

describe("Button", () => {
  test("Button display", () => {
    render(<Button children={<Add />} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Button with Icon Typography", () => {
    render(
      <Button
        children={
          <IconTypography iconSrc={<Add />} title="Add" variant="body1" />
        }
      />
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

  });
});
