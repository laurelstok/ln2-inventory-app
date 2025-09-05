import React from "react";

function FreezerGrid({ registrationBatches }) {
  const rows = 10; // A–J
  const cols = 9;  // 1–9

  // Flatten vials into a map {slot -> vial}
  const allVials = registrationBatches.flatMap((batch) => batch.vials);
  const slotMap = new Map(allVials.map((v) => [v.slot, v]));

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `60px repeat(${cols}, 60px)`, // first column = labels
        gridTemplateRows: `40px repeat(${rows}, 60px)`,    // first row = labels
        gap: "4px",
        padding: "10px",
        border: "2px solid #ccc",
        borderRadius: "8px",
        background: "#f9f9f9",
      }}
    >
      {/* Empty top-left corner */}
      <div></div>

      {/* Column headers (1–9) */}
      {Array.from({ length: cols }, (_, c) => (
        <div
          key={`col-${c}`}
          style={{
            textAlign: "center",
            fontWeight: "bold",
            lineHeight: "40px",
            fontSize: "14px",
            color: "#222", //darker text
            background: "#dcdcdc",
            borderRadius: "4px",
          }}
        >
          {c + 1}
        </div>
      ))}

      {/* Rows A–J with their cells */}
      {Array.from({ length: rows }, (_, r) => (
        <React.Fragment key={`row-${r}`}>
          {/* Row header (A–J) */}
          <div
            style={{
              textAlign: "center",
              fontWeight: "bold",
              lineHeight: "60px",
              fontSize: "14px",
              color: "#222", //darker text
              background: "#dcdcdc",
              borderRadius: "4px",
            }}
          >
            {String.fromCharCode(65 + r)}
          </div>

          {/* Cells for this row */}
          {Array.from({ length: cols }, (_, c) => {
            const slot = `${String.fromCharCode(65 + r)}${c + 1}`;
            const vial = slotMap.get(slot);

            return (
              <div
                key={slot}
                style={{
                  width: "60px",
                  height: "60px",
                  border: "1px solid #999",
                  borderRadius: "50%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                  background: vial ? "#e0f7fa" : "#fff",
                }}
              >
                {vial ? (
                  <>
                    <div style={{ fontFamily: "monospace" }}>
                      {vial.name.slice(-4)}
                    </div>
                    <div style={{ fontStyle: "italic" }}>
                      {vial.species || "—"}
                    </div>
                  </>
                ) : null}
              </div>
            );
          })}
        </React.Fragment>
      ))}
    </div>
  );
}

export default FreezerGrid;
