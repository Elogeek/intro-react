import './Product.css';
import {QuantitySelector} from "../QuantitySelector/QuantitySelector"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/fontawesome-free-regular';

export const Product = function (props) {

    return (
        <div className="Product" id={props.id}>
            <div className="image">
                <img src={props.picture} alt={props.name} />
            </div>
            <div className="content">
                <span className="favorite"><FontAwesomeIcon icon={faHeart} /></span>
                <h1>{props['name']}</h1>
                <p className="description">{props.description}</p>
                <div className="flexRow">
                    <QuantitySelector />
                    <p className="price">${props.price}</p>
                </div>
            </div>
        </div>
    );
}