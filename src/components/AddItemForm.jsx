import React, { useState } from "react";

function AddItemForm() {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Adding item:", item);
    setItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter item name"
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddItemForm;
