import React, {useRef} from 'react'
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

const BookPromotion = () => {

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
                                STAND OUT WITH
                                <span className='text__orange'> AMAZON PUBLISHER PROS!</span></h1>
                            <h5 className='fs_21 fw_400 text-white'>We'll Help Your Book Go the Extra Mile</h5>
                            <h5 className='fs_21 fw_400 text-white'>Discover Your Ideal Readers with Our Help!</h5>
                            <h5 className='fs_21 fw_400 text-white'>Do you have an amazing book but struggle to publish it? Let our team of digital marketing experts make the book promotion process smooth and speedy for you.</h5>
                            <h5 className='fs_21 fw_400 text-white'>Write down your Name, Email, and Phone Number to Contact our team.</h5>
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
                                <BannerForm PageNameTracking={'[Book Promotion Page Banner Form]'} />
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
                            <h6 className='fs_32 fw_700'>BOOST YOUR BOOK'S VISIBILITY WITH AMAZON PUBLISHER PROS!</h6>
                            <p className='fs_16 fw_400'>At Amazon Publisher Pros, we make it easy for you to get noticed. Our book promotion services are designed to help authors stand out from the crowd. With our global advertising and marketing approach, we're here to assist you in reaching your target audience, no matter where they are in the world.</p>
                            <p className='fs_16 fw_400'>Using the power of the internet, we create custom advertisements to pique the interest of potential readers and encourage them to buy your book. Our team of book marketing experts is dedicated to maximizing your book's earning potential from the moment it's launched.</p>
                            <p className='fs_16 fw_400'>Relax and leave your marketing and publishing needs to Amazon Publisher Pros. We're committed to increasing the visibility of your book with our proven global marketing strategies. Let us help your book shine!</p>
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
                        <div className="col-md-6 d-flex justify-content-end">
                            <img src={dis} alt="" className='img-fluid' />
                        </div>
                        <div className="col-md-6">
                            <h2 className='fw_600 mb-3 fs_32'>Ready To Let The Pros Boost Your Book Sales?</h2>
                            <h6 className='fw_600 mb-3 fs_20'>Tired of waiting for readers to discover your book?</h6>
                            <h6 className='fw_600 mb-3 fs_18'>Get started today and enjoy up to 50% off on all our packages.</h6>
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
                        <h2 className='text-center fw_700 fs_36'> Our Approach</h2>
                        <div className="col-md-4">
                            <div className="card mb-lg-0 mb-3 box__shadow bg-transparent border-0">
                                <div className="card-body text-center">
                                    <img src={writer} alt="" className='img-fluid' />
                                    <h4 className='fw_700 fs_20'>Creative Promotion Experts</h4>
                                    <h6 className='fs_16 fw_400'>Our team of marketing experts at Amazon Publisher Pros specializes in creative promotion. We're skilled at attracting audiences with innovative marketing strategies, all aimed at getting your target readers to enjoy your book. It's that simple!</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-lg-0 mb-3 box__shadow bg-transparent border-0 ">
                                <div className="card-body text-center">
                                    <img src={refund} alt="" className='img-fluid' />
                                    <h4 className='fw_700 fs_20'>We Know When and Who</h4>
                                    <h6 className='fs_16 fw_400'>Our professionals are dedicated to supporting the writers they represent. We work on building a strong, long-term presence for you in the media and position you as an industry expert. We promise to promote you effectively!</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-lg-0 mb-3 box__shadow bg-transparent border-0 ">
                                <div className="card-body text-center">
                                    <img src={customer} alt="" className='img-fluid' />
                                    <h4 className='fw_700 fs_20'>Personalized Services</h4>
                                    <h6 className='fs_16 fw_400'>Amazon Publisher Pros offers personalized services with our experienced and award-winning staff. We'll help you gather reviews and promote your book, regardless of its size or genre. Every book campaign gets our full attention, and we value each and every client.</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="timeline-section pt-3">
                <h2 className="text-center fs_32 mb-3 text-white fw_700">OUR GHOSTWRITING PROCESS IN SIMPLE STEPS</h2>
                <div class="timeline">
                    <div class="inner left">
                        <div class="content">
                            <h2 className='fs_24 fw_700'>Research</h2>
                            <p className='fs_16 fw_400'>Our ghostwriting team conducts thorough research to gather all the necessary information.</p>
                        </div>
                    </div>
                    <div class="inner right">
                        <div class="content">
                            <h2 className='fs_24 fw_700'>Outline</h2>
                            <p className='fs_16 fw_400'>We create an outline based on your ideas and seek your approval before moving forward.</p>
                        </div>
                    </div>
                    <div class="inner left">
                        <div class="content">
                            <h2 className='fs_24 fw_700'>Writing</h2>
                            <p className='fs_16 fw_400'>Once the outline is approved, we start writing your content accordingly.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container py-5'>
                <div className="row">
                    <div className="col-md-6">
                        <h2 className='fs_32 fw_700'>Want To Boost Your Book's Popularity?</h2>
                        <p className='fs_16 fw_400'>Consider getting help from book marketing pros. Your story should reach a wide audience, and it's important to avoid unreliable agencies that could harm your book's reputation. Trust the experts and avoid taking risks!</p>
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

export default BookPromotion
