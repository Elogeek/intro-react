import './QuantitySelector.css';

export const QuantitySelector = function () {

    return (
        <div className="QuantitySelector">
            <button className="quantity-selector-minus"> - </button>
            <div className="quantity-selector-amount">10</div>
            <button className="quantity-selector-plus"> + </button>
        </div>
    );
};