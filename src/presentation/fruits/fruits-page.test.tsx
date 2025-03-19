import { render, screen, fireEvent, act } from "@testing-library/react";
import { FruitsPage } from "./fruits-page";
import { fruitsList } from "@/data/domain/fruits.domain";

jest.useFakeTimers();

describe("FruitsPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders all columns", () => {
    render(<FruitsPage />);
    expect(screen.getByText("Main List")).toBeInTheDocument();
    expect(screen.getByText("Fruits")).toBeInTheDocument();
    expect(screen.getByText("Vegetables")).toBeInTheDocument();
  });

  it("moves fruit from main list to fruit column when clicked", () => {
    render(<FruitsPage />);
    const fruit = fruitsList.find((item) => item.type === "Fruit")!;

    fireEvent.click(screen.getByText(`${fruit.name} (${fruit.type})`));

    // Check item moved to fruit column
    expect(screen.getByText(fruit.name)).toBeInTheDocument();
  });

  it("moves item back to main list after 5 seconds", () => {
    render(<FruitsPage />);
    const fruit = fruitsList.find((item) => item.type === "Fruit")!;

    // Click fruit to move to fruit column
    fireEvent.click(screen.getByText(`${fruit.name} (${fruit.type})`));

    // Fast-forward 5 seconds
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    // Check item is back in main list
    expect(
      screen.getByText(`${fruit.name} (${fruit.type})`)
    ).toBeInTheDocument();
  });

  it("moves item back to main list immediately when clicked in type column", () => {
    render(<FruitsPage />);
    const fruit = fruitsList.find((item) => item.type === "Fruit")!;

    // Move to fruit column
    fireEvent.click(screen.getByText(`${fruit.name} (${fruit.type})`));

    // Click again to move back
    fireEvent.click(screen.getByText(fruit.name));

    // Check item is back in main list
    expect(
      screen.getByText(`${fruit.name} (${fruit.type})`)
    ).toBeInTheDocument();
  });
});
