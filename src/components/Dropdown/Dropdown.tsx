import React, { useState } from "react";
import { items } from "../../data/items";

export interface IDropdownProps {
  title: string;
  items: Item[];
  multiSelect: boolean;
}

export interface Item {
  id: number;
  name: string;
}

const Dropdown = (props: IDropdownProps) => {
  const { title, multiSelect = false } = props;

  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState<Item[]>([]);

  const toggle = () => setOpen(!open);

  const handleClicker = (item: Item) => {
    if (!selection.some(current => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(current => current.id !== item.id);
      setSelection([...selectionAfterRemoval]);
    }
  };

  const isItemSelected = (item: Item) => {
    if (selection.find(current => current.id === item.id)) {
      return true;
    }
    return false;
  };

  return (
    <div className="dropdown-wrapper">
      <div tabIndex={0} className="dropdown-header" role="button" onKeyPress={() => toggle()} onClick={() => toggle()}>
        <div className="dropdown-header_title">
          <p>{title}</p>
        </div>
        <div className="dropdown-header_action">
          <p>{open ? "Close" : "Open"}</p>
        </div>
      </div>
      {open && (
        <ul className="dropdown-list">
          {items.map(item => {
            return (
              <li className="dropdown-list-item" key={item.id}>
                <button type="button" onClick={() => handleClicker(item)}>
                  <span>{item.name}</span>
                  <span>{isItemSelected(item) && "Selected"}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;