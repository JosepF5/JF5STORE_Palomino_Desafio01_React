import NavBarra from './components/NavBarra';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount'
import './styles/styles.css';
function App() {
  
return (
  <>
  <NavBarra/>
  <ItemListContainer greeting="Hola buenas :)"/>
  <ItemCount stock={15} initial={1}/>
  </>
  
);
}

export default App;