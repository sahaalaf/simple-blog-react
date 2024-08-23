import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [comments, setComments] = useState([]);
    const [count, setCount] = useState(0);

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const now = new Date();
        const formattedDate = formatDate(now);

        setComments([...comments, { name, email, message, date: `on ${formattedDate}` }]);
        setCount(count + 1);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className='w-full h-[100vh] bg-white p-6 rounded max-w-2xl mx-auto'>
            <div className='mt-24'>
                <h2 className='text-4xl font-bold mb-4 text-gradient text-center'>Leave a Reply</h2>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <textarea
                        placeholder='Comment'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows='5'
                        className='p-3 bg-gray-100 rounded-lg border-none outline-none w-full'
                        required
                    ></textarea>
                    <div className='w-full flex flex-row gap-2'>
                        <input
                            type='text'
                            placeholder='Your Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='bg-gray-100 p-3 rounded-lg outline-none border-none w-full'
                            required
                        />
                        <input
                            type='email'
                            placeholder='Your Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='p-3 bg-gray-100 rounded-lg border-none outline-none w-full'
                            required
                        />
                    </div>
                    <button
                        type='submit'
                        className='w-full h-[38px] bg-custom-gradient hover:bg-hover-btn transition-all text-white rounded-xl'
                    >
                        Post Comment
                    </button>
                </form>

                <div className='mt-8'>
                    <h3 className='text-2xl font-bold mb-4'>{`Comments (${count})`}</h3>
                    <div>
                        {comments.length === 0 ? (
                            <p>No comments yet.</p>
                        ) : (
                            comments.map((comment, index) => (
                                <div key={index} className='p-3 bg-transparent'>
                                    <p className='font-semibold'>
                                        {comment.name} <span className='text-sm text-gray-400 font-light'>{comment.date}</span>
                                    </p>
                                    <p className='mt-2'>{comment.message}</p>
                                    <hr />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
