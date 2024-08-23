import React from 'react';

const BlogCard = ({ title, author, date, summary, iconUrl, onClick }) => {
    return (
        <div
            className='w-[980px] bg-white rounded-xl shadow-md mt-3 mb-6 px-4 py-6 hover:scale- hover:bg-green-50 transition-transform duration-300 cursor-pointer flex flex-row items-center justify-between gap-4'
            onClick={onClick}
        >
            <div className='flex flex-col'>
                <span className='text-xs text-gray-500'>{date}</span>
                <p className='text-xl font-semibold mt-2'>{title}</p>
                <p className='text-lg text-gray-700 mt-2'>{summary}</p>
                <span className='text-sm text-orange-500 mt-2'>{author}</span>
            </div>
            <div className='w-[200px] h-[150px] flex items-center justify-center rounded-xl overflow-hidden'>
                <img src={iconUrl} alt={title} className='rounded-lg' />
            </div>
        </div>
    );
};

export default BlogCard;
