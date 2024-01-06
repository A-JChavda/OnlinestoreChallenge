import React, { useState } from 'react';
import MasterList from './MasterList';
import DetailView from './DetailView';
import './App.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="app-container">
      <MasterList onProductSelect={handleProductSelect} />
      <DetailView selectedProduct={selectedProduct} />
    </div>
  );
}

export default App;
