import React from "react";
import "../styles/home.css";
import SellIcon from '@mui/icons-material/Sell';
import InventoryIcon from '@mui/icons-material/Inventory';
import PaidIcon from '@mui/icons-material/Paid';
import GroupIcon from '@mui/icons-material/Group';

const Home: React.FC = () => {
  return (
    <div>
      {/*contenedor principal*/}
      <div className="titulo">
        <h2>Bienvenido a Parajón</h2>
        <p style={{ marginTop: "-20px" }}>
          Panel de control principal. Resumen de actividades
        </p>
      </div>
      {/*cards*/}
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        {/*cards individuales*/}
        <div
          style={{
            backgroundColor: "white",
            width: "250px",
            height: "150px",
            borderStyle: "solid",
            borderColor: "#C2C6D1",
            borderRadius: "15px",
            borderWidth: "1px",
          }}
        >
          <SellIcon className="cardIcon"/>
          <h4 className="cardTitulo">Ventas del Mes</h4>
          <h2 className="money">C$0.00</h2>
        </div>
        {/*cards individuales*/}
        <div
          style={{
            backgroundColor: "white",
            width: "250px",
            height: "150px",
            borderStyle: "solid",
            borderColor: "#C2C6D1",
            borderRadius: "15px",
            borderWidth: "1px",
          }}
        >
          <InventoryIcon className="cardIcon"/>
          <h4  className="cardTitulo2">Productos en Stock</h4>
           <h2 className="money">C$0.00</h2>
        </div>
        {/*cards individuales*/}
        <div
          style={{
            backgroundColor: "white",
            width: "250px",
            height: "150px",
            borderStyle: "solid",
            borderColor: "#C2C6D1",
            borderRadius: "15px",
            borderWidth: "1px",
          }}
        >
          <PaidIcon className="cardIcon"/>
          <h4 className="cardTitulo3">Ingresos Totales</h4>
           <h2 className="money">C$0.00</h2>
        </div>
        {/*cards individuales*/}
        <div
          style={{
            backgroundColor: "white",
            width: "250px",
            height: "150px",
            borderStyle: "solid",
            borderColor: "#C2C6D1",
            borderRadius: "15px",
            borderWidth: "1px",
          }}
        >
          <GroupIcon className="cardIcon"/>
          <h4 className="cardTitulo4">Total Clientes</h4>
           <h2 className="money">C$0.00</h2>
        </div>
      </div>
      {/*fin de las cards*/}
      <h4 style={{ fontWeight: "lighter" }}>¿Qué actividad deseas realizar?</h4>
      {/*botones*/}
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <button className="boton">Nueva Venta</button>
        <button className="boton">Agregar Producto</button>
        <button className="boton">Ver Reportes</button>
      </div>
      {/*parte del historial*/}
      <div className="caja">
      <h4>Actividad Reciente</h4>
      </div>
    </div>
  );
};

export default Home;
