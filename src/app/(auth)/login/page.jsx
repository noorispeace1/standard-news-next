'use client';
import { authClient } from '@/lib/auth-client'; // ১. authClient ইম্পোর্ট করা হয়েছে
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLoginFunc = async (data) => {
        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: "/",
        });

        if (error) {
          
            alert("Login failed: " + error.message);
        } else {
          
            alert("Logged in successfully!");
            console.log(res);
        }
    }; 
    const [isShowPassword, setIsShowPassword] = useState(false);

    return (
        <div className='min-h-screen flex justify-center items-center bg-slate-100 p-4'>
          
            <div className='p-8 rounded-2xl bg-white shadow-xl w-full max-w-md'>
                <h2 className='text-3xl font-bold text-center mb-8 text-slate-800'>
                    Login Your account
                </h2>
                
                <form className='space-y-6' onSubmit={handleSubmit(handleLoginFunc)}>
                    {/* Email Input */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-600 ml-1">Email</label>
                        <input 
                            type="email" 
                            className="input input-bordered w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-slate-800" 
                            placeholder="Type Your email" 
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                
                    {/* Password Input */}
                    <div className="flex flex-col gap-2 relative">
                        <label className="text-sm font-semibold text-slate-600 ml-1">Password</label>
                        <input 
                            type={isShowPassword ? "text" : "password"}
                            className="input input-bordered w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-slate-800" 
                            placeholder="Type Your password" 
                            {...register("password", { required: "Password is required" })}
                        />
                    <span className='absolute right-2 top-10 cursor-pointer' onClick={()=> setIsShowPassword(!isShowPassword)}>
                       {isShowPassword ? <FaEye /> : <FaEyeSlash />}
                    </span>
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>

                    {/* Login Button */}
                    <button type="submit" className='btn w-full bg-black hover:bg-slate-900 text-white py-3 rounded-lg font-bold transition-all mt-4'>
                        Login
                    </button>
                    
                    <p className="text-center mt-4 text-sm text-slate-500">
                        Dont have an account? <Link href="/register" className="font-bold text-blue-500 hover:underline">Register</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;