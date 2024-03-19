import React, { useState } from "react";
import Category from "./componenents/Category";
import Menu from "./componenents/Menu";
import data from "./data";
import "./SearchBar.css"; // Import CSS file

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [searchTerm, setSearchTerm] = useState(""); // State สำหรับเก็บคำค้นหา

  const searchItems = (term) => {
    setSearchTerm(term);
    if (term !== "") {
      const filteredItems = data.filter((item) =>
        item.title.toLowerCase().includes(term.toLowerCase())
      );
      setMenuItems(filteredItems);
    } else {
      setMenuItems(data);
    }
  };

  const allCategories = [
    "All",
    ...new Set(
      data.map((item) => {
        return item.category;
      })
    ),
  ];
  const filterItems = (category) => {
    if (category === "All") {
      setMenuItems(data);
    } else {
      const newItems = data.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  };
  return (
    <>
      <h2>NamPaoWa Shop</h2>
      <main>
        {/* Display search input without search button */}
      <input
        type="text"
        className="search-bar" 
        placeholder="Search drinks..."
        value={searchTerm}
        onChange={(e) => searchItems(e.target.value)}
        />

        <section className="menu section">
          <div className="title">
            <h2>Our Menu</h2>
            <div className="underline"></div>
            <Category allCategories={allCategories} filterItems={filterItems} />
            <Menu items={menuItems} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
