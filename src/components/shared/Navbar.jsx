import Link from 'next/link';
import userAvatar from '@/assets/user.png'
import React from 'react';
import Image from 'next/image';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <nav className="bg-white py-4">
            <div className="flex items-center justify-between px-4">
                
                {/* 1. Left Side: "Previous" (Far Left) */}
                <div className="flex-1">
                    <NavLink href="/" className="text-lg font-semibold text-green-600 hover:text-green-700 transition-colors">
                        Previous
                    </NavLink>
                </div>

                {/* 2. Middle: Navigation Links (Perfectly Centered) */}
                <div className="flex-1">
                    <ul className="flex justify-center items-center gap-8 font-medium text-gray-500">
                        <li className="hover:text-black transition-colors">
                            <NavLink href="/">Home</NavLink>
                        </li>
                        <li className="hover:text-black transition-colors">
                            <NavLink href="/about-us">About</NavLink>
                        </li>
                        <li className="hover:text-black transition-colors">
                            <NavLink href="/career">Career</NavLink>
                        </li>
                    </ul>
                </div>

                {/* 3. Right Side: User Profile & Login (Far Right) */}
                <div className="flex-1 flex items-center justify-end gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                        <Image
                            src={userAvatar} 
                            alt="user Avatar" 
                            width={40} 
                            height={40} 
                            className="object-cover cursor-pointer"
                        />
                    </div>
                    
                    <Link 
                        href="/login" 
                        className="bg-[#403F3F] hover:bg-black text-white px-8 py-2 rounded-none font-semibold transition-all"
                    >
                        Login
                    </Link>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;