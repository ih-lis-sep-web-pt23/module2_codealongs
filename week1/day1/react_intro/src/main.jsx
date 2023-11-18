import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* 
    this is the same as above
     <>
      <h1>Hello world</h1>
    </>
    */}
  </React.StrictMode>
);
