
import './App.css'
import Sidebar from './components/sidebar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Inventario from './pages/inventario';
import Vender from './pages/vender';
import Donar from './pages/donar';
import Encargo from './pages/encargo';
import Entregar from './pages/entregar';
import Registrar from './pages/registrar';
import Reportes from './pages/reportes';
import Ajustes from './pages/ajustes';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/vender" element={<Vender />} />
          <Route path="/donar" element={<Donar />} />
          <Route path="/encargo" element={<Encargo />} />
          <Route path="/entregar" element={<Entregar />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/ajustes" element={<Ajustes />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
