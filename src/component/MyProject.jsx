
import React from "react";

export default function MyProject() {
  const cards = [
    { title: "Play Game", description: "Go To Play Game" },
    { title: "Watch Movie", description: "Go To Moving" },
    { title: "Go To Shopping", description: "Shopping " },
    { title: "Music", description: "Listing To Music" },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "4px", 
        width: "100%",
        height: "100%",
        padding: "2px", 
        boxSizing: "border-box",
      }}
    >
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            background: "#f9f9f9",
            border: "1px solid #ccc",
            borderRadius: "3px",
            padding: "2px", 
            textAlign: "center",
          }}
        >
          <h3 style={{ fontSize: "10px", marginBottom: "2px" }}>{card.title}</h3>
          <p style={{ fontSize: "8px", color: "#333", marginBottom: "4px" }}>
            {card.description}
          </p>
          <button
            style={{
              padding: "2px 6px",
              fontSize: "8px",
              borderRadius: "2px",
              border: "none",
              backgroundColor: "#4CAF50",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => alert(`${card.title} ボタンがクリックされました！`)}
          >
            click me
          </button>
        </div>
      ))}
    </div>
  );
}