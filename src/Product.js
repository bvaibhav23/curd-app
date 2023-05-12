import React from 'react'

function Product({ product, handleEdit, handleDelete }) {
    //
    const { id, title, thumbnail, price, discountPercentage } = product;
    return (
        <div className='product'>
            <img src={thumbnail} alt={title}></img>
            <h3>{title}</h3>
            <p>Discount Price: <span style={{ "textDecoration": "line-through", "paddingRight": "2px" }}>{price} </span>
                {((100 - discountPercentage) * price / 100).toFixed()}</p>
            <div className='btnContainer'> <button className='cardBtn' onClick={() => handleEdit(product)}>Edit</button>
                <button className='cardBtn' onClick={() => handleDelete(id)}>Delete</button>
            </div>
        </div>
    )
}

export default Product;