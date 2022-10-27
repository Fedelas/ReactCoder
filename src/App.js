import './styles.css';
import Button from './components/Button';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    
    <div className="App">
      <NavBar/>
      <header className="App-header">
      <body>
        <ItemListContainer/>
        <Button text="COMPRAR"/>
      </body> 
      </header>
    </div>
  );
}

export default App;
