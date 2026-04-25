import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaGooglePlusG, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaSquareGithub } from 'react-icons/fa6';

const RightSidebar = () => {
    return (
     <div className="flex flex-col gap-8">
            
            {/* --- Login Section --- */}
            <section>
                <h2 className="font-black text-lg mb-4 text-gray-800 uppercase tracking-tight">Login With</h2>
                <div className="flex flex-col gap-2">
                    <button className="btn btn-outline border-blue-400 text-blue-500 hover:bg-blue-50 hover:border-blue-500 w-full flex items-center gap-2 capitalize font-bold">
                        <FaGoogle className="text-lg" /> Login with Google
                    </button>
                    <button className="btn btn-outline border-gray-700 text-gray-800 hover:bg-gray-100 w-full flex items-center gap-2 capitalize font-bold">
                        <FaGithub className="text-lg" /> Login with Github
                    </button>
                </div>
            </section>

            {/* --- Find Us Section (Standard Editorial Look) --- */}
            <section>
                <h2 className="font-black text-lg mb-4 text-gray-800 uppercase tracking-tight">Find Us On</h2>
                <div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden">
                    <a href="#" className="flex items-center gap-3 p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <span className="p-2 bg-gray-100 rounded-full text-blue-600"><FaFacebook /></span>
                        <span className="font-semibold text-gray-600">Facebook</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <span className="p-2 bg-gray-100 rounded-full text-blue-400"><FaTwitter /></span>
                        <span className="font-semibold text-gray-600">Twitter</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors">
                        <span className="p-2 bg-gray-100 rounded-full text-pink-600"><FaInstagram /></span>
                        <span className="font-semibold text-gray-600">Instagram</span>
                    </a>
                </div>
            </section>

            {/* --- Q-Zone Section --- */}
            <section className="bg-gray-100 p-4 rounded-xl">
                <h2 className="font-black text-lg mb-4 text-gray-800 uppercase tracking-tight">Q-Zone</h2>
                <div className="flex flex-col gap-4">
                    <div className="relative w-full h-40">
                        <Image src="https://i.ibb.co/qY70fT5/qZone1.png" fill alt="qzone" className="object-contain" />
                    </div>
                    <div className="relative w-full h-40">
                        <Image src="https://i.ibb.co/m9Xv6P5/qZone2.png" fill alt="qzone" className="object-contain" />
                    </div>
                </div>
            </section>

            {/* --- Promotional Banner (Advanced) --- */}
            <section className="relative bg-[#050505] rounded-xl overflow-hidden text-center py-16 px-6 shadow-2xl">
                <div className="absolute inset-0 opacity-40 bg-gradient-to-b from-red-600 to-transparent"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl font-black text-white leading-tight mb-4">
                        Create an Amazing Newspaper
                    </h2>
                    <p className="text-gray-300 text-sm mb-8 leading-relaxed">
                        Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                    </p>
                    <button className="bg-red-600 text-white px-6 py-3 font-bold rounded-lg hover:bg-red-700 transition-all active:scale-95 shadow-lg shadow-red-900/20">
                        Learn More
                    </button>
                </div>
            </section>

        </div>
    );
};

export default RightSidebar;