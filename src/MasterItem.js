// MasterItem.js
import React from 'react';

const MasterItem = ({ product, onProductSelect }) => {
  const handleClick = () => {
    onProductSelect(product);
  };

  return (
    <li className="master-item" onClick={handleClick}>
      <strong>{product.title}</strong>
      <p>{product.description}</p>
    </li>
  );
};

export default MasterItem;
