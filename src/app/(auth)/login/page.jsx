'use client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
    const{ register,handleSubmit} = useForm()
    const handleLoginFunc = (data) => {
console.log(data);
    };  
    return (
        /* min-h-screen ensures it takes the full height of the browser to center vertically */
        <div className='min-h-screen flex justify-center items-center bg-slate-100 p-4'>
            
            {/* Added shadow, max-width, and more padding for a "card" look */}
            <div className='p-8 rounded-4xl bg-red shadow-xl w-full max-w-md'>
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
                            {...register("email")}
                        />
                    </div>
                
                    {/* Password Input */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-600 ml-1">Password</label>
                        <input 
                            type="password" 
                       
                            className="input input-bordered w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-slate-800" 
                            placeholder="Type Your password" 
                            {...register("password")}
                        />
                    </div>

                    {/* Login Button */}
                    <button className='btn w-full bg-black hover:bg-slate-900 text-white py-3 rounded-lg font-bold transition-all mt-4'>
                        Login
                    </button>
                    
                    <p className="text-center mt-4 text-sm text-slate-500 mt-2">
                        Dont have an account? <Link href="/register" className="text-red font-bold text-blue-500 hover:underline">Register</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage ;