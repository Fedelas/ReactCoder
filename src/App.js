import './styles.css';
import Button from './components/Button';
import NavBar from './components/NavBar';


import { Routes, Route } from "react-router-dom";

import {Home, Men, Women, Jewelery, Electronics, FunStuff, ItemDetails} from './pages/index';



function App() {
  
  return (

    <div className="App">
      <NavBar />
      
        <body>
             
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/category/men" element={<Men />} />
            <Route exact path="/category/women" element={<Women />} />
            <Route exact path="/category/jewelery" element={<Jewelery />} />
            <Route exact path="/category/electronics" element={<Electronics />} />
            <Route exact path="/category/funStuff" element={<FunStuff />} />
            <Route exact path="/item/:itemid" element={<ItemDetails />} />
          </Routes>
          
          <Button text="COMPRAR" />
        </body>
        
    </div>
  );

}

{/* Funciones para probar los links - Despues puedo ver de traerlas como modulos
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}*/}

export default App;
