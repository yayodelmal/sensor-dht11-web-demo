import Home from './pages/Home'; // Asegúrate de que 'Home' esté en la ruta correcta
import './App.css'; // Aquí mantienes los estilos globales de la aplicación

function App() {
  return (
    <div className="App">
      {/* Renderizar el componente Home */}
      <Home />
    </div>
  );
}

export default App;
