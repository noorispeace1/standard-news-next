"use client"
import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter, FaArrowRight, FaCameraRetro, FaNewspaper, FaMicrophoneAlt } from 'react-icons/fa';
import playgroundimage from "../../../assets/playground.png";
import { authClient } from '@/lib/auth-client'; 

const RightSidebar = () => {
    
    const galleryItems = Array.from({ length: 72 }).map((_, idx) => ({
        id: idx,
   
        src: `https://picsum.photos/400/400?random=${idx + 10}`, 
        title: `News Brief ${idx + 1}`
    }));

    const handleGoogleSignin = async () => {
        try {
            await authClient.signIn.social({
                provider: "google",
                callbackURL: "/",
            });
        } catch (error) {
            console.error("Google Sign-in Error:", error);
        }
    };

    const handleGithubSignin = async () => {
        try {
            await authClient.signIn.social({
                provider: "github",
                callbackURL: "/",
            });
        } catch (error) {
            console.error("Github Sign-in Error:", error);
        }
    };

    return (
        <div className="flex flex-col gap-10">
            
            {/* --- Standard News: Editorial Focus --- */}
            <section className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <h2 className="text-xl font-black mb-5 text-gray-900 flex items-center gap-2">
                    <FaNewspaper className="text-red-600" />
                    Editorial Standards
                </h2>
                <div className="space-y-4">
                    <div className="group p-3 rounded-xl hover:bg-red-50 transition-colors border-l-4 border-red-600">
                        <h3 className="font-bold text-gray-800 text-sm uppercase flex items-center gap-2">
                            <FaMicrophoneAlt className="text-xs text-red-500" /> 
                            Truth in Reporting
                        </h3>
                        <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                            Verified real-time data from 2026 global dispatch centers.
                        </p>
                    </div>
                    <div className="group p-3 rounded-xl hover:bg-gray-50 transition-colors border-l-4 border-gray-900">
                        <h3 className="font-bold text-gray-800 text-sm uppercase">Global Integrity</h3>
                        <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                            Zero-bias policy on international geopolitical shifts.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- Login Section --- */}
            <section>
                <h2 className="text-xl font-extrabold mb-5 text-gray-900 flex items-center gap-2">
                    <span className="w-2 h-6 bg-red-600 rounded-full"></span>
                    Login With
                </h2>
                <div className="flex flex-col gap-3">
                    <button className="group flex items-center justify-center gap-3 w-full py-3 border-2 border-blue-500 text-blue-600 rounded-xl font-bold transition-all hover:bg-blue-500 hover:text-white active:scale-95" onClick={handleGoogleSignin}>
                        <FaGoogle className="group-hover:rotate-12 transition-transform" /> 
                        <span>Continue with Google</span>
                    </button>
                    <button className="group flex items-center justify-center gap-3 w-full py-3 border-2 border-gray-900 text-gray-900 rounded-xl font-bold transition-all hover:bg-gray-900 hover:text-white active:scale-95" onClick={handleGithubSignin}>
                        <FaGithub className="group-hover:rotate-12 transition-transform" /> 
                        <span>Continue with Github</span>
                    </button>
                </div>
            </section>

            {/* --- 70+ Photo Gallery: News Visuals --- */}
            <section className="bg-white p-5 rounded-3xl border border-gray-100 shadow-xl">
                <div className="flex items-center justify-between mb-5">
                    <h2 className="text-xl font-black text-gray-900 flex items-center gap-2 uppercase tracking-tight">
                        <FaCameraRetro className="text-red-600" />
                        World Archives
                    </h2>
                    <span className="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded animate-pulse">
                        LIVE 70+
                    </span>
                </div>

                <div className="grid grid-cols-3 gap-2 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                    {galleryItems.map((img) => (
                        <div key={img.id} className="group relative aspect-square rounded-xl overflow-hidden bg-gray-200 border border-gray-100">
                            <Image 
                                src={img.src} 
                                fill 
                                alt={img.title} 
                                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-125 transition-all duration-700"
                                sizes="150px"
                                priority={img.id < 6}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                <span className="text-white text-[7px] font-bold uppercase tracking-widest leading-none">
                                    {img.title}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 pt-3 border-t border-gray-50 text-center">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
                        Geopolitical Visual Database
                    </p>
                </div>
            </section>

            {/* --- Find Us Section --- */}
            <section>
                <h2 className="text-xl font-extrabold mb-5 text-gray-900 flex items-center gap-2">
                    <span className="w-2 h-6 bg-red-600 rounded-full"></span>
                    Connect With Us
                </h2>
                <div className="flex flex-col bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
                    <a href="#" className="group flex items-center gap-4 p-4 border-b border-gray-50 hover:bg-blue-50 transition-all">
                        <span className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full group-hover:rotate-[360deg] transition-transform duration-500"><FaFacebookF /></span>
                        <span className="font-bold text-gray-700">Facebook</span>
                    </a>
                    <a href="#" className="group flex items-center gap-4 p-4 hover:bg-pink-50 transition-all">
                        <span className="w-10 h-10 flex items-center justify-center bg-pink-100 text-pink-600 rounded-full group-hover:rotate-[360deg] transition-transform duration-500"><FaInstagram /></span>
                        <span className="font-bold text-gray-700">Instagram</span>
                    </a>
                </div>
            </section>

            {/* --- Promotional Banner --- */}
            <section className="relative group bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden text-center py-12 px-8 shadow-2xl">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-red-600 rounded-full blur-[80px] opacity-20"></div>
                
                <div className="relative z-10">
                    <h2 className="text-3xl font-black text-white leading-tight mb-4">
                        Master the <span className="text-red-600 underline decoration-white/20 underline-offset-8">News</span>
                    </h2>
                    <p className="text-gray-400 text-xs mb-8 font-medium">
                        Premium journalistic tools for the digital era.
                    </p>
                    <button className="w-full inline-flex items-center justify-center gap-2 bg-red-600 text-white py-4 font-black rounded-2xl hover:bg-white hover:text-red-600 transition-all duration-500 shadow-xl shadow-red-600/20">
                        Get Unlimited Access <FaArrowRight />
                    </button>
                </div>
            </section>

            {/* কাস্টম স্ক্রোলবার স্টাইল */}
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 5px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #e2e8f0;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #ef4444;
                }
            `}</style>
        </div>
    );
};

export default RightSidebar;