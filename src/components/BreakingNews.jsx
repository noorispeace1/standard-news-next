import React from 'react';
import Marquee from 'react-fast-marquee';
import { HiLightningBolt } from 'react-icons/hi';
import Link from 'next/link';

// ১. আইডি গুলো ইউনিক করা হয়েছে এবং টাইটেল থেকে ডট (●) সরিয়ে ম্যাপের ভেতরে দেওয়া হয়েছে
const news = [
    {
        _id: "news-1",
        title: "চব্বিশের গণঅভ্যুত্থানে আহতদের চিকিৎসা ও পুনর্বাসনে বিশেষ বরাদ্দ দিচ্ছে সরকার।",
    },
    {
        _id: "news-2",
        title: "আন্তর্জাতিক বাজারে জ্বালানি তেলের দাম কমায় বাংলাদেশেও কমানোর সম্ভাবনা।",
    },
    {
        _id: "news-3", 
        title: "টি-টোয়েন্টি র‍্যাঙ্কিংয়ে বড় উন্নতি করলেন বাংলাদেশি অলরাউন্ডাররা।",
    },
];

const BreakingNews = () => {
    return (
        <div className='flex items-center bg-gray-100 p-1 rounded-lg shadow-sm border border-gray-200 overflow-hidden mt-4'>
            
            {/* Breaking News Label */}
            <div className='flex items-center gap-2 bg-red-600 text-white px-4 py-2 font-bold uppercase tracking-wide shrink-0 rounded-l-md relative z-20'>
                <HiLightningBolt className="text-xl animate-pulse" />
                <span className="hidden md:block text-sm">Latest Breaking News</span>
                <span className="md:hidden text-sm">Latest</span>
                
                {/* Decorative Slant */}
                <div className="absolute -right-3 top-0 h-full w-4 bg-red-600 skew-x-[-20deg] z-10 hidden md:block"></div>
            </div>

            {/* Marquee Section */}
            <Marquee 
                pauseOnHover={true} 
                speed={70} 
                gradient={true} 
                gradientColor={[243, 244, 246]} 
                gradientWidth={40}
                className="font-medium text-gray-800"
            >
                {news.map((n) => (
                   
                    <Link 
                        key={n._id} 
                        href={`/news/${n._id}`} 
                        className="flex items-center hover:text-red-600 transition-colors cursor-pointer"
                    >
                        <span className="text-red-600 font-bold mx-4">●</span>
                        <span className="mr-8">{n.title}</span>
                    </Link>
                ))}
            </Marquee>
        </div>
    );
};

export default BreakingNews;