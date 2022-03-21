import {ProductList} from "../ProductList/ProductList";
import './App.css';
import {Header} from "../Header/Header";
import {Category} from "../Category/Category";
//import {Product} from "../Product/Product";
//import {Cart} from "../Cart/Cart";

function App() {
  return (
      <>
        <Header/>
        <Category/>
        <ProductList/>
      </>
    /**<div className="App">
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
      </header>
    </div>**/
  );
}

export default App;
