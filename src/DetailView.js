// DetailView.js
import React from 'react';

const DetailView = ({ selectedProduct }) => {
  return (
    <div className="detail-view">
      <h2>Product Details</h2>
      {selectedProduct ? (
        <div className="detail-content">
          <h3>{selectedProduct.title}</h3>
          <p>{selectedProduct.description}</p>
          <p>Price: ${selectedProduct.price}</p>
          <p>Category: {selectedProduct.category}</p>
          <img src={selectedProduct.image} alt={selectedProduct.title} />
          <p>Rating: {selectedProduct.rating.rate}</p>
        </div>
      ) : (
        <p>Please select a product to view details.</p>
      )}
    </div>
  );
};

export default DetailView;
