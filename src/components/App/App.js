import {ProductList} from "../ProductList/ProductList";
import './App.css';
import {Header} from "../Header/Header";
import {Category} from "../Category/Category";
import {Cart} from "../Cart/Cart";
import {Test} from "../Test/Test";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
import image5 from "../../assets/images/image5.png";
import {useState} from "react";

function App() {

    const productsList = [
        {id:1, name:'Product 1', picture: image1, description: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: "$230"},
        {id:2, name:'Product 2', picture: image2, description: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: "$230"},
        {id:3, name:'Product 3', picture: image3, description: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: "$230"},
        {id:4, name:'Product 4', picture: image4, description: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: "$230"},
        {id:5, name:'Product 5', picture: image5, description: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: "$230"},
    ]

    const [products, setProducts] = useState([...productsList]);
    const [isProductUpdated, setIsProductUpdated] = useState(false);
  return (
      <>
        <Header/>
          <div className="container">
              <Cart products={products} />
              <div className="container_product">
                  <Category />
                  <ProductList products={products} setIsProductUpdated={setIsProductUpdated()}/>
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
