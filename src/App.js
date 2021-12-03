import NavBarra from './components/NavBarra';
import './styles/styles.css';
function App() {
  return (
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React en JF5 Store
        </a>
      </header>
    </div>
    */
    <div className="App">
      <NavBarra/>
    </div>
  );
}

export default App;
