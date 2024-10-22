import React, { useState } from "react";

function Randomcolor() {
  const [typeofcolor, settypeofcolor] = useState("HEX");
  const [color, setcolor] = useState("#000000");

  function randomcolorutility(length) {
    return Math.floor(Math.random() * length);
  }
  function handlecreatehexcolor() {
    let hexcolor = "#";
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    for (let i = 0; i < 6; i++) {
      hexcolor += hex[randomcolorutility(hex.length)];
    }
    setcolor(hexcolor);
  }
  function handlecreatergbcolor() {
    const r = randomcolorutility(256);
    const g = randomcolorutility(256);
    const b = randomcolorutility(256);

    setcolor(`rgb(${r},${g},${b})`);
  }
  return (
    <div
      style={{
        width: "100wh",
        height: "100vh",
        backgroundColor: color,
      }}
    >
      <div style={{ display: "flex",justifyContent:"center", }}>
        {" "}
        <button onClick={() => settypeofcolor("HEX")}>create Hex color</button>
        <button onClick={() => settypeofcolor("RGB")}>create RGB color</button>
        <button
          onClick={() =>
            typeofcolor === "HEX"
              ? handlecreatehexcolor()
              : handlecreatergbcolor()
          }
        >
          generate random color
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h1> {typeofcolor === "RGB" ? `rgb color  ` : "hex color"}</h1>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

export default Randomcolor;
