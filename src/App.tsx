import React from "react";
import Dropdown from "./components/Dropdown";

const items = [
  {
    id: 1,
    name: "Lithuania"
  },
  {
    id: 2,
    name: "Latvia"
  },
  {
    id: 3,
    name: "Estonia"
  },
];

const App = () => {
  return (
    <div>
      <Dropdown items={items} title="Select country" />
    </div>
  );
}

export default App;