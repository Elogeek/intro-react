import './ProductList.css';
import {Product} from "../Product/Product";

export const ProductList = function({products, setIsProductUpdated}) {

    const altText = "Super image !";

    return (
        <div className="ProductList">
            <ul>
                {products.map(product =>
                <Product key={product.id} product={product} setIsProductUpdated={setIsProductUpdated}/>

                )}
            </ul>
        </div>
    );

};