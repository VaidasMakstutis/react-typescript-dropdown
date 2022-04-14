import React from "react";
import { items } from "../../data/items";

const DropdownItem = () => {
  const handleClicker = (item: any = true) => {};

  return (
    <ul className="dropdown-list">
      {items.map(item => {
        return (
          <li className="dropdown-list-item" key={item.id}>
            <button type="button" onClick={() => handleClicker(item)}>
              <span>{item.name}</span>
              <span>Selected...</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default DropdownItem;
