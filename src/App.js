import "./App.css";
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Lyrics from "./components/tracks/Lyrics";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/lyrics/track/:id" element={<Lyrics />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
