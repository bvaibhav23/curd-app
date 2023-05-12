import React, { useContext } from 'react';
import productsContext from './productsContext';

const Pagination = ({ totalProducts, productsPerPage }) => {
    const { paginate } = useContext(productsContext);
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="pagination-container">
            <ul >
                {pageNumbers.map(number => (
                    <li key={number}>
                        <button className='numBtn' onClick={() => paginate(number)}>{number}</button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;