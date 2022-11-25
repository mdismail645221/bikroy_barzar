import React from 'react';

const AddProduct = () => {
    return (
        <section className='bg-[#f1f1f1]'>
            <div>
                <h2 className='text-3xl font-semibold'>Add A Products</h2>
            </div>
            <form className=' card-body border border-red-300'>
                <div className="grid gap-5 grid-cols-2 lg:grid-cols-3">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Product Name:</span>
                        </label>
                        <input type="text" placeholder="product name" className="input input-bordered  w-full max-w-lg" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="price" className="input input-bordered  w-full max-w-lg" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Condition Type</span>
                        </label>
                        <select className="select select-bordered w-full max-w-xs">
                            <option selected>excellent</option>
                            <option>good</option>
                            <option>fair</option>
                        </select>
                    </div>
                </div>
                <div className="grid gap-5 grid-cols-2 lg:grid-cols-3">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Phone Number:</span>
                        </label>
                        <input type="text" placeholder="product name" className="input input-bordered  w-full max-w-lg" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text" placeholder="price" className="input input-bordered  w-full max-w-lg" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Years of purchance</span>
                        </label>
                        <input type="date" placeholder="price" className="input input-bordered  w-full max-w-lg" />
                    </div>
                </div>
                <div>
                    <textarea rows="5" cols="20" className="textarea" placeholder="Bio"></textarea>
                </div>
            </form>
        </section>
    );
};

export default AddProduct;