import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./sass/reset.scss";
import "./sass/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
