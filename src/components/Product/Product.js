import './Product.css';

export const Product = function (children) {

    const altText = "Super image !";

    const product = [
        {id:1, name:'Product 1', picture: "../../assets/images/image1.png", description: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', price: "$230", quantity: "10"}
    ]

    return(
        <div className="Product">
           <div className="product-image">
               <img src={ require(`../../assets/images/${product.image}`)} alt={altText}/>
           </div>
            <div className="product-title">
                <h1>{product.title.style.toUpperCase()}</h1>
            </div>
            <div className="product-content">
                <p>{product.description}</p>
            </div>
            <div>
                {product.quantity}
                <div>
                    {product.price}
                </div>
            </div>
        </div>
    );
};