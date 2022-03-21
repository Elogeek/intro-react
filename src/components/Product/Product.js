import './Product.css';
import image2 from "../../assets/images/image2.png";

export const Product = function (children) {

    const altText = "Super image !";

    const product = [
        {id:1, name:'Product 1', picture: image2, description: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', price: "$230", quantity: "10"}
    ]

    return(
        <li className="Product">
           <div className="product-image">
               <img src={product.picture} alt={altText}/>
           </div>
            <div className="product-title">
                <h1>{product.name.style.toUpperCase()}</h1>
            </div>
            <div className="product-content">
                <p>{product.description}</p>
            </div>
            <div>
                <div className="quantitySelector">
                    <p className="quantity-selector-minus">-</p>
                    <p className="quantity-selector-amount">{product.quantity}</p>
                    <p className="quantity-selector-plus">+</p>
                </div>

                <span>{product.price}</span>
            </div>
        </li>
    );
};