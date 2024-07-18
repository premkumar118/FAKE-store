import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {

    const { id } = useParams()
    const [data, setData ] = useState([])

    useEffect(()=> {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data:', error))
    },[])

    return (
        <div className="product-container">
            <div className="left-container">
                <img src={data.image} alt=""/>
            </div>
            <div className="right-container">
                <h1>{data.title}</h1>
                <h3>Price : ${data.price}</h3>
                <p><b>Category :</b> {data.category}</p>
                <p><b>Description :</b><br /> {data.description}</p>
                <button>ADD TO CART</button>
            </div>
        </div>
    );
}
 
export default ProductPage;