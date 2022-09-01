
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {

  const encabezado = '¡¡ Sweet Guitar !!'

  return (
    <>
      <NavBar/>
      <ItemListContainer saludo = {encabezado}/>
      
    </>
  );
}

export default App;
