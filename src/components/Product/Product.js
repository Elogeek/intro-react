import './Product.css';

export const Product = function (children) {
    const p = [
        {id:1, quantity: "10"}
    ]

    return(
        <div className="Product">
           {p.quantity}
        </div>
    );
};