import React from 'react';

const Loading = () => {
    const skeletons = [1, 2, 3];

    return (
        <div className="relative bg-[#F8F9FA] min-h-screen py-10 overflow-hidden">
            {/* 1. Full Page Overlay Spinner (Extreme Level) */}
            <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/60 backdrop-blur-[4px]">
                <div className="relative">
                    {/* Outer Glowing Ring */}
                    <div className="w-24 h-24 rounded-full border-[3px] border-red-100 border-t-red-600 animate-spin"></div>
                    
                    {/* Inner Reverse Spinning Ring */}
                    <div className="absolute top-2 left-2 w-20 h-20 rounded-full border-[3px] border-transparent border-t-orange-500 border-l-orange-500 animate-[spin_1.5s_linear_infinite_reverse]"></div>
                    
                    {/* Center Logo Pulse */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 bg-red-600 rounded-lg rotate-45 animate-pulse shadow-[0_0_20px_rgba(220,38,38,0.6)] flex items-center justify-center">
                           <span className="text-white text-[10px] -rotate-45 font-black uppercase">D</span>
                        </div>
                    </div>
                </div>

                {/* Loading Text with Letter Spacing */}
                <div className="mt-8 flex flex-col items-center">
                    <h2 className="text-xl font-black text-gray-800 tracking-[0.3em] uppercase">
                        Standard<span className="text-red-600">News</span>
                    </h2>
                    <p className="text-xs text-gray-500 font-bold mt-2 tracking-widest animate-pulse uppercase">
                   Best news
                    </p>
                </div>
            </div>

            {/* 2. Background Skeletons (To prevent layout shift) */}
            <div className="container mx-auto px-4 lg:px-8 opacity-40 pointer-events-none">
                <div className="h-8 w-64 bg-gray-300 rounded-md mb-8"></div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Left Sidebar */}
                    <div className="hidden md:block md:col-span-3 flex flex-col gap-4">
                        <div className="h-6 w-full bg-gray-200 rounded"></div>
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="h-12 w-full bg-gray-200 rounded-lg"></div>
                        ))}
                    </div>

                    {/* Middle Content */}
                    <div className="col-span-12 md:col-span-6 flex flex-col gap-6">
                        {skeletons.map((n) => (
                            <div key={n} className="bg-white rounded-3xl p-6 border border-gray-100">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                                    <div className="flex flex-col gap-2">
                                        <div className="h-4 w-32 bg-gray-200 rounded"></div>
                                        <div className="h-3 w-20 bg-gray-200 rounded"></div>
                                    </div>
                                </div>
                                <div className="w-full h-64 bg-gray-200 rounded-2xl mb-6"></div>
                                <div className="h-4 w-full bg-gray-100 rounded mb-2"></div>
                                <div className="h-4 w-3/4 bg-gray-100 rounded"></div>
                            </div>
                        ))}
                    </div>

                    {/* Right Sidebar */}
                    <div className="hidden md:block md:col-span-3">
                        <div className="h-64 w-full bg-gray-200 rounded-xl"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;