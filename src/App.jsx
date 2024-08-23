import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, HeroSection, BlogSection, Footer, Contact } from './components';
import BlogDetails from './components/BlogDetails';

const App = () => {
  return (
    <>
      <Navbar className='pt-[70px]' />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/blogs" element={
          <>
            <BlogSection />
            <Contact />
          </>
        } />
        <Route path="/suggest" element={<Contact />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
      <Footer />
      </>
  );
}

export default App;
