import React from "react";
import Dropdown from "./components/Dropdown";
import { items } from "../src/data/items";

const App = () => {
  return (
    <div>
      <Dropdown items={items} title="Select country/countries" />
    </div>
  );
}

export default App;