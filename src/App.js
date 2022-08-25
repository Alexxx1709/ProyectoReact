
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  const greeting = '¡¡ Saludos al tutor Nico Smael !!'

  return (
    <>
      <NavBar/>
      <ItemListContainer saludo = {greeting}/>
   
    </>
  );
}

export default App;
