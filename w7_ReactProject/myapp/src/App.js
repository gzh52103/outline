import logo from './logo.svg';
import './App.css';
import home from '@/assets/home.png'
console.log('home',home);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={home} className="App-logo" alt="logo" />
        <img src={require("./assets/mine_active.png").default} alt="mine" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
