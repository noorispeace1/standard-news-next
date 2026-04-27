import LeftSidebar from '@/components/homepage/news/LeftSidebar';
import RightSidebar from '@/components/homepage/news/RightSidebar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

async function getCategories() {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await res.json();
    return data.data; 
}

async function getNewsByCategoryId(category_id) {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
    const data = await res.json();
    return data.data; 
}

const NewsCategoryPage = async({params}) => {
    const {id} = await params;
    const categories = await getCategories("01");
    const news = await getNewsByCategoryId(id);

    return (
       <div className="bg-[#F8F9FA] min-h-screen">
            {/* Grid layout responsive kora hoyeche: 
                Mobile: 1 column
                Desktop (lg): 12 column gap-8 thakbe */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 my-6 lg:my-[40px] container mx-auto px-4">
                
                {/* Left Sidebar: 
                    Mobile-e order-2 (Content er niche)
                    Desktop-e col-span-3 thakbe */}
                <div className="col-span-1 lg:col-span-3 order-2 lg:order-1">
                    <LeftSidebar categories={categories} activeId={null}></LeftSidebar>
                </div>

                {/* Middle Content: News Feed
                    Mobile-e order-1 (Sobar agey thakbe)
                    Desktop-e col-span-6 thakbe */}
                <div className="col-span-1 lg:col-span-6 order-1 lg:order-2">
                    <h2 className="font-bold text-xl lg:text-2xl text-gray-800 mb-6 border-l-4 border-red-500 pl-3">
                      Standard News Home
                    </h2>
                    
                    <div className="flex flex-col gap-6">
                        {news.map(n => (
                            <div key={n._id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                                {/* Header Section */}
                                <div className="p-4 bg-gray-50 flex justify-between items-center border-b border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="w-10 rounded-full ring ring-offset-2 ring-gray-200">
                                                <Image width={40} height={40} src={n.author?.img} alt="author" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm text-gray-700">{n.author?.name || "Unknown"}</p>
                                            <p className="text-xs text-gray-500">{n.author?.published_date?.split(" ")[0]}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 text-gray-400">
                                        <button className="hover:text-primary">🔖</button>
                                        <button className="hover:text-primary">🔗</button>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-4 lg:p-5">
                                    <h3 className="font-extrabold text-lg lg:text-xl text-gray-900 mb-4 leading-relaxed">
                                        {n.title}
                                    </h3>
                                    {/* Image height responsive kora hoyeche mobile-er jonno */}
                                    <div className="relative w-full h-[200px] md:h-[300px] lg:h-[350px] mb-4">
                                        <Image 
                                            src={n.image_url} 
                                            alt={n.title} 
                                            fill 
                                            className="object-cover rounded-lg"
                                        />
                                    </div>
                                    <p className="text-gray-600 text-sm leading-6 line-clamp-3">
                                        {n.details}
                                    </p>
                                    <button className="mt-3 text-orange-500 font-bold text-sm hover:underline">
                                       <Link href={`/news/${n._id}`}>Read More</Link>
                                    </button>
                                </div>

                                {/* Footer Section */}
                                <div className="px-5 py-4 border-t border-gray-100 flex justify-between items-center bg-white">
                                    <div className="flex items-center gap-2">
                                        <div className="flex text-orange-400 text-base lg:text-lg">
                                            {"★".repeat(Math.round(n.rating?.number || 0))}
                                            <span className="text-gray-300">{"★".repeat(5 - Math.round(n.rating?.number || 0))}</span>
                                        </div>
                                        <span className="text-sm font-semibold text-gray-600">{n.rating?.number}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <span className="text-lg">👁</span>
                                        <span className="text-sm font-medium">{n.total_view}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Sidebar: 
                    Mobile-e order-3 (Sobar niche thakbe)
                    Desktop-e col-span-3 thakbe */}
                <div className="col-span-1 lg:col-span-3 order-3 lg:order-3">
                   <RightSidebar></RightSidebar>
                </div>

            </div>
        </div>
    );
};

export default NewsCategoryPage;