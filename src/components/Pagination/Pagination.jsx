import React from 'react';
import styles from './pagination.module.css'


const Pagination = ({perPage , total , paginate }) => {
    const pageNumbers = []
    
    for(let i = 1 ; i <= Math.ceil(total / perPage); i++){
        pageNumbers.push(i)
    }
    return (
        <div>
            <li className={styles.li}>
                {
                    pageNumbers.map(number => (
                        <p className={styles.btn} key={number} onClick ={()=> paginate(number)}>{number}</p>
                    ))
                }
            </li>
        </div>
    );
};

export default Pagination;