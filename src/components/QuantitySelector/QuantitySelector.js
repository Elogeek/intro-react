import './QuantitySelector.css';
import {Product} from '../Product/Product';

export const QuantitySelector = function () {

    return (
        <div className="QuantitySelector">
            <span className="Product">{Product.quantity}</span>
        </div>
    );
};