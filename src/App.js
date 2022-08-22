import logo from './logo.svg';
import './App.css';
import './main.css';
import showName from './name';

function App() {
  return (
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
          Learn React
        </a>
        <p>branch 1</p>
        <h1>branch 1</h1>
        <h2>branch 1</h2>
        <h3>{showName('bxranch 3')}</h3>
      </header>
      SƯ
    </div>
  );
}

export default App;
