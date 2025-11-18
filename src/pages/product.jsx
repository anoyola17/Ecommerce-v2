import React, { useEffect, useState } from "react";
import Navbar from "/src/components/navbar.jsx";
import Footer from "/src/components/footer.jsx";
import "/src/styles/Product.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("http://localhost:5000/motorcycles")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const filteredProducts = () => {
    if (filter === "motorcycle") {
      return products.filter((p) => p.category === "motorcycle");
    } else if (filter === "helmet") {
      return products.filter((p) => p.category === "helmet");
    } else if (filter === "gear") {
      return products.filter((p) => p.category === "gear");
    } else {
      return products;
    }
  };

  return (
    <div>
      <Navbar />
      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("motorcycle")}>Motorcycles</button>
        <button onClick={() => setFilter("helmet")}>Helmets</button>
        <button onClick={() => setFilter("gear")}>Gear</button>
      </div>
      {/* Products */}
      <div className="products">
        {filteredProducts().map((moto) => (
          <div key={moto.id} className="product-card">
            <img src={moto.image_url} alt={moto.name} className="product-img" />
            <h3>{moto.name}</h3>
            <p>{moto.description}</p>
            <strong>${moto.price}</strong>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
