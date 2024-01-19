import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const MetaTitleDesc = () => {

    const [metatitle, setMetaTitle] = useState('');
    const [metadesc, setMetaDesc] = useState('');

    const location = useLocation();

    useEffect(() => {
        let newMetaTitle = '';
        let newMetaDesc = '';

        switch (location.pathname) {
            case '/':
                newMetaTitle = '';
                newMetaDesc = '';
                break;
            case '/contact':
                newMetaTitle = 'Contact';
                newMetaDesc = 'Contact';
                break;
            case '/about':
                newMetaTitle = 'About Us';
                newMetaDesc = 'About Us';
                break;
            case '/e-book-writing':
                newMetaTitle = 'E-book Writing';
                newMetaDesc = 'E-book Writing';
                break;
            case '/audio-book':
                newMetaTitle = 'Audio Book Service';
                newMetaDesc = 'Audio Book Service';
                break;
            case '/ghost-writing':
                newMetaTitle = 'Ghost Writing';
                newMetaDesc = 'Ghost Writing';
                break;
            case '/book-marketing':
                newMetaTitle = 'Book Marketing';
                newMetaDesc = 'Book Marketing';
                break;
            case '/book-promotion':
                newMetaTitle = 'Book Promotion';
                newMetaDesc = 'Book Promotion';
                break;
            case '/formatting':
                newMetaTitle = 'Formatting';
                newMetaDesc = 'Formatting';
                break;
            case '/proofreading':
                newMetaTitle = 'Proofreading';
                newMetaDesc = 'Proofreading';
                break;
            case '/publishing':
                newMetaTitle = 'Publishing';
                newMetaDesc = 'Publishing';
                break;
            case '/book-editing':
                newMetaTitle = 'Book Editing';
                newMetaDesc = 'Book Editing';
                break;
            case '/author-website':
                newMetaTitle = 'Author Website';
                newMetaDesc = 'Author Website';
                break;
            case '/book-video-trailer':
                newMetaTitle = 'Book Video Trailer';
                newMetaDesc = 'Book Video Trailer';
                break;
            case '/book-cover':
                newMetaTitle = 'Book Cover';
                newMetaDesc = 'Book Cover';
                break;
            case '/article-writing':
                newMetaTitle = 'Article Writing';
                newMetaDesc = 'Article Writing';
                break;
            case '/website-content-writing':
                newMetaTitle = 'Website Content Writing';
                newMetaDesc = 'Website Content Writing';
                break;
            case '/blog-writing':
                newMetaTitle = 'Blog Writing';
                newMetaDesc = 'Blog Writing';
                break;
            case '/portfolio':
                newMetaTitle = 'Portfolio';
                newMetaDesc = 'Portfolio';
                break;
            case '/testimonial':
                newMetaTitle = 'Testimonial';
                newMetaDesc = 'Testimonial';
                break;
            case '/thank-you':
                newMetaTitle = 'Thank You';
                newMetaDesc = 'Thank You';
                break;
            default:
                break;
        }

        setMetaTitle(newMetaTitle);
        setMetaDesc(newMetaDesc);
    }, [location.pathname]);

    let currentUrl = '';
    if (typeof window !== 'undefined') {
        currentUrl = window.location.href;
    }

    return (
        <>
            <Helmet>
                <title>{location.pathname !== '/' ? metatitle + " - Effective Book Marketing Services | Boost Your Book's Visibility" : "Effective Book Marketing Services | Boost Your Book's Visibility"}</title>
                <meta name="description" content={metadesc} />
                {currentUrl && <link rel="canonical" href={currentUrl} />}
            </Helmet>
        </>
    );
};

export default MetaTitleDesc;
