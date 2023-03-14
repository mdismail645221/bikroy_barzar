import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ ctg }) => {
    console.log(ctg)
    return (
        <Link to={`/category/${ctg?.id}`}>
            <div className="card bg-base-100 shadow-xl py-3">
                <figure><img src={ctg?.image} className="h-[300px]" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{ctg?.brand}{ctg?.name} </h2>
                </div>
            </div>
        </Link>
    );
};

export default Category;