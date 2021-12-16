import {Routes, Route} from 'react-router-dom'
import NavBarra from './components/NavBarra'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import './styles/styles.css';
function App() {
  
return (
  <>
        <div className="App">
            <NavBarra/>
            <Routes>
              <Route
                exact 
                path="/" 
                element={ <ItemListContainer greeting='Bienvenido a JF5 Store!'/>} 
              />
             <Route 
                exact
                path="/categoria/:idPrecio" 
                element={ <ItemListContainer greeting='Bienvenido a JF5 Store!'/>} 
              />
              <Route 
                exact
                path="/detalle/:idProd"
                element={<ItemDetailContainer />}
              />
              <Route 
                exact 
                path="/cart"
                element={<Cart />} />
            </Routes>
        </div>
  </>
  
);
}

export default App;