import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaRegStar, FaStar } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";

const NewsCard = ({ news }) => {
  if (!news) return null;

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
      
      {/* Header: Author Info */}
      <div className="flex justify-between items-center bg-gray-50/80 px-5 py-3 border-b border-gray-100">
        <div className="flex gap-3 items-center">
          <div className="relative">
            <Image
              src={news.author?.img || "/fallback-avatar.png"}
              alt={news.author?.name}
              height={44}
              width={44}
              className="rounded-full object-cover ring-2 ring-white shadow-sm"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
          <div>
            <h2 className="font-bold text-gray-800 text-sm leading-tight hover:text-primary transition-colors cursor-pointer">
              {news.author?.name || "Anonymous"}
            </h2>
            <p className="text-[11px] text-gray-500 font-medium tracking-wide uppercase">
              {news.author?.published_date?.split(" ")[0] || "No Date"}
            </p>
          </div>
        </div>
        
        <div className="flex gap-1">
          <button className="p-2 hover:bg-white hover:text-primary rounded-full transition-all text-gray-500 active:scale-90">
            <CiShare2 className="text-xl" />
          </button>
          <button className="p-2 hover:bg-white hover:text-primary rounded-full transition-all text-gray-500 active:scale-90">
            <CiBookmark className="text-xl" />
          </button>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        {/* News Title */}
        <h2 className="text-xl font-extrabold text-gray-900 mb-4 leading-snug group-hover:text-primary transition-colors line-clamp-2 cursor-pointer">
          {news.title}
        </h2>

        {/* Featured Image */}
        <div className="relative overflow-hidden rounded-xl mb-5 aspect-[16/9]">
          <Image
            src={news.image_url}
            alt={news.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-primary/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Trending
            </span>
          </div>
        </div>

        {/* Details Text */}
        <p className="text-gray-600 text-[15px] leading-relaxed line-clamp-3 mb-4">
          {news.details}
        </p>

        {/* Dynamic Read More Link */}
        <Link 
          href={`/news/${news._id}`}
          className="inline-flex items-center gap-2 text-orange-500 font-bold text-sm hover:gap-3 transition-all mb-6 w-fit"
        >
          Read Full Story <HiArrowLongRight className="text-lg" />
        </Link>

        {/* Footer: Rating & Views */}
        <div className="mt-auto pt-5 border-t border-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Stars & Number */}
            <div className="flex items-center gap-1.5">
              <div className="flex text-yellow-400 text-sm">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar />
              </div>
              <span className="font-bold text-gray-700 text-sm">{news.rating?.number}</span>
            </div>

            {/* Views */}
            <div className="flex items-center gap-1.5 text-gray-500 bg-gray-100/50 px-3 py-1 rounded-full">
              <FaEye className="text-sm" />
              <span className="text-xs font-semibold">{news.total_view || 0}</span>
            </div>
          </div>

          {/* Details Button - Minimalist Style */}
          <Link href={`/news/${news._id}`}>
             <button className="bg-gray-900 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-primary transition-colors shadow-lg shadow-gray-200 active:scale-95">
                Details
             </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;