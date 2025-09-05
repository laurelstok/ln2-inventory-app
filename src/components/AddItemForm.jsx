import React, { useState } from "react";

function AddItemForm({ registrationBatches, setRegistrationBatches }) {
  const [experimentName, setExperimentName] = useState("");
  const [cellType, setCellType] = useState("");
  const [passage, setPassage] = useState(1);
  const [freezeDate, setFreezeDate] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!experimentName.trim()) {
      alert("Experiment Name is required");
      return;
    }

    if (quantity < 1) {
      alert("Quantity must be at least 1");
      return;
    }

    const newBatchId = `${Date.now()}`;
    const newVials = Array.from({ length: quantity }, (_, i) => ({
      name: `${experimentName}_${i + 1}`,
      cellType,
      passage,
      freezeDate,
      slot: null,
    }));

    const newBatch = {
      id: newBatchId,
      experimentName,
      cellType,
      passage,
      freezeDate,
      quantity,
      vials: newVials,
      collapsed: false,
    };

    setRegistrationBatches((prev) => [newBatch, ...prev]);

    // Reset form
    setExperimentName("");
    setCellType("");
    setPassage(1);
    setFreezeDate("");
    setQuantity(1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        padding: "16px",
        border: "2px solid #444",
        borderRadius: "8px",
        background: "#ffffff",
        minWidth: "300px",
        color: "#222", // ensures text is dark
      }}
    >
      <h3 style={{ margin: 0, color: "#111" }}>Register Vials</h3>

      <label style={{ display: "flex", flexDirection: "column", fontSize: "14px", fontWeight: "bold" }}>
        Experiment Name:
        <input
          type="text"
          value={experimentName}
          onChange={(e) => setExperimentName(e.target.value)}
          style={{ padding: "6px", border: "1px solid #aaa", borderRadius: "4px" }}
        />
      </label>

      <label style={{ display: "flex", flexDirection: "column", fontSize: "14px", fontWeight: "bold" }}>
        Cell Type:
        <select
          value={cellType}
          onChange={(e) => setCellType(e.target.value)}
          style={{ padding: "6px", border: "1px solid #aaa", borderRadius: "4px" }}
        >
          <option value="">-- Select --</option>
          <option value="HeLa">HeLa</option>
          <option value="293T">293T</option>
          <option value="Primary">Primary</option>
          <option value="Other">Other</option>
        </select>
      </label>

      <label style={{ display: "flex", flexDirection: "column", fontSize: "14px", fontWeight: "bold" }}>
        Passage #:
        <input
          type="number"
          min="1"
          value={passage}
          onChange={(e) => setPassage(Number(e.target.value))}
          style={{ padding: "6px", border: "1px solid #aaa", borderRadius: "4px" }}
        />
      </label>

      <label style={{ display: "flex", flexDirection: "column", fontSize: "14px", fontWeight: "bold" }}>
        Freeze Date:
        <input
          type="date"
          value={freezeDate}
          onChange={(e) => setFreezeDate(e.target.value)}
          style={{ padding: "6px", border: "1px solid #aaa", borderRadius: "4px" }}
        />
      </label>

      <label style={{ display: "flex", flexDirection: "column", fontSize: "14px", fontWeight: "bold" }}>
        Quantity:
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          style={{ padding: "6px", border: "1px solid #aaa", borderRadius: "4px" }}
        />
      </label>

      <button
        type="submit"
        style={{
          padding: "10px",
          background: "#0077cc",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Add Vials
      </button>
    </form>
  );
}

export default AddItemForm;
