import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';
import { UploadImgBB } from '../../hooks/UploadImgBB';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Register = () => {
    const [regError, setRegError] = useState('')
    const { registerUser, updateUser, googleSignIn } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [options, setOption] = useState('buyers')


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";



    const handleRegister = data => {
        console.log(data)
        // const [imgURL, setImgURL] = useState()
        const imageFile = (data.image[0])

        // signin method  ===>
        registerUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                UploadImgBB(imageFile).then(imgData => {
                    const userInfo = {
                        displayName: data.name,
                        photoURL: imgData.data.display_url
                    }
                    updateUser(userInfo)
                        .then(() => {
                            // savedUser(data.name, data.email)
                            toast.success("successfully Registered. Good Job")
                            // const option ={
                            //     options : data.options
                            // }
                            savedUser(data.name, data.email, data.role)
                        })
                        .catch(err => {
                            console.log(err)
                            toast.error(err.message)
                            setRegError(err.message)
                        });
                })

            })
            .catch((e) => {
                // setSignError(e.message);
                // toast.error(e.message)
                console.log(e.message);
            })

    }


    // handle Google signIn method implement====>
    // google sign in 
    const handlegoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                // form.reset()
                toast("Successfully Login Good job", { duration: 3000 })
                savedUser(user.name, user.email, options)
                //  navigate(from, { replace: true })
            })
            .catch(err => {
                //  setError(err.message)
                console.log(err)
            })
    }





    // ======SavedUser in database======//
    const savedUser = (name, email, role) => {
        const userInfo = { name, email, role };
        console.log(userInfo)
        fetch(`${process.env.REACT_APP_WEB_LINK}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                accessToken(email)
                console.log(data)
            })

    }




    const accessToken = (email) => {
        fetch(`${process.env.REACT_APP_WEB_LINK}/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.sendToken){
                    localStorage.setItem('bb_token', data.sendToken)
                    navigate(from, { replace: true });
                }
            })
    }


    return (
        <section className='container mx-auto py-16'>
            {/* title */}
            <div className='flex flex-col items-center justify-center my-8 text-3xl uppercase font-bold'>
                <h3>Register</h3>
                <p className='text-red-600 font-semibold py-4'>{regError}</p>
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
                {/* Opition choice buyers & sellers*/}
                <div className='form-control w-full max-w-xs'>
                    <label className='label'><span className='label-text'>Choice your options:</span></label>
                    <select {...register("role", { required: "field is required" })} className="select select-bordered w-full max-w-xs">
                        <option value="buyers">buyers</option>
                        <option value="Sellers">Sellers</option>
                    </select>
                    {errors.password && <p className='text-red-600 font-semibold'>{errors?.password?.message}</p>}
                </div>

                {/* submit field */}
                <div className='w-2/3'>
                    <input className='btn btn-primary uppercase' type="submit" value="register now" />
                </div>
                <div>
                    <div>
                        <p>You have already create account? <Link to="/login" className='text-blue-600 hover:underline'>Login</Link></p>
                    </div>
                    <div className="divider">OR</div>
                    <div className='flex justify-center gap-6'>
                        <FaGoogle onClick={handlegoogle} className='text-2xl cursor-pointer' />
                        <FaGithub className='text-2xl cursor-pointer' />
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Register;