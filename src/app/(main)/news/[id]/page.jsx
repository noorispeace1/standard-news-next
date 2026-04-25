import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import { FaCalendarAlt, FaStar, FaEye } from 'react-icons/fa';
import RightSidebar from '@/components/homepage/news/RightSidebar';
export const generateMetadata = async({params}) =>{
  const {id} = await params;
  const news = await getNewsDetailsById(id);
    return {
        title: news.title,
        description: news.details, // First 160 characters as description
    }
}       

const NewsDetailsPage = async ({ params }) => {
    // 1. Params await kora ebong ID extract kora
    const { id } = await params;

    // 2. Data Fetch kora (Assuming getNewsDetailsById returns the news object)
    const newsData = await getNewsDetailsById(id);
    const news = newsData; // API usually array return kore, tai first element nilam
console.log(newsData);
    if (!news) {
        return <div className="text-center py-20 text-2xl font-bold">News Not Found!</div>;
    }

    return (
        <div className="bg-[#F3F4F6] min-h-screen py-10">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Heading Section */}
                <h2 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">
                    News Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Left Side: Full Details Content */}
                    <div className="md:col-span-9">
                        <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-10 shadow-xl shadow-gray-200/50">
                            
                            {/* Main Image */}
                            <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden mb-8 shadow-2xl">
                                <Image 
                                    src={news.image_url} 
                                    alt={news.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute top-5 left-5">
                                    <span className="bg-red-600 text-white px-5 py-2 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg">
                                        {news.category_id === "01" ? "Breaking" : "Exclusive"}
                                    </span>
                                </div>
                            </div>

                            {/* News Title */}
                            <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                                {news.title}
                            </h1>

                            {/* Metadata (Author, Date, Views) */}
                            <div className="flex flex-wrap items-center gap-6 mb-8 py-6 border-y border-gray-100">
                                <div className="flex items-center gap-3">
                                    <Image 
                                        src={news.author?.img} 
                                        width={48} 
                                        height={48} 
                                        className="rounded-full ring-2 ring-red-500 ring-offset-2"
                                        alt="author"
                                    />
                                    <div>
                                        <p className="font-bold text-gray-800 text-sm">{news.author?.name}</p>
                                        <p className="text-xs text-gray-500 flex items-center gap-1">
                                            <FaCalendarAlt /> {news.author?.published_date}
                                        </p>
                                    </div>
                                </div>
                                <div className="h-10 w-[1px] bg-gray-200 hidden md:block"></div>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1.5 bg-orange-50 text-orange-600 px-3 py-1 rounded-lg font-bold text-sm">
                                        <FaStar /> {news.rating?.number}
                                    </div>
                                    <div className="flex items-center gap-1.5 text-gray-500 font-bold text-sm">
                                        <FaEye /> {news.total_view} Views
                                    </div>
                                </div>
                            </div>

                            {/* News Details Content */}
                            <div className="prose prose-lg max-w-none text-gray-700 leading-loose mb-10">
                                {news.details.split('\n').map((para, index) => (
                                    <p key={index} className="mb-4 text-lg">
                                        {para}
                                    </p>
                                ))}
                            </div>

                            {/* Back Button */}
                            <Link href={`/category/${news.category_id}`}>
                                <button className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-xl font-black hover:bg-gray-900 transition-all duration-300 shadow-xl shadow-red-200 active:scale-95">
                                    <HiArrowLeft className="text-xl" /> All news in this category
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Side: Sidebar */}
                    <div className="md:col-span-3">
                        <RightSidebar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsPage;