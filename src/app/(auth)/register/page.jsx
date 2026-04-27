'use client';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {
    // ১. হুক সবসময় এখানে থাকবে
    const [isShowPassword, setIsShowPassword] = useState(false);
    
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    const handleRegisterFunc = async (data) => {
        const { name, email, password, photoUrl } = data;

        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photoUrl,
            callbackURL: "/",
        });

        if (error) {
            alert("Registration failed: " + (error.message || "Something went wrong"));
        } else {
            alert("Successful Signup! Welcome, " + name);
        }
    };

    return (
        <div className='min-h-screen flex justify-center items-center bg-slate-100 p-4'>
            <div className='p-8 rounded-2xl bg-white shadow-xl w-full max-w-md'>
                <h2 className='text-3xl font-bold text-center mb-8 text-slate-800'>
                    Register Your account
                </h2>
                
                <form className='space-y-6' onSubmit={handleSubmit(handleRegisterFunc)}>
                    {/* Name Input */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-600 ml-1">Name</label>
                        <input 
                            type="text" 
                            className="input input-bordered w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-slate-800" 
                            placeholder="Type Your name" 
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    {/* Photo URL Input */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-600 ml-1">Photo URL</label>
                        <input 
                            type="text" 
                            className="input input-bordered w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-slate-800" 
                            placeholder="https://example.com/photo.jpg" 
                            {...register("photoUrl", { required: "Photo URL is required" })}
                        />
                        {errors.photoUrl && <p className="text-red-500 text-sm">{errors.photoUrl.message}</p>}
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-600 ml-1">Email</label>
                        <input 
                            type="email" 
                            className="input input-bordered w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-slate-800" 
                            placeholder="Type Your email" 
                            {...register("email", { 
                                required: "Email is required",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Invalid email format"
                                }
                            })}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                
                    {/* Password Input */}
                    <div className="flex flex-col gap-2 relative"> {/* relative যোগ করা হয়েছে আইকন পজিশন ঠিক করতে */}
                        <label className="text-sm font-semibold text-slate-600 ml-1">Password</label>
                        <input 
                            // ২. এখানে টাইপ চেঞ্জ হবে
                            type={isShowPassword ? "text" : "password"} 
                            className="input input-bordered w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-slate-800" 
                            placeholder="Type Your password" 
                            {...register("password", { 
                                required: "Password is required",
                                minLength: { value: 6, message: "Minimum 6 characters" }
                            })}
                        />
                        {/* ৩. আইকন পজিশনিং */}
                        <span 
                            className='absolute right-3 top-[38px] cursor-pointer text-slate-500 text-xl' 
                            onClick={() => setIsShowPassword(!isShowPassword)}
                        >
                            {isShowPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>

                    {/* Register Button */}
                    <button type="submit" className='btn w-full bg-black hover:bg-slate-900 text-white py-3 rounded-lg font-bold transition-all mt-4'>
                        Register
                    </button>
                    
                    <div className="text-center mt-4">
                        <span className="text-slate-600">Already have an account? </span>
                        <Link href="/login" className="font-bold text-blue-500 hover:underline">
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;