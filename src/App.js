import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Header */}
        <Header />
        {/* Home */}
        <Home />
      </header>
    </div>
  );
}

export default App;
