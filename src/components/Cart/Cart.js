import './Cart.css';
import {CartItem} from "../CartItem/CartItem";

export const Cart = function () {

    const cartItems = [
        {id: 1, name: "Product 1", quantity: 2 },
        {id: 2, name: "Product 2", quantity: 4 },
        {id: 3, name: "Product 3", quantity: 4 }
    ];

    function handleClick() {
        console.log('le btn a été cliqué !');
    }

    return (
        <div className="Cart">
            <h1 className="title">Vos articles</h1>
            {cartItems.map(cartItem =>
                <CartItem id={cartItem.id} name={cartItem.name} quantity={cartItem.quantity}
                />)}
            <button className="btn_refresh_cart" onClick={handleClick}>Vider le panier</button>
        </div>
    );
}