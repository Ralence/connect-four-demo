import React from "react";
import Header from "./components/header/Header";
import Game from "./components/game/Game";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header />
      <Game />
    </div>
  );
}

export default App;
