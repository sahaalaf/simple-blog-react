import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlogCard from './BlogCard';
import babar from '../assets/babar.jfif';
import virat from '../assets/virat.webp';
import root from '../assets/root.webp';
import cr7 from '../assets/ronaldo.webp';
import messi from '../assets/messi.webp';
import neymar from '../assets/neymar.jfif';
import neeraj from '../assets/neeraj.webp';
import nadeem from '../assets/nadeem.webp';
import anderson from '../assets/anderson.jfif';

const cricketBlogData = [
    {
        id: 1,
        title: "Babar Azam: The Rising Star",
        author: "John Doe",
        date: "August 12, 2024",
        summary: "An in-depth look at Babar Azam's career and achievements in international cricket.",
        iconUrl: babar,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque."
    },
    {
        id: 2,
        title: "Virat Kohli: A Legend in the Making",
        author: "Jane Smith",
        date: "July 20, 2024",
        summary: "Explore Virat Kohli's journey and his impact on modern cricket.",
        iconUrl: virat,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque."
    },
    {
        id: 3,
        title: "Joe Root: England's Key Player",
        author: "Alice Johnson",
        date: "June 15, 2024",
        summary: "Learn about Joe Root's career highlights and his role in the England cricket team.",
        iconUrl: root,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque."
    }
];

const footballBlogData = [
    {
        id: 1,
        title: "Cristiano Ronaldo: The Goal Machine",
        author: "Michael Brown",
        date: "May 10, 2024",
        summary: "An analysis of Cristiano Ronaldo's impressive goal-scoring record and career.",
        iconUrl: cr7,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque."
    },
    {
        id: 2,
        title: "Lionel Messi: The Maestro",
        author: "Emily Davis",
        date: "April 5, 2024",
        summary: "A look at Lionel Messi's skillful play and his contributions to football.",
        iconUrl: messi,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque."
    },
    {
        id: 3,
        title: "Neymar: The Brazilian Star",
        author: "Sarah Lee",
        date: "March 20, 2024",
        summary: "Understand Neymar's playing style and his impact on football.",
        iconUrl: neymar,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque."
    }
];

const javelinBlogData = [
    {
        id: 1,
        title: "Anderson Peters: A Javelin Thrower’s Journey",
        author: "David Wilson",
        date: "February 10, 2024",
        summary: "A profile of Anderson Peters and his achievements in javelin throw.",
        iconUrl: anderson,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque."
    },
    {
        id: 2,
        title: "Arshad Nadeem: The Rising Talent",
        author: "Laura White",
        date: "January 22, 2024",
        summary: "Explore Arshad Nadeem's rise in the world of javelin throw.",
        iconUrl: nadeem,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque."
    },
    {
        id: 3,
        title: "Neeraj Chopra: India’s Javelin Star",
        author: "Chris Black",
        date: "December 18, 2023",
        summary: "Learn about Neeraj Chopra's journey and his achievements in javelin throw.",
        iconUrl: neeraj,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus soluta explicabo error deleniti alias voluptatibus quisquam natus ex quae ducimus repellat nisi est recusandae debitis dolore cumque, dolores itaque."
    }
];

const BlogList = () => {
    const navigate = useNavigate();

    const handleBlogClick = (blog) => {
        navigate(`/blog/${blog.id}`, { state: { blog } });
    };

    return (
        <div className='w-full bg-gray-100 flex flex-col items-center mt-16 mb-12'>
            <div>
                <h2 className='text-xl font-bold mt-12'>Cricket Blogs</h2>
                {cricketBlogData.map((blog) => (
                    <BlogCard
                        key={blog.id}
                        title={blog.title}
                        author={blog.author}
                        date={blog.date}
                        summary={blog.summary}
                        iconUrl={blog.iconUrl}
                        details={blog.details}
                        onClick={() => handleBlogClick(blog)}
                    />
                ))}
            </div>

            <div>
                <h2 className='text-xl font-bold mt-12'>Football Blogs</h2>
                {footballBlogData.map((blog) => (
                    <BlogCard
                        key={blog.id}
                        title={blog.title}
                        author={blog.author}
                        date={blog.date}
                        summary={blog.summary}
                        iconUrl={blog.iconUrl}
                        details={blog.details}
                        onClick={() => handleBlogClick(blog)}
                    />
                ))}
            </div>

            <div>
                <h2 className='text-xl font-bold mt-12'>Javelin Blogs</h2>
                {javelinBlogData.map((blog) => (
                    <BlogCard
                        key={blog.id}
                        title={blog.title}
                        author={blog.author}
                        date={blog.date}
                        summary={blog.summary}
                        iconUrl={blog.iconUrl}
                        details={blog.details}
                        onClick={() => handleBlogClick(blog)}
                    />
                ))}
            </div>
        </div>
    );
};

export default BlogList;
