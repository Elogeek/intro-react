import './Product.css';

export const Product = function ({product,setIsProductUpdated},props) {

    return (
        <div className="Product" id={props.id}>
            <div className="image">
                <img src={props.picture} alt={props.name} />
            </div>
            <div className="content">
                <p className="price">${props.price}</p>
                <h1>{props['name']}</h1>
                <p className="description">{props.description}</p>
                <div className="flexRow">
                    <div className="QuantitySelector">
                        <button>-</button>
                        <div>{product.cart}</div>
                        <button>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}