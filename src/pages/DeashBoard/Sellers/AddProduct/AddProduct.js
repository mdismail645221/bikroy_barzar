import React, { useState, useContext } from 'react';
import { useForm } from "react-hook-form"
import { format } from "date-fns";
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom";
import { UploadImgBB } from '../../../../hooks/UploadImgBB';
import { AuthContext } from '../../../../context/AuthProvider';



const AddProduct = () => {
    const [imgURL, setImgURL] = useState("")
    const [description, setDescription] = useState('')
    const date = new Date();
    const formattedDate = format(date, "PP");
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();


    const handLEAddProducts = (data) => {
        console.log("data", data)
        const imageFile = (data.image[0])
        // console.log(imageFile)
        UploadImgBB(imageFile).then(imgData => {
            console.log("imgData", imgData)
            const addProductInfo = {
                userName: user?.displayName,
                email: user?.email,
                productName: data.name,
                price: data.price,
                conditionIype: data.gender,
                phone: data.phoneNumber,
                location: data.location,
                purchaseDate: formattedDate,
                description: description,
                image: imgData.data.display_url
            }
            console.log(addProductInfo)
            // addProductInfo save into the database 
            fetch(`https://bikroy-bazar.vercel.app/addProducts`, {
                method: 'POST',
                headers: {
                    'content-type': "application/json",
                    authorization: `Bearer ${localStorage.getItem("bb_token")}`
                },
                body: JSON.stringify(addProductInfo)
            })
            .then(res=> res.json())
            .then(data=> {
                console.log(data)
                if(data.acknowledged){
                    toast.success("successfully Add a products")
                    navigate("/dashboard/myproducts");
                }
            })
        })




        // addProductInfo save into the database 
        // fetch(`${process.env.REACT_APP_WEB_LINK}/addProducts`, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': "application/json"
        //     },
        //     body: JSON.stringify(addProductInfo)
        // })
        // .then(res=> res.json())
        // .then(data=> {
        //     console.log(data)
        //     if(data.acknowledged){
        //         toast.success("successfully Add a products")
        //         navigate("/dashboard/myproducts");
        //     }
        // })
    }




    return (
        <section className='bg-[#f1f1f1]'>
            <div className='card-body'>
                <h2 className='text-3xl font-semibold'>Add A Products</h2>
            </div>
            <form onSubmit={handleSubmit(handLEAddProducts)} className='card-body'>
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
                        {errors.gender && <p className='text-red-600 font-semibold'>{errors?.gender?.message}</p>}
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
                            <span className="label-text">Product Photo</span>
                        </label>
                        <input {...register("image", { required: true })} type="file" placeholder="price" className="input input-bordered  w-full max-w-lg" />
                        {errors.image && <p className='text-red-600 font-semibold'>{errors?.image?.message}</p>}
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