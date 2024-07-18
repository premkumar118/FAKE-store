import React, { useState, useEffect } from "react";
import Products from "./Products";
import Footer from "./Footer";

const Home = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [data]);

  return (
    <div>
      <div className="banner">
        <img src="https://img.freepik.com/free-vector/flat-horizontal-sale-banner-template-with-photo_23-2149000923.jpg?t=st=1721212927~exp=1721216527~hmac=8bb2ee70ed84b46bbed6cdd8ae4c35a6a405a95a4a686ee158f81c87c5e30065&w=1060" alt="" />
      </div>
      <Products products={data} loading={loading} />
      <Footer />
    </div>
  );
}

export default Home;
