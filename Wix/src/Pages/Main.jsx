import React from 'react'
import Home from './Home';
import Contact from './Contact';
import Blog from './Blog';
import Books from './Books';
import ClientAlbum from './ClientAlbum';
import Portfolio from './Portfolio';
import About from './About';
import { Routes, Route} from 'react-router-dom';

const Main = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/books" element={<Books />} />
    <Route path="/about" element={<About />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/clientalbum" element={<ClientAlbum />} />
  </Routes>
  )
}

export default Main