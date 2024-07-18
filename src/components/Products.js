import { Link } from "react-router-dom";

const Products = ({ products, loading }) => {
    return (
        <div className="item-list-container">
            <h1>PRODUCTS</h1>
            <div className="item-container">
                { loading && <p>loading...</p> }
                {products.map(item => (
                    <Link to={`/product/${item.id}`} target="_blank">
                    <div className="item" key={item.id}>
                        <h3>{item.title}</h3>
                        <div>
                            <img src={item.image} alt={item.title} width="100" className="item-image" />
                        </div>
                        <h2>Price : ${item.price}</h2>
                        <h5>Rating : {item.rating.rate}</h5>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Products;