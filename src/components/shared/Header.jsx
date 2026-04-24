import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from "date-fns";

const Header = () => {
    return (
        <header className='text-center py-8 space-y-4'>
            {/* Logo Section */}
            <div className="flex justify-center">
                <Image 
                    src={logo} 
                    width={400} 
                    height={250} 
                    alt='The Standard News' 
                    className='mx-auto object-contain'
                    priority
                />
            </div>

            {/* Stylish Divider & Date Section */}
            <div className="max-w-4xl mx-auto px-4">
                <div className="border-y-2 border-gray-800 py-2 flex flex-col md:flex-row justify-between items-center text-sm md:text-base font-medium uppercase tracking-tighter">
                    
                    {/* Tagline */}
                    <p className="italic text-gray-600 order-2 md:order-1">
                        Journalism Without Fear or Favour
                    </p>

                    {/* Styled Date */}
                    <p className="font-bold text-gray-900 order-1 md:order-2 mb-1 md:mb-0">
                        <span className="text-red-700">●</span> {format(new Date(), "EEEE, MMMM dd, yyyy")}
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;