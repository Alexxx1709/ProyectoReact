
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {

  const encabezado = '¡¡ Contador !!'

  return (
    <>
      <NavBar/>
      <ItemListContainer saludo = {encabezado}/>
      <ItemCount/>
    </>
  );
}

export default App;
