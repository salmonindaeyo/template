import { render, screen, fireEvent } from "@testing-library/react";
import { Column } from "./Column";
import { FoodItem } from "@/data/domain/fruits.domain";

describe("Column", () => {
  const mockItems: FoodItem[] = [
    { name: "Apple", type: "Fruit" },
    { name: "Banana", type: "Fruit" },
  ];
  const mockOnItemClick = jest.fn();

  const defaultProps = {
    title: "Test Column",
    items: mockItems,
    onItemClick: mockOnItemClick,
    bgColor: "bg-gray-100",
    buttonColor: "bg-blue-500",
    showItemType: false,
  };

  beforeEach(() => {
    mockOnItemClick.mockClear();
  });

  it("renders title correctly", () => {
    render(<Column {...defaultProps} />);
    expect(screen.getByText("Test Column")).toBeInTheDocument();
  });

  it("renders all items", () => {
    render(<Column {...defaultProps} />);
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Banana")).toBeInTheDocument();
  });

  it("shows item type when showItemType is true", () => {
    render(<Column {...defaultProps} showItemType={true} />);
    expect(screen.getByText("Apple (Fruit)")).toBeInTheDocument();
  });

  it("calls onItemClick when item is clicked", () => {
    render(<Column {...defaultProps} />);
    fireEvent.click(screen.getByText("Apple"));
    expect(mockOnItemClick).toHaveBeenCalledWith(mockItems[0]);
  });
});
