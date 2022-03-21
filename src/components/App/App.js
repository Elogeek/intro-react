import {ProductList} from "../ProductList/ProductList";
import './App.css';
import {Header} from "../Header/Header";
import {Category} from "../Category/Category";
import {Cart} from "../Cart/Cart";
import {Test} from "../Test/Test";

function App() {
  return (
      <>
        <Header/>
          <div className="container">
              <Cart />
              <div className="container_product">
                  <Category />
                  <ProductList />
                  <Test />
              </div>
          </div>
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
