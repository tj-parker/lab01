import logo from './logo.svg';
import './App.css';
import '/HornedBeast.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Title</h1>
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
      </header>
      <main>
        <HornedBeast title='Horned Beast' imageUrl='http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg' description='ip sum'/>
        <HornedBeast title='Horned Beast' imageUrl='http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg' description='ip sum'/>
        
      </main>
      <footer>
        TJ Parker
      </footer>
    </div>
  );
}

export default App;
