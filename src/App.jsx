import { useState } from "react";
import Category from "./componenents/Category";
import Menu from "./componenents/Menu";
import data from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const allCategories = [
    "All",
    ...new Set(
      data.map((item) => {
        return item.category;
      })
    ),
  ];
 const filterItems = (category)=>{
  if(category==="All"){
    setMenuItems(data)
  }else{
    const newItems = data.filter(
      (item)=>item.category===category
    );
    setMenuItems(newItems)
  }
 }
  return (
    <>
      <h2>NamPaoWa Shop</h2>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Our Menu</h2>
            <div className="underline"></div>
            <Category
              allCategories={allCategories}
              filterItems={filterItems}
            />
            <Menu items={menuItems} />
            
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
