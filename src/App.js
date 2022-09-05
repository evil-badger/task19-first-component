import logo from './logo.svg';
import './App.css';

function Component(){
  return (
    <p>Этот мир еще не познал все возможности эволюции. Привет, мир!!!</p>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Это базовый компонент
        </a>
        <Component></Component>
        <Component></Component>
        <Component></Component>
      </header>
   

    </div>
  );
}

export default App;
