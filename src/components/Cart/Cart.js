import './Cart.css';
import trash from "../../assets/images/trash.svg";

export const Cart = function () {

    const textAlt = "amazing trash!"

    const cartItem = [
        {id:1, name: "Product 1", quantity: "2"},
        {id:2, name: "Product 2", quantity: "4"},
        {id:3, name: "Product 3", quantity: "4"},
    ]

    return(
        <div className="Cart">
            <ul>
                <h1>Voir les articles</h1>
                {cartItem.map(
                    <div className="Cart_item">
                        <li>
                            <img src={trash} alt={textAlt}/>
                            <span>
                                {cartItem.name}
                                <span>
                                    {cartItem.quantity}
                                </span>
                            </span>
                        </li>
                    </div>
                )}
                <button>Vider le panier</button>
            </ul>
        </div>
    );
};