import { render, screen, fireEvent } from "@testing-library/react";
import { ItemButton } from "./ItemButton";
import { FoodItem } from "@/data/domain/fruits.domain";

describe("ItemButton", () => {
  const mockItem: FoodItem = { name: "Apple", type: "Fruit" };
  const mockOnClick = jest.fn();

  const defaultProps = {
    item: mockItem,
    onClick: mockOnClick,
    className: "bg-blue-500",
    showType: false,
  };

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  it("renders item name correctly", () => {
    render(<ItemButton {...defaultProps} />);
    expect(screen.getByText("Apple")).toBeInTheDocument();
  });

  it("shows type when showType is true", () => {
    render(<ItemButton {...defaultProps} showType={true} />);
    expect(screen.getByText("Apple (Fruit)")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<ItemButton {...defaultProps} />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-blue-500");
  });

  it("calls onClick handler when clicked", () => {
    render(<ItemButton {...defaultProps} />);
    fireEvent.click(screen.getByRole("button"));
    expect(mockOnClick).toHaveBeenCalledWith(mockItem);
  });
});
