import './Product.css';
import {QuantitySelector} from "../QuantitySelector/QuantitySelector";

export const Product = function (props) {

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
                    <QuantitySelector/>
                </div>
            </div>
        </div>
    );
}