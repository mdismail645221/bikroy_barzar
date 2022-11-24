import React from 'react';
import { useForm } from "react-hook-form"

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();



    const handleRegister = data => {
        console.log(data)

    }



    return (
        <section className='container mx-auto py-16'>
            {/* title */}
            <div className='flex justify-center my-8 text-3xl uppercase font-bold'>
                <h3>Register</h3>
            </div>
            <form onSubmit={handleSubmit(handleRegister)} className='flex flex-col space-y-3 w-96 mx-auto border border-spacing-3 border-gray-200 rounded-lg shadow-lg px-6 py-8'>
               {/* Name field */}
                <div className='form-control w-full max-w-xs'>
                    <label className='label'><span className='label-text'>Name</span></label>
                    <input type='text' className='input input-bordered w-full max-w-xs'
                        {...register("name", { required: "name is required" })}
                    />
                    {errors.name && <p className='text-red-600 font-semibold'>{errors?.name?.message}</p>}
                </div>
                {/* EMAIL field */}
                <div className='form-control w-full max-w-xs'>
                    <label className='label'><span className='label-text'>Email</span></label>
                    <input type='text' className='input input-bordered w-full max-w-xs'
                        {...register("email", { required: "email is required" })}
                    />
                    {errors.email && <p className='text-red-600 font-semibold'>{errors?.email?.message}</p>}
                </div>
                {/* Password field */}
                <div className='form-control w-full max-w-xs'>
                    <label className='label'><span className='label-text'>Password</span></label>
                    <input type='password' className='input input-bordered w-full max-w-xs'
                        {...register("password", { required: "password is required" })}
                    />
                    {errors.password && <p className='text-red-600 font-semibold'>{errors?.password?.message}</p>}
                </div>
                {/* upload the img field */}
                <div className='form-control w-full max-w-xs'>
                    <label className='label'><span className='label-text'>File Upload:</span></label>
                    <input type='file' className='input input-bordered w-full max-w-xs'
                        {...register("image", { required: "image field is required" })}
                    />
                    {errors.image && <p className='text-red-600 font-semibold'>{errors?.image?.message}</p>}
                </div>
                
                {/* submit field */}
                <div className='w-2/3'>
                     <input className='btn btn-primary uppercase' type="submit" value="register now" />
                </div>
            </form>
        </section>
    );
};

export default Register;