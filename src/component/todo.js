import React, { useState } from "react";
import "../styles.css";

const Todo = () => {
  const [data, setData] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!data) {
    } else {
      setItems([...items, data]);
      setData("");
    }
  };

  const deleteItem = (id) => {
    console.log(id);
    const updateditems = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(updateditems);
  };

  const clearall = () => {
    setItems([]);
  };

  return (
    <>
      <div className="background">
        <div className="heading">
          <h>ToDo List</h>
        </div>
        <div className="input">
          <input
            value={data}
            placeholder="Enter Text"
            onChange={(e) => setData(e.target.value)}
          />
          <button onClick={addItem}>Add Item</button>
        </div>
        <div>
          {items?.map((elem, ind) => {
            return (
              <div className="items" key={ind}>
                <h className="list-items">{elem}</h>
                <button className="dlt-btn" onClick={() => deleteItem(ind)}>
                  Delete Item
                </button>
              </div>
            );
          })}
        </div>
        <div className="btn-clr">
          <button onClick={clearall}>Clear All</button>
        </div>
      </div>
    </>
  );
};
export default Todo;
