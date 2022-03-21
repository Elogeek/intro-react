import './ProductList.css';
import image1 from '../../assets/images/image1.png';
import image2 from '../../assets/images/image2.png';
import image3 from '../../assets/images/image3.png';
import image4 from '../../assets/images/image4.png';
import image5 from '../../assets/images/image5.png';
import {QuantitySelector} from "../QuantitySelector/QuantitySelector";

export const ProductList = function () {

    const altText = "Super image !";

    const products = [
        {id:1, name:'Product 1', picture: image1, description: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: "$230"},
        {id:2, name:'Product 2', picture: image2, description: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: "$230"},
        {id:3, name:'Product 3', picture: image3, description: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: "$230"},
        {id:4, name:'Product 4', picture: image4, description: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: "$230"},
        {id:5, name:'Product 5', picture: image5, description: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', price: "$230"},
    ]

    return (
        <div className="ProductList">
            <ul>
                {products.map(product =>
                    <li className="Product">
                        <div className="product-image">
                            <img src={product.picture} alt={altText}/>
                        </div>
                         <h1 className="product-title">{product.name}</h1>
                         <span className="product-content">Description : {product.description}</span>
                        <div>
                        <QuantitySelector/>
                            <p>{product.price}</p>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );

};