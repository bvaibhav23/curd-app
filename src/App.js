import { useEffect, useState } from 'react';
import './App.css';
import productsContext from "./productsContext";
import ProductsDisplay from './ProductsDisplay';

const App = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
        console.log(data.products);
      });
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const updateProduct = (id, updatedProduct) => {
    setProducts(products.map(product => (product.id === id ? updatedProduct : product)));
  };

  const deleteProduct = id => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <productsContext.Provider value={{ products, currentProducts, updateProduct, deleteProduct, paginate }}>
      <ProductsDisplay />
    </productsContext.Provider>
  );
};

export default App;
