"use client"
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { FaLayerGroup, FaImages } from 'react-icons/fa';

const LeftSidebar = ({ categories, activeId }) => {
    // নিশ্চিতভাবে কাজ করবে এমন হাই-কোয়ালিটি ছবির লিস্ট (৪টি স্যাম্পল এবং নিচে আরও ৩০টি জেনারেটেড আইডি)
    const galleryImages = [
        { id: 1, src: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd", title: "Frontline" },
        { id: 2, src: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd", title: "Night Ops" },
        { id: 3, src: "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7", title: "Briefing" },
        { id: 4, src: "https://images.unsplash.com/photo-1579532536935-619928decd08", title: "Army Base" },
        { id: 5, src: "https://images.unsplash.com/photo-1508614589041-895b88991e3e", title: "Patrol" },
        { id: 6, src: "https://images.unsplash.com/photo-1526510747491-58f928ec870f", title: "Desert" },
        { id: 7, src: "https://images.unsplash.com/photo-1580131421473-04e908901007", title: "Tactical" },
        { id: 8, src: "https://images.unsplash.com/photo-1547483359-54807490013f", title: "Defense" },
        { id: 9, src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e", title: "Summit" },
        { id: 10, src: "https://images.unsplash.com/photo-1466024353880-a15324024bd1", title: "Protest" },
        { id: 11, src: "https://images.unsplash.com/photo-1451187530230-b237ee7c43df", title: "Cyber" },
        { id: 12, src: "https://images.unsplash.com/photo-1560523160-754a9e25c68f", title: "Border" },
        { id: 13, src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e", title: "Tech" },
        { id: 14, src: "https://images.unsplash.com/photo-1473960103264-964697ede67f", title: "Strike" },
        { id: 15, src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d", title: "Intel" },
        { id: 16, src: "https://images.unsplash.com/photo-1504151932400-72d4384f04b3", title: "Ruins" },
        { id: 17, src: "https://images.unsplash.com/photo-1510511459019-5dee211c1827", title: "Sat" },
        { id: 18, src: "https://images.unsplash.com/photo-1506157786151-b8491531f063", title: "Crisis" },
        { id: 19, src: "https://images.unsplash.com/photo-1494783367193-149034c05e8f", title: "Impact" },
        { id: 20, src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29", title: "Command" },
        { id: 21, src: "https://images.unsplash.com/photo-1512756783931-22468d4d5e73", title: "Stealth" },
        { id: 22, src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4", title: "Trench" },
        { id: 23, src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853", title: "Warfare" },
        { id: 24, src: "https://images.unsplash.com/photo-1520690214124-2405c5217036", title: "Signals" },
        { id: 25, src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713", title: "Binary" },
        { id: 26, src: "https://images.unsplash.com/photo-1454165833222-d195d526ad04", title: "Strategy" },
        { id: 27, src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85", title: "Justice" },
        { id: 28, src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3", title: "Encryption" },
        { id: 29, src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b", title: "Security" },
        { id: 30, src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678", title: "Drone" },
        { id: 31, src: "https://images.unsplash.com/photo-1444676632488-26a136c45b9b", title: "Launch" },
        { id: 32, src: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a", title: "Diplomat" },
        { id: 33, src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac", title: "United" },
        { id: 34, src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5", title: "Hacking" }
    ];

    return (
        <div className="col-span-12 md:col-span-3">
            {/* --- Category Section --- */}
            <div className="flex items-center gap-3 mb-6 px-2">
                <div className="bg-red-600 p-2 rounded-lg text-white">
                    <FaLayerGroup size={18} />
                </div>
                <h2 className="font-black text-xl text-gray-900 tracking-tight uppercase">Categories</h2>
            </div>

            <nav className="flex flex-col gap-1.5 mb-10">
                {categories?.news_category?.map((category) => {
                    const isActive = activeId === category.category_id;
                    return (
                        <Link 
                            key={category.category_id}
                            href={`/category/${category.category_id}`}
                            className={`group flex items-center justify-between px-5 py-3 rounded-xl transition-all font-bold ${isActive ? 'bg-gray-900 text-white shadow-lg' : 'text-gray-600 hover:bg-white hover:text-red-600 border border-transparent hover:border-gray-100'}`}
                        >
                            <span>{category.category_name}</span>
                            <span>→</span>
                        </Link>
                    );
                })}
            </nav>

            {/* --- Crisis Visuals Gallery --- */}
            <div className="mt-10">
                <div className="flex items-center gap-3 mb-6 px-2">
                    <div className="bg-gray-900 p-2 rounded-lg text-white">
                        <FaImages size={18} />
                    </div>
                    <h2 className="font-black text-xl text-gray-900 tracking-tight uppercase">Crisis Visuals</h2>
                </div>

                <div className="grid grid-cols-2 gap-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                    {galleryImages.map((img) => (
                        <div key={img.id} className="group relative h-28 rounded-2xl overflow-hidden bg-gray-200 shadow-sm hover:shadow-xl transition-all duration-500">
                            <Image 
                                src={`${img.src}?q=80&w=400`} 
                                alt={img.title} 
                                fill 
                                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                sizes="(max-width: 768px) 50vw, 15vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-2 flex items-end">
                                <span className="text-[9px] text-white font-bold uppercase tracking-tighter">{img.title}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-[10px] text-gray-400 mt-3 text-center italic font-medium uppercase tracking-widest">
                    Scroll to view 30+ archives
                </p>
            </div>

            {/* --- 2026 Updated News Badge --- */}
            <div className="mt-10 p-6 bg-gradient-to-br from-red-600 to-red-800 rounded-[2.5rem] text-white shadow-2xl shadow-red-200">
                <div className="flex items-center gap-2 mb-3 font-black text-xs uppercase tracking-widest">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                    </span>
                    Live 2026 Intel
                </div>
                <p className="text-[11px] text-red-50 leading-relaxed font-bold">
                    Real-time monitoring of global shifts and geopolitical movements.
                </p>
            </div>

            {/* Next.js-এ স্টাইল দেওয়ার সঠিক নিয়ম */}
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f8fafc;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #cbd5e1;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #ef4444;
                }
            `}</style>
        </div>
    );
};

export default LeftSidebar;