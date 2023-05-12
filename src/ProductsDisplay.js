import React, { useState, useContext } from 'react';
import productsContext from './productsContext';
import InputForm from './InputForm';
import Paginate from './Paginate';
import Product from './Product';

const ProductsDisplay = () => {
    const { products, currentProducts, deleteProduct } = useContext(productsContext);
    const [editingProduct, setEditingProduct] = useState(null);
    const [showFrom, setFrom] = useState(false);

    const handleEdit = product => {
        setEditingProduct(product);
        setFrom(true);
    };

    const handleDelete = id => {
        deleteProduct(id);
        setEditingProduct(null);
    };

    return (
        <div className={`container `}>
            {showFrom && <InputForm product={editingProduct} setFrom={setFrom} />}
            {products && <div className='products'>
                {currentProducts.map(product => {
                    return <Product key={product.id} product={product} handleEdit={handleEdit} handleDelete={handleDelete} />
                }
                )}
            </div>}
            <div className='paginate'> <Paginate totalProducts={products.length} productsPerPage={6} /></div>
        </div>
    );
};

export default ProductsDisplay;