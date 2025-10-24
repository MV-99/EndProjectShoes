import React, { useState } from "react";
import "../styles/sidebar.css";
import { Link } from 'react-router-dom';
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
                    <h1 style={{ fontSize: '35px', color:'#1B4E6D', fontFamily:"'Times New Roman', Times, serif", fontWeight:'normal'}}>Parajón</h1>
                    <ul className="top-links">
                        <li><Link to="/"><HomeOutlinedIcon className="iconos"/>Inicio</Link></li>
                        <li><Link to="/inventario"><InventoryOutlinedIcon className="iconos"/>Inventario</Link></li>
                        <li><Link to="/vender"><SellOutlinedIcon className="iconos"/>Vender</Link></li>
                        <li><Link to="/donar"><VolunteerActivismOutlinedIcon className="iconos"/>Donar</Link></li>
                        <li><Link to="/encargo"><ShoppingCartOutlinedIcon className="iconos"/>Encargo</Link></li>
                        <li><Link to="/entregar"><DirectionsBusFilledOutlinedIcon className="iconos"/>Entregar</Link></li>
                        <li><Link to="/registrar"><PersonAddAltOutlinedIcon className="iconos"/>Registrar</Link></li>
                    </ul>
                    <ul className="bottom-links">
                        <li><Link to="/reportes"><AssessmentOutlinedIcon className="iconos"/>Reportes</Link></li>
                        <li><Link to="/ajustes"><SettingsOutlinedIcon className="iconos"/>Ajustes</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
