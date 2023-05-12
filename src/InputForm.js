import React, { useState, useContext } from 'react';
import productsContext from './productsContext';


const InputFrom = ({ product, setFrom }) => {
    const [title, setTitle] = useState(product.title);
    const [price, setPrice] = useState(product.price);
    const { updateProduct } = useContext(productsContext);


    const handleSubmit = event => {
        event.preventDefault();
        const updatedProduct = { ...product, "title": title, "price": price };
        updateProduct(product.id, updatedProduct);
        setFrom(false);
    };

    return (
        <form onSubmit={handleSubmit} className='from-Container'>
            <label>
                Title:
                <input type="text" value={title} onChange={event => { setTitle(event.target.value) }} />
            </label>
            <br />
            <label>
                Price:
                <input type="number" value={price} onChange={event => setPrice(event.target.value)} />
            </label>
            <br />
            <button className='cardBtn' type="submit">Update</button>
        </form>
    );
};

export default InputFrom;