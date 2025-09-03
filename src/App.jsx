import React from "react";
import Header from "./components/Header";
import AddItemForm from "./components/AddItemForm";
import InventoryList from "./components/InventoryList";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Form to add new inventory items */}
        <section className="add-item-section">
          <AddItemForm />
        </section>

        {/* Inventory list */}
        <section className="inventory-list-section">
          <InventoryList />
        </section>
      </main>

      {/* Footer (optional) */}
      <footer>
        <p>&copy; 2025 LN2 Inventory App</p>
      </footer>
    </div>
  );
}

export default App;
