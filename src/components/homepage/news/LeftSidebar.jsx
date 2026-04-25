import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({ categories, activeId }) => {
    return (
        <div className="col-span-3">
            <h2 className="font-bold text-xl mb-4">All Categories</h2>

            <div className="flex flex-col gap-2">
                {categories.news_category.map((category) => (
                    <button
                        key={category.category_id}
                        className={`${activeId === category.category_id && 'bg-slate-100'}  'text-gray-500 hover:bg-gray-100 hover:text-black'}`}
                    >
                        <Link href={`/category/${category.category_id}`}className="inline
                        block">
                            {category.category_name} 
                        </Link>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LeftSidebar;