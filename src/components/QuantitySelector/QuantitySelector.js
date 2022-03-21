import './QuantitySelector.css';
import {Product} from "../Product/Product";

export const QuantitySelector = function ({start, product}) {

    function handleMinusClick(e) {
        e.preventDefault();
        //log de l'event ayant déclenché l'action
        console.log(e.target);
        //log de l'event natif
        console.log(e.nativeEvent);
        console.log("you removed one of " + product.name);
        console.log(e);
    }

    function handlePlusClick() {
        console.log("you added one of " + product.name);
    }

    return (
        <div className="QuantitySelector">
            <button className="quantity-selector-minus" onClick={handleMinusClick}> - </button>
            <div className="quantity-selector-amount">{start}</div>
            <button className="quantity-selector-plus" onClick={handlePlusClick}> + </button>
        </div>
    );
};