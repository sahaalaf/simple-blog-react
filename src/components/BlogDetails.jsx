import React from 'react';
import { useLocation } from 'react-router-dom';

const BlogDetails = () => {
    const location = useLocation();
    const blog = location.state?.blog;

    if (!blog) {
        return <p>Blog not found!</p>;
    }

    return (
        <div className='w-full bg-gray-100 p-8 flex flex-col items-center gap-2'>
            <div className='mt-20 flex flex-col items-center gap-4'> 
                <h1 className='text-3xl font-bold'>{blog.title}</h1>
                <img 
                    src={blog.iconUrl} 
                    alt={blog.title} 
                    className='w-[1000px] h-[500px] object-cover object-top rounded-lg' 
                />
                <p className='text-orange-600 italic'>{blog.date}</p>
                <strong className='w-[63%] text-xl font-semibold mt-6'>{blog.summary}</strong>
                <p className='w-[63%] text-md font-light'>{blog.details}</p>
            </div>
        </div>
    );
};

export default BlogDetails;
