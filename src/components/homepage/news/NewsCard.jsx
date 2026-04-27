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
      <div className="flex justify-between items-center bg-gray-50/80 px-4 py-3 sm:px-5 border-b border-gray-100">
        <div className="flex gap-2 sm:gap-3 items-center">
          <div className="relative">
            <Image
              src={news.author?.img || "/fallback-avatar.png"}
              alt={news.author?.name}
              height={40}
              width={40}
              className="rounded-full object-cover ring-2 ring-white shadow-sm sm:h-[44px] sm:w-[44px]"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
          <div>
            <h2 className="font-bold text-gray-800 text-xs sm:text-sm leading-tight hover:text-primary transition-colors cursor-pointer line-clamp-1">
              {news.author?.name || "Anonymous"}
            </h2>
            <p className="text-[10px] text-gray-500 font-medium tracking-wide uppercase">
              {news.author?.published_date?.split(" ")[0] || "No Date"}
            </p>
          </div>
        </div>
        
        <div className="flex gap-0.5 sm:gap-1">
          <button title="Share" className="p-2 hover:bg-white hover:text-primary rounded-full transition-all text-gray-500 active:scale-90">
            <CiShare2 className="text-lg sm:text-xl" />
          </button>
          <button title="Bookmark" className="p-2 hover:bg-white hover:text-primary rounded-full transition-all text-gray-500 active:scale-90">
            <CiBookmark className="text-lg sm:text-xl" />
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        {/* News Title */}
        <h2 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-3 sm:mb-4 leading-snug group-hover:text-primary transition-colors line-clamp-2 cursor-pointer">
          {news.title}
        </h2>

        {/* Featured Image */}
        <div className="relative overflow-hidden rounded-xl mb-4 sm:mb-5 aspect-[16/9] w-full">
          <Image
            src={news.image_url}
            alt={news.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
            <span className="bg-primary/90 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase tracking-widest">
              Trending
            </span>
          </div>
        </div>

        {/* Details Text */}
        <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed line-clamp-3 mb-4">
          {news.details}
        </p>

        {/* Read More Link */}
        <Link 
          href={`/news/${news._id}`}
          className="inline-flex items-center gap-2 text-orange-500 font-bold text-xs sm:text-sm hover:gap-3 transition-all mb-6 w-fit"
        >
          Read Full Story <HiArrowLongRight className="text-lg" />
        </Link>

        {/* Footer: Rating & Views */}
        <div className="mt-auto pt-4 sm:pt-5 border-t border-gray-50 flex items-center justify-between">
          <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 sm:gap-4">
            {/* Stars */}
            <div className="flex items-center gap-1.5">
              <div className="flex text-yellow-400 text-xs sm:text-sm">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar />
              </div>
              <span className="font-bold text-gray-700 text-xs sm:text-sm">{news.rating?.number}</span>
            </div>

            {/* Views */}
            <div className="flex items-center gap-1.5 text-gray-500 bg-gray-100/50 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full">
              <FaEye className="text-xs sm:text-sm" />
              <span className="text-[10px] sm:text-xs font-bold">{news.total_view || 0}</span>
            </div>
          </div>

          {/* Details Button - Fixed Link Nesting */}
          <Link 
            href={`/news/${news._id}`}
            className="bg-gray-900 text-white px-4 py-2 sm:px-5 sm:py-2 rounded-lg text-xs sm:text-sm font-bold hover:bg-primary transition-colors shadow-lg shadow-gray-200 active:scale-95 whitespace-nowrap"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;