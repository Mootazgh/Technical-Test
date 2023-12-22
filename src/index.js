import React from "react";
import ReactDOM from "react-dom/client";
import "./Index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  </Router>
);
