import React, { useState } from "react";
import "../styles/sidebar.css";

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className="menu-btn" onClick={toggleSidebar}>
                ☰
            </button>

            <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <nav>
                    <ul className="top-links">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Inventario</a></li>
                        <li><a href="#">Vender</a></li>
                        <li><a href="#">Donar</a></li>
                        <li><a href="#">Encargo</a></li>
                        <li><a href="#">Entregar</a></li>
                        <li><a href="#">Registrar</a></li>
                    </ul>
                    <ul className="bottom-links">
                        <li><a href="#">Reportes</a></li>
                        <li><a href="#">Ajustes</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
