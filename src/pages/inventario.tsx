import React from "react";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import '../styles/inventario.css';


const Inventario: React.FC = () => {
  return (
    <div>
    <div style={{ padding: "24px" }}>
      <h2>Inventario</h2>
      <p style={{ marginTop: "-20px", color: "#757575" }}>
        Gestiona tu inventario de calzado
      </p>
    </div>
    {/*parte de botones*/}
    <div style={{display:'flex', flexDirection:'row', gap:'20px'}}>
     <input 
     type='search'
     placeholder="Buscar mas zapatos..."
     style={{width:'550px', height:'40px', borderRadius:'10px',
      borderColor:'#C2C6D1',
      borderStyle:'solid',
      borderWidth:'1px',
      outline:'none',
      paddingLeft:'15px'
     }}
     />
     <button style={{
      width:'200px',
      height:'40px',
      borderRadius:'10px',
      outline:'none',
      borderStyle:'solid',
      borderColor:'#1B4E6D',
      color:'white',
      backgroundColor:'#1B4E6D',
     }}>Filtrar</button>
    </div>
    {/*parte de cards*/}
    <div style={{display:'flex', flexDirection:'row', gap:'20px', marginTop:'40px'}}>
    {/*cards*/}
    <div className="card" >
    <div className="imagen">
    <img src='img.png' alt='shoes' className="foto"/>
    </div>
    {/*resto de contenido de la card*/}
    <h3 style={{marginLeft:'-120px', marginTop:'5px'}}>Nike Air Max</h3>
    </div>
    </div>
    </div>
  );
};

export default Inventario;
