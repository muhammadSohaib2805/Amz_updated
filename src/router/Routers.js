import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Slider from '../components/Slider'
import Contact from '../pages/Contact'
import About from '../pages/About'
import EbookWriting from '../pages/EbookWriting'
import AudioBook from '../pages/AudioBook'
import GhostWriting from '../pages/GhostWriting'
import BookMarketing from '../pages/BookMarketing'
import BookPromotion from '../pages/BookPromotion'
import Formatting from '../pages/Formatting'
import Proofreading from '../pages/Proofreading'
import Publishing from '../pages/Publishing'
import BookEditing from '../pages/BookEditing'
import AuthorWebsite from '../pages/AuthorWebsite'
import BookVideoTrailer from '../pages/BookVideoTrailer'
import BookCover from '../pages/BookCover'
import ArticleWriting from '../pages/ArticleWriting'
import WebsiteContentWriting from '../pages/WebsiteContentWriting'
import BlogWriting from '../pages/BlogWriting'
import Portfolio from '../pages/Portfolio'
import Testimonial from '../pages/Testimonial'
// import {BannerFor} from '../components/Mail'

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home Slider={Slider} />} />
                <Route path="/e-book-writing" element={<EbookWriting/>} />
                <Route path="/audio-book" element={<AudioBook/>} />
                <Route path="/ghost-writing" element={<GhostWriting/>} />
                <Route path="/book-marketing" element={<BookMarketing/>} />
                <Route path="/book-promotion" element={<BookPromotion/>} />
                <Route path="/formatting" element={<Formatting/>} />
                <Route path="/proofreading" element={<Proofreading/>} />
                <Route path="/publishing" element={<Publishing/>} />
                <Route path="/book-editing" element={<BookEditing/>} />
                <Route path="/author-website" element={<AuthorWebsite/>} />
                <Route path="/book-video-trailer" element={<BookVideoTrailer/>} />
                <Route path="/book-cover" element={<BookCover/>} />
                <Route path="/article-writing" element={<ArticleWriting/>} />
                <Route path="/website-content-writing" element={<WebsiteContentWriting/>} />
                <Route path="/blog-writing" element={<BlogWriting/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/portfolio" element={<Portfolio/>} />
                <Route path="/testimonial" element={<Testimonial/>} />
            </Routes>
        </>
    )
}

export default Routers
