import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./style.scss";

import Header from "./components/header/Header.jsx";
import App from "./App.jsx";
import Footer from "./components/footer/Footer.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Header title="Learning React" />
        <App />
        <Footer text="&copy; 2025 Learning React" />
    </StrictMode>
);
