'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link 
            href={href} 
            className={`relative py-1 transition-all duration-500 group flex flex-col items-center ${
                isActive ? 'text-black font-bold' : 'text-gray-500 hover:text-green-600 font-medium'
            }`}
        >
            {/* The Text */}
            <span>{children}</span>

           
            <span 
                className={`h-[2px] bg-black transition-all duration-500 ease-in-out ${
                    isActive ? 'w-full mt-1' : 'w-0 mt-1 group-hover:w-full'
                }`} 
            />
            
            {/* Optional: Subtle active dot (Unique touch) */}
            {isActive && (
                <span className="absolute -bottom-1 w-1 h-1 bg-black rounded-full animate-pulse" />
            )}
        </Link>
    );
};

export default NavLink;