import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { useForm } from "react-hook-form"
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { toast } from 'react-hot-toast'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [signError, setSignError] = useState('')
    const { signInUser, googleSignIn } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const  navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const handleLogin = (data) => {
        console.log(data)
        signInUser(data.email, data.password)
            .then(result => {
                setSignError(null)
                toast.success("successfully Login")
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error)
                toast.error(error.message)
                setSignError(error.message)
            })

    }

    // google sign in 
    const handlegoogle = () => {
        googleSignIn()
            .then(result => {
                setSignError(null)
                const user = result.user;
                console.log(user)
                // form.reset()
                toast("Successfully Login Good job", { duration: 3000 })
                //  navigate(from, { replace: true })
            })
            .catch(err => {
                setSignError(err.message)
                console.log(err)
            })
    }

    return (
        <section className='container mx-auto py-16'>
            {/* title */}
            <div className='flex flex-col items-center justify-center my-8 text-3xl uppercase font-bold'>
                <h3>Login</h3>
                <p className='text-red-600 font-semibold py-4'>{signError}</p>
            </div>
            <form onSubmit={handleSubmit(handleLogin)} className='flex flex-col space-y-3 w-96 mx-auto border border-spacing-3 border-gray-200 rounded-lg shadow-lg px-6 py-8'>
                {/* EMAIL field */}
                <div className='form-control w-full max-w-xs'>
                    <label className='label'><span className='label-text'>Email</span></label>
                    <input type='text' className='input input-bordered w-full max-w-xs'
                        {...register("email", { required: "email is required" })}
                        required />
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

                {/* submit field */}
                <div className='my-4'>
                    <input className='btn btn-primary uppercase' type="submit" value="Log In now" />
                </div>
                <div>
                    <div>
                        <p>Don't have a account? <Link to="/register" className='text-blue-600 hover:underline'>Create account</Link></p>
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

export default Login;