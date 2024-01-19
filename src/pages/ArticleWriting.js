import React, { useRef } from 'react'
import service1 from '../asset/images/img-1.webp'
import service2 from '../asset/images/img-2.webp'
import service3 from '../asset/images/img-5.webp'
import service4 from '../asset/images/img-4.webp'
import ses1 from '../asset/images/ser4-1-1.jpg'
import dis from '../asset/images/cta_discount.webp'
import writer from '../asset/images/writer.png'
import refund from '../asset/images/refund-policy-qe1gzwjaj624ybjybclrhah7d6m5tk421cocca3mdg.png'
import customer from '../asset/images/customized-offers-qe1gzunm5hzkb3mombsicaya6evfe5wld3dddq6epw.png'
import diss from '../asset/images/new-image-twoo-1024x803-1-qdzmxcvsw9kwt8zz9ql25cbvi1kvxd64zr3ysimeom.png'
import { FaCheckDouble } from 'react-icons/fa'
import brands from '../asset/images/trusted.png'
import { NavLink } from 'react-router-dom'
import Header from '../layout/Header';
import { BannerForm } from '../components/Mail'
import backgroundImage from '..//asset/images/amazon-publishing-pro.jpg'
import MetaTitleDesc from '../MetaTitleDesc';

const ArticleWriting = () => {

    const openLiveChat = () => {
        window.LC_API.open_chat_window();
    }

    const topSectionRef = useRef(null);

    const scrollToTop = () => {
        if (topSectionRef.current) {
            topSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error("Element with ID 'scroll-to-top' not found");
        }
    };

    return (
        <>
        <MetaTitleDesc/>
            <div className="bg__maron d-none d-lg-block">
                <div className="px-4 py-2">
                    <div className="row">
                        <div className="col-md-6">
                            <h6 className='m-0 text-white fs_15'><span className='text__light_grey'>Call us at</span> +1-216-777-2526 (USA) <span className='text__light_grey'>|| OR</span> START A LIVE CHAT</h6>
                        </div>
                        <div className="col-md-6 text-end">
                            <h6 className='m-0 text-white fs_15'> <span className='text__light_grey'>MON-FRI (9.00 AM – 05.30 PM EST)</span></h6>
                        </div>
                    </div>
                </div>
            </div>
            <header className='bg-white shadow_sm'>
                <Header />
                <div className="container pt-5 pb-3 mt-5">
                    <div className="row pt-5">
                        <div className="col-45">
                            <h1 className='text__shadow fs_40 text-white fw_700'>
                                CAPTIVATE YOUR READERS WITH AMAZON PUBLISHER PROS' ARTICLE
                                <span className='text__orange'> WRITING SERVICES!</span></h1>
                            <h5 className='fs_21 fw_400 text-white'>Don't miss out on the opportunity to engage your audience with captivating articles. Words are potent tools! At Amazon Publisher Pros, we have a team of skilled writers ready to generate excitement among readers just before your book's launch. Plus, we're committed to delivering top-notch article-writing services that won't break the bank. What more could you need?</h5>
                            <div className="d-flex justify-content-lg-start justify-content-center gap-2">
                                <button onClick={scrollToTop} className='btn border-0 bg__orange text__black rounded-pill fs_18 fw_600'>START PROJECT</button>
                                <NavLink to="tel:1-216-777-2526" className='btn border-0 bg__orange text__black rounded-pill fs_18 fw_600'>CALL NOW</NavLink>
                            </div>
                            <div className='pt-5 pb-4'>
                                <img src={brands} className='img-fluid' alt="trusted brand" />
                            </div>
                        </div>
                        <div className="col-26"></div>
                        <div className="col-28">
                            <div className="form pt-4" ref={topSectionRef}>
                                <h2 className='text-center text-white pb-4 fw-bold'>Let's Get <br /> Started!</h2>
                                <BannerForm PageNameTracking={'[Article Writing Page Banner Form]'} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="service-box py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <h3 className='text-center fs_44 fw_700 mb-3'>Share Your Story With The World Through <br /> <span className='text__orange'>Amazon Publisher Pros.</span></h3>
                        <h6 className='text-center fs_16 fw_300'>Our skilled writers bring your ideas to life. We offer comprehensive writing <br /> and
                            publishing services to bring your masterpiece to life.</h6>
                        <div className="col-md-3 text-center mb-lg-0 mb-3">
                            <img src={service1} alt="" className='img-fluid' />
                            <h3 className='fs_25 fw_700'>Book Writing</h3>
                            <h6 className='fs_16 fw_400 px-lg-3'>Like many of our customers, become an author of a best-seller.</h6>
                        </div>
                        <div className="col-md-3 text-center mb-lg-0 mb-3">
                            <img src={service2} alt="" className='img-fluid' />
                            <h3 className='fs_25 fw_700'>Book Pubishing</h3>
                            <h6 className='fs_16 fw_400 px-lg-3'>Making book publishing easy with an all-in-one solution.</h6>
                        </div>
                        <div className="col-md-3 text-center mb-lg-0 mb-3">
                            <img src={service3} alt="" className='img-fluid' />
                            <h3 className='fs_25 fw_700'>EBook Writing</h3>
                            <h6 className='fs_16 fw_400 px-lg-3'>We provide professional E-book writing services.</h6>
                        </div>
                        <div className="col-md-3 text-center mb-lg-0 mb-3">
                            <img src={service4} alt="" className='img-fluid' />
                            <h3 className='fs_25 fw_700'>Book Marketing</h3>
                            <h6 className='fs_16 fw_400 px-lg-3'>We provide the most effective marketing tactics.</h6>
                        </div>
                        <div className="col-md-3 text-center mb-lg-0 mb-3">
                            <img src={service3} alt="" className='img-fluid' />
                            <h3 className='fs_25 fw_700'>Editing</h3>
                            <h6 className='fs_16 fw_400 px-lg-3'>We'll thoroughly edit your book for free.</h6>
                        </div>
                        <div className="col-md-3 text-center mb-lg-0 mb-3">
                            <img src={service1} alt="" className='img-fluid' />
                            <h3 className='fs_25 fw_700'>Book Cover Design</h3>
                            <h6 className='fs_16 fw_400 px-lg-3'>We provide book covers that will prompt the readers to pick your book.</h6>
                        </div>
                        <div className="col-md-3 text-center mb-lg-0 mb-3">
                            <img src={service2} alt="" className='img-fluid' />
                            <h3 className='fs_25 fw_700'>Custom Book Illustration</h3>
                            <h6 className='fs_16 fw_400 px-lg-3'>We provide professional E-book writing services.</h6>
                        </div>
                        <div className="col-md-3 text-center mb-lg-0 mb-3">
                            <img src={service1} alt="" className='img-fluid' />
                            <h3 className='fs_25 fw_700'>Article Writing & Publishing</h3>
                            <h6 className='fs_16 fw_400 px-lg-3'>Enhance your role as a researcher and take important steps to contribute to scientific progress.</h6>
                        </div>
                        <div className="col-md-3 text-center mb-lg-0 mb-3">
                            <img src={service1} alt="" className='img-fluid' />
                            <h3 className='fs_25 fw_700'>Author Website</h3>
                            <h6 className='fs_16 fw_400 px-lg-3'>An author’s website is crucial for credibility. We’ll establish your online presence.</h6>
                        </div>
                        <div className="col-md-3 text-center mb-lg-0 mb-3">
                            <img src={service2} alt="" className='img-fluid' />
                            <h3 className='fs_25 fw_700'>Professional Audio Book</h3>
                            <h6 className='fs_16 fw_400 px-lg-3'>Get an audiobook with excellent narration and proper edits.</h6>
                        </div>
                        <div className="col-md-3 text-center mb-lg-0 mb-3">
                            <img src={service1} alt="" className='img-fluid' />
                            <h3 className='fs_25 fw_700'>Book Video Trailer</h3>
                            <h6 className='fs_16 fw_400 px-lg-3'>Design a captivating video trailer for your book with our award-winning designers.</h6>
                        </div>
                        <h5 className='text-center fw_700 fs_44'>Chat With Us For A <span className='text__orange'> 50% Discount </span> <br />On These Services.</h5>
                    </div>
                </div>
            </div>
            <div className="writing-section py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h6 className='fs_32 fw_700'>CONNECT WITH SKILLED WRITERS WHO BRING YOUR IDEAS TO LIFE</h6>
                            <p className='fs_16 fw_400'>At Amazon Publisher Pros, we've got a talented team of writers who know how to craft engaging content. Our writers are experienced in the latest writing techniques that captivate readers. Some of the best-selling authors are part of our team, and we're here to help you capture your audience's attention with powerful words and dedication. Let's work together to achieve greatness and overcome your challenges. Contact us today and be a part of the magic we create in every masterpiece.</p>
                            <div className='d-flex mb-3 gap-2 align-items-center'>
                                <button onClick={scrollToTop} className='border-0 btn bg__orange text__black rounded-pill fs_16 fw_600'>GET A FREE PROPOSAL</button>
                                <button onClick={openLiveChat} className='border-0 btn bg__orange text__black rounded-pill fs_16 fw_600'>Talk to an Expert</button>
                                <NavLink to="tel:1-216-777-2526" className='border-0 btn bg__orange text__black rounded-pill fs_16 fw_600'>+1-216-777-2526</NavLink>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <img src={ses1} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="discount-section py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4 d-flex justify-content-end">
                            <img src={dis} alt="" className='img-fluid' />
                        </div>
                        <div className="col-md-8">
                            <h2 className='fw_300 mb-3 fs_32'>Looking for top-notch article writing? Let us be your go-to team for inspiring and educating your readers! If you're struggling to find the right writer to boost your website traffic, we've got you covered.</h2>
                            <h6 className='fw_600 mb-3 fs_20'>Get started today and enjoy up to 50% off on all our packages.</h6>
                            <div className='d-flex mb-3 gap-2 align-items-center'>
                                <button onClick={openLiveChat} className='border-0 btn bg__orange text__black rounded-pill fs_16 fw_600'>Start Chatting Live</button>
                                <button onClick={scrollToTop} className='border-0 btn bg__orange text__black rounded-pill fs_16 fw_600'>GET STARTED</button>
                            </div>
                            <h5 className='fw_600 fs_20'>Call Us +1-216-777-2526</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='goal-section py-5'>
                <div className="container">
                    <div className="row align-items-center">
                        <h2 className='text-center fw_700 fs_36'> Welcome to Amazon Publisher Pros, where our expert writers craft engaging articles to captivate your website visitors</h2>
                        <div className="col-md-4">
                            <div className="card mb-lg-0 mb-3 box__shadow bg-transparent border-0">
                                <div className="card-body text-center">
                                    <img src={writer} alt="" className='img-fluid' />
                                    <h4 className='fw_700 fs_20'>Our Writers</h4>
                                    <h6 className='fs_16 fw_400'>Our experienced writers at Amazon Publisher Pros are masters at adding that 'wow' factor to their work. They use innovative techniques to keep readers hooked.</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-lg-0 mb-3 box__shadow bg-transparent border-0 ">
                                <div className="card-body text-center">
                                    <img src={refund} alt="" className='img-fluid' />
                                    <h4 className='fw_700 fs_20'>Exclusive Content</h4>
                                    <h6 className='fs_16 fw_400'>Every article we create is tailored just for you. We promise unique and original content, customized to meet your needs.</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-lg-0 mb-3 box__shadow bg-transparent border-0 ">
                                <div className="card-body text-center">
                                    <img src={customer} alt="" className='img-fluid' />
                                    <h4 className='fw_700 fs_20'>Quality Guaranteed</h4>
                                    <h6 className='fs_16 fw_400'>We take quality seriously. Our articles go through thorough checks to ensure they meet the highest standards. You can trust us for the best content for your website.</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="timeline-section pt-3">
                <h2 className="text-center fs_32 mb-3 text-white fw_700">HOW WE WORK</h2>
                <div class="timeline">
                    <div class="inner left">
                        <div class="content">
                            <h2 className='fs_24 fw_700'>Understanding Your Needs</h2>
                            <p className='fs_16 fw_400'>We talk to you to understand what you want. We learn about the topics, style, and the people you're trying to reach.</p>
                        </div>
                    </div>
                    <div class="inner right">
                        <div class="content">
                            <h2 className='fs_24 fw_700'>Writing Begins</h2>
                            <p className='fs_16 fw_400'>Our writers start creating the first version of your article. They follow your instructions carefully.</p>
                        </div>
                    </div>
                    <div class="inner left">
                        <div class="content">
                            <h2 className='fs_24 fw_700'>Your Feedback</h2>
                            <p className='fs_16 fw_400'>We send you the article to review. If you need changes or want to add more details, no problem!
                                We'll keep revising until you're happy.</p>
                        </div>
                    </div>
                    <div class="inner right">
                        <div class="content">
                            <h2 className='fs_24 fw_700'>Polishing It Up</h2>
                            <p className='fs_16 fw_400'>We make sure everything is perfect. We fix sentences, grammar, and any small mistakes.</p>
                        </div>
                    </div>
                    <div class="inner left">
                        <div class="content">
                            <h2 className='fs_24 fw_700'>Ready for You</h2>
                            <p className='fs_16 fw_400'>Once it's all set, we send you the final article. We wait for your thumbs up. After you approve, it gets published where you want it. Easy!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container py-5'>
                <div className="row">
                    <div className="col-md-6">
                        <h2 className='fs_32 fw_700'>Are You Tired Of Your Website's Stale Content? Let Us Freshen It Up And Make It More User-Friendly For Your Visitors</h2>
                        <div className='d-flex mb-3 gap-2 align-items-center'>
                            <button onClick={scrollToTop} className='border-0 btn bg__orange text__black rounded-pill fs_16 fw_600'>Request a Free Proposal</button>
                            <NavLink to="tel:1-216-777-2526" className='border-0 btn bg__orange text__black rounded-pill fs_16 fw_600'>+1-216-777-2526</NavLink>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src={diss} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArticleWriting
