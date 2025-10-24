import React, { useState } from "react";
import "../styles/sidebar.css";
//iconos 
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


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
                        <li><a href="#"><HomeOutlinedIcon className="iconos"/>Inicio</a></li>
                        <li><a href="#"><InventoryOutlinedIcon className="iconos"/>Inventario</a></li>
                        <li><a href="#"><SellOutlinedIcon className="iconos"/>Vender</a></li>
                        <li><a href="#"><VolunteerActivismOutlinedIcon className="iconos"/>Donar</a></li>
                        <li><a href="#"><ShoppingCartOutlinedIcon className="iconos"/>Encargo</a></li>
                        <li><a href="#"><DirectionsBusFilledOutlinedIcon className="iconos"/>Entregar</a></li>
                        <li><a href="#"><PersonAddAltOutlinedIcon className="iconos"/>Registrar</a></li>
                    </ul>
                    <ul className="bottom-links">
                        <li><a href="#"><AssessmentOutlinedIcon className="iconos"/>Reportes</a></li>
                        <li><a href="#"><SettingsOutlinedIcon className="iconos"/>Ajustes</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
