import React from "react";
import InventoryItem from "./InventoryItem";

function InventoryList() {
  const items = ["LN2 Tank", "Protective Gloves", "Label Tape", "Sanity"]; // Example

  return (
    <ul>
      {items.map((item, index) => (
        <InventoryItem key={index} name={item} />
      ))}
    </ul>
  );
}

export default InventoryList;
