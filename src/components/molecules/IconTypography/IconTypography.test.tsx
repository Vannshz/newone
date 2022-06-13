import { render, screen } from "@testing-library/react";
import IconTypography from "./IconTypography";
import { ReactComponent as Add } from "../../../images/add.svg";
import '@testing-library/jest-dom'
describe("Icon with Typography tests", () => {
  test("Add icon with Typography", () => {
    render(
      <IconTypography
        iconSrc={<Add />}
        title="Add to library"
        variant="body1"
      />
    );
    const element = screen.getByText(/Add to library/i);
    expect(element).toBeInTheDocument();
  });
});
