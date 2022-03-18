import './ProductList.css';

export const ProductList = function () {

    const altText = "Super product !";

    const products = [
        {id:1, name:'Product 1', picture: "/src/assets/images/image1.png", description: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', price: "$230", quantity: "10"},
        {id:2, name:'Product 2', picture: "/src/assets/images/image2.png", description: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', price: "$230", quantity: "10"},
        {id:3, name:'Product 3', picture: "/src/assets/images/image3.png", description: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', price: "$230", quantity: "10"},
        {id:4, name:'Product 4', picture: "/src/assets/images/image4.png", description: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', price: "$230", quantity: "10"},
        {id:5, name:'Product 5', picture: "/src/assets/images/image5.png", description: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', price: "$230", quantity: "10"},
    ]

    return (
        <div className="ProductList">
            <ul>
                {products.map(product =>
                    <li className="Product">

                         <h1>{product.name}</h1>
                         <span>Description: {product.description}</span>
                        <div>
                            <div className="quantitySelector">
                                <p className="quantity-selector-minus">-</p>
                                <p className="quantity-selector-amount">{product.quantity}</p>
                                <p className="quantity-selector-plus">+</p>
                            </div>

                            <span>{product.price}</span>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );

};