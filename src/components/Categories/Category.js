import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ ctg }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={ctg?.image} className="h-[400px]" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{ctg?.name}</h2>
                    <div className="card-actions justify-end">
                        <Link  to={`category/${ctg?.id}`}><button  className="btn btn-primary">BOOK NOW</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;