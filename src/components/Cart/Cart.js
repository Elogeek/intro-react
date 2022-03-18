import './Cart.css';
import trash from "../../assets/images/trash.svg";

export const Cart = function () {

    const cartIem = [
        {id:1, name: "Product 1"},
        {id:2, name: "Product 2"},
        {id:3, name: "Product 3"},
    ]

    return(
        <div className="Cart">
            <ul>
                <h1>Voir les articles</h1>
                {cartIem.map(
                    <li className="CartItem">
                        <img src={trash} alt=""/>
                        <span>{cartIem.name}</span>
                    </li>
                )}
                <button>Vider le panier</button>
            </ul>
        </div>
    )
}