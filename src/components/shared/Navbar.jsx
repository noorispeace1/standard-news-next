"use client"
import Link from 'next/link';
import userAvatar from '@/assets/user.png';
import React from 'react';
import Image from 'next/image';
import NavLink from './NavLink';
import { useSession, authClient } from '@/lib/auth-client';

const Navbar = () => {
 
    const { data: session, isPending } = useSession();
    const user = session?.user;

    const handleLogout = async () => {
        await authClient.signOut();
        alert("Logged out!");
    };

    return (
        <nav className="bg-white py-4 shadow-sm border-b">
            <div className="flex items-center justify-between px-4 max-w-7xl mx-auto">
                
                {/* 1. Left Side */}
                <div className="flex-1">
                    <NavLink href="/" className="text-lg font-bold text-green-600">
                        Previous
                    </NavLink>
                </div>

                {/* 2. Middle: Links */}
                <div className="flex-1 hidden md:block">
                    <ul className="flex justify-center items-center gap-8 font-medium text-gray-500">
                        <li><NavLink href="/">Home</NavLink></li>
                        <li><NavLink href="/about-us">About</NavLink></li>
                        <li><NavLink href="/career">Career</NavLink></li>
                    </ul>
                </div>

                {/* 3. Right Side: User Details & Auth */}
                <div className="flex-1 flex items-center justify-end gap-4">
               
                    {isPending ? (
                        <span className="text-sm text-gray-500">Loading...</span>
                    ) : user ? (
                   
                        <div className="flex items-center gap-3">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold text-slate-800 leading-none">
                                    Hello, {user.name}
                                </p>
                            </div>

                     
                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-500">
                                <Image
                                    src={user.image || userAvatar} 
                                    alt="Profile" 
                                    width={40} 
                                    height={40} 
                                    className="object-cover"
                                />
                            </div>

                            
                            <button 
                                onClick={async () => {
                                    await authClient.signOut();
                                }}
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold transition-all"
                            >
                                Logout
                            </button>
                        </div>  
                    ) : (
              
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                                <Image src={userAvatar} alt="Default" width={40} height={40} />
                            </div>
                            <Link 
                                href="/login" 
                                className="bg-[#403F3F] hover:bg-black text-white px-6 py-2 rounded-md font-semibold transition-all"
                            >
                                Login
                            </Link>
                        </div>
                    )}
                </div>

            </div>
        </nav>
    );
};

export default Navbar;