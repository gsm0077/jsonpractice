import "./App.css";
import React from "react";
import ButtonTop from "./page1/buttonTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./page2/Form";
import List from "./page3/List.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {" "}
        <ButtonTop />
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
