import React, { useState, useEffect } from 'react';
import MasterItem from './MasterItem';

const MasterList = ({ onProductSelect }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <MasterItem
            key={product.id}
            product={product}
            onProductSelect={onProductSelect}
          />
        ))}
      </ul>
    </div>
  );
};

export default MasterList;
