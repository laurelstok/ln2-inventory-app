import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import AddItemForm from "./components/AddItemForm";
import InventoryList from "./components/InventoryList";
import FreezerGrid from "./components/FreezerGrid";

function App() {
  const [registrationBatches, setRegistrationBatches] = useState([]);
  const [selectedVial, setSelectedVial] = useState(null);

  return (
    <div className="app">
      <Header />
      <div className="main-layout">
        <AddItemForm
          selectedVial={selectedVial}
          setSelectedVial={setSelectedVial}
          registrationBatches={registrationBatches}
          setRegistrationBatches={setRegistrationBatches}
        />
        <InventoryList
          registrationBatches={registrationBatches}
          setSelectedVial={setSelectedVial}
        />
        <FreezerGrid
          registrationBatches={registrationBatches}
          setRegistrationBatches={setRegistrationBatches}
        />
      </div>
    </div>
  );
}

export default App;
