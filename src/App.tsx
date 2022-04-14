import React from "react";
import Dropdown from "./components/Dropdown";
import { items } from "../src/data/items";
import "../src/css/index.scss";

const App = () => {
  return (
    <div className="container">
      <Dropdown items={items} title="Select country/countries" />
    </div>
  );
}

export default App;