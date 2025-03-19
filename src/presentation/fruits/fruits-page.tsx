"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FoodItem, fruitsList } from "@/data/domain/fruits.domain";
import { Column } from "./components/Column";

export const FruitsPage: React.FC = () => {
  const [mainList, setMainList] = useState<FoodItem[]>([...fruitsList]);
  const [fruitColumn, setFruitColumn] = useState<FoodItem[]>([]);
  const [vegetableColumn, setVegetableColumn] = useState<FoodItem[]>([]);

  // Use a ref to store timeouts so we can clean them up
  const timeoutRefs = useRef<Record<string, NodeJS.Timeout>>({});

  // Clean up timeouts when component unmounts
  useEffect(() => {
    const currentTimeouts = timeoutRefs.current;
    return () => {
      Object.values(currentTimeouts).forEach(clearTimeout);
    };
  }, []);

  const moveToTypeColumn = useCallback((item: FoodItem): void => {
    // Clear any existing timeout for this item
    if (timeoutRefs.current[item.name]) {
      clearTimeout(timeoutRefs.current[item.name]);
    }

    // Remove from main list
    setMainList((prev) => prev.filter((i) => i.name !== item.name));

    // Add to appropriate column
    if (item.type === "Fruit") {
      setFruitColumn((prev) => [...prev, item]);

      // Set timeout to move back to main list after 5 seconds
      timeoutRefs.current[item.name] = setTimeout(() => {
        setFruitColumn((prev) => prev.filter((i) => i.name !== item.name));
        setMainList((prev) => [...prev, item]);
        delete timeoutRefs.current[item.name];
      }, 5000);
    } else {
      setVegetableColumn((prev) => [...prev, item]);

      // Set timeout to move back to main list after 5 seconds
      timeoutRefs.current[item.name] = setTimeout(() => {
        setVegetableColumn((prev) => prev.filter((i) => i.name !== item.name));
        setMainList((prev) => [...prev, item]);
        delete timeoutRefs.current[item.name];
      }, 5000);
    }
  }, []);

  const moveBackToMainList = useCallback((item: FoodItem): void => {
    // Clear any existing timeout for this item
    if (timeoutRefs.current[item.name]) {
      clearTimeout(timeoutRefs.current[item.name]);
      delete timeoutRefs.current[item.name];
    }

    // Remove from column
    if (item.type === "Fruit") {
      setFruitColumn((prev) => prev.filter((i) => i.name !== item.name));
    } else {
      setVegetableColumn((prev) => prev.filter((i) => i.name !== item.name));
    }

    // Add to main list
    setMainList((prev) => [...prev, item]);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Fruits and Vegetables Sorter</h1>

      <div className="grid grid-cols-3 gap-4">
        {/* Main List Column */}
        <Column
          title="Main List"
          items={mainList}
          onItemClick={moveToTypeColumn}
          bgColor=""
          buttonColor="bg-blue-500 hover:bg-blue-600"
          showItemType={true}
        />

        {/* Fruit Column */}
        <Column
          title="Fruits"
          items={fruitColumn}
          onItemClick={moveBackToMainList}
          bgColor="bg-red-50"
          buttonColor="bg-red-500 hover:bg-red-600"
        />

        {/* Vegetable Column */}
        <Column
          title="Vegetables"
          items={vegetableColumn}
          onItemClick={moveBackToMainList}
          bgColor="bg-green-50"
          buttonColor="bg-green-500 hover:bg-green-600"
        />
      </div>
    </div>
  );
};
