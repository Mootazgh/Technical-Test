// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import "../src/App.css";
// provider for react-dnd
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./components/DragDrop";
import Home from "./components/Home";
import FormsIcreated from "./components/FormsIcreated";

function App() {
  return (
    // lezem el backend fel provider
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/newForm"
        element={
          <div className="container">
            <DndProvider backend={HTML5Backend}>
              <div className="App">
                <DragDrop />
              </div>
            </DndProvider>
          </div>
        }
      />
      <Route
        path="FormsIcreated"
        element={<FormsIcreated></FormsIcreated>}
      ></Route>
    </Routes>
  );
}

export default App;
