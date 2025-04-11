import React, { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [category, setCategory] = useState("All");

  const items = [
    { id: 1, name: "Yogurt", category: "Dairy" },
    { id: 2, name: "Pomegranate", category: "Produce" },
    { id: 3, name: "Lettuce", category: "Produce" },
    { id: 4, name: "String Cheese", category: "Dairy" },
    { id: 5, name: "Cookies", category: "Dessert" },
  ];

  const filteredItems =
    category === "All" ? items : items.filter((item) => item.category === category);

  const handleDarkModeClick = () => {
    setDarkMode(!darkMode);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Header onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={filteredItems} onCategoryChange={handleCategoryChange} />
    </div>
  );
}

export default App;
