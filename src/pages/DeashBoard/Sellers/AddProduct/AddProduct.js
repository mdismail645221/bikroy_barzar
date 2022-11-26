import React, { useState } from 'react';
import { useForm } from "react-hook-form"



const AddProduct = () => {
    const [description, setDescription] = useState('')
    const [purchaseDate, setPurchaseDate] = useState('')
    // console.log(purchaseDate)

    const { register, handleSubmit, formState: { errors } } = useForm();


    const handLEAddProducts = (data) => {
        console.log("data", data)
        const addProductInfo = {
            productName: data.name,
            price: data.price,
            conditionIype: data.gender,
            phone: data.phoneNumber,
            location: data.location,
            purchaseDate: purchaseDate,
            description: description
        }
        console.log(addProductInfo)
    }
    



    return (
        <section className='bg-[#f1f1f1]'>
            <div>
                <h2 className='text-3xl font-semibold'>Add A Products</h2>
            </div>
            <form onSubmit={handleSubmit(handLEAddProducts)} className='card-body border border-red-300'>
                <div className="grid gap-5 grid-cols-2 lg:grid-cols-3">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Product Name:</span>
                        </label>
                        <input type="text" placeholder="product name" className="input input-bordered  w-full max-w-lg"
                            {...register("name", { required: "name is required" })}
                         />
                        {errors.name && <p className='text-red-600 font-semibold'>{errors?.name?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input {...register("price", { required: true })} type="text" placeholder="price" className="input input-bordered  w-full max-w-lg" />
                        {errors.price && <p className='text-red-600 font-semibold'>{errors?.price?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Condition Type</span>
                        </label>
                        <select {...register("gender")} className="select select-bordered w-full max-w-xs">
                            <option value="excellent">excellent</option>
                            <option value="good">good</option>
                            <option value="fair">fair</option>
                        </select>
                        {errors.conditionIype && <p className='text-red-600 font-semibold'>{errors?.conditionIype?.message}</p>}
                    </div>
                </div>
                <div className="grid gap-5 grid-cols-2 lg:grid-cols-3">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Phone Number:</span>
                        </label>
                        <input {...register("phoneNumber", { required: true })} type="text" placeholder="product name" className="input input-bordered  w-full max-w-lg" />
                        {errors.phoneNumber && <p className='text-red-600 font-semibold'>{errors?.phoneNumber?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input {...register("location", { required: true })} type="text" placeholder="price" className="input input-bordered  w-full max-w-lg" />
                        {errors.location && <p className='text-red-600 font-semibold'>{errors?.location?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Years of purchance</span>
                        </label>
                        <input onChange={(e) => setPurchaseDate(e.target.value)} defaultValue="excellent" type="date" placeholder="price" className="input input-bordered  w-full max-w-lg" />
                        {errors.dateOfYears && <p className='text-red-600 font-semibold'>{errors?.location?.message}</p>}
                    </div>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">description</span>
                    </label>
                    <textarea onChange={(e) => setDescription(e.target.value)} id="w3review" className='textarea' name="w3review" rows="4" cols="50">
                    </textarea>
                    

                </div>

                <div><input type="submit" value="Add A product" className='btn btn-primary w-96 mx-auto my-10' /></div>
            </form>
        </section>
    );
};

export default AddProduct;