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

const BookCover = () => {

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
                            ELEVATE YOUR BOOK WITH STUNNING COVERS</h1>
                            <h5 className='fs_20 fw_400 text-white'>We all know you can't always judge a book by its cover, but a captivating cover can work wonders! At Amazon Publisher Pros, we turn your manuscript into a potential bestseller with our fantastic book cover design services.</h5>
                            <h5 className='fs_20 fw_400 text-white'>We transform your vision into a visually appealing reality, ensuring your book stands out and draws in more readers, ultimately leading to greater success. Trust us to make your investment in a book cover design worthwhile.</h5>
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
                                <BannerForm PageNameTracking={'[Book Cover Page Banner Form]'} />
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
                            <h6 className='fs_32 fw_700'>Make Your Cover Stand Out!</h6>
                            <p className='fs_16 fw_400'>Our talented designers focus on creating eye-catching book covers that tell your story and grab readers' attention. At Savvy Book Marketing.com, our dedicated team ensures your book's cover design instantly attracts potential readers.</p>
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
                        <div className="col-md-5 d-flex justify-content-end">
                            <img src={dis} alt="" className='img-fluid' />
                        </div>
                        <div className="col-md-7">
                            <h2 className='fw_600 mb-3 fs_32'>Need A Stunning Book Cover? Get In Touch With Professional Designers!</h2>
                            <h6 className='fw_600 mb-3 fs_20'>Are you searching for eye-catching book covers?</h6>
                            <h6 className='fw_300 mb-3 fs_20'>Get started today and enjoy up to 50% off on all our packages.</h6>
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
                        <div className="col-md-4">
                            <div className="card mb-lg-0 mb-3 box__shadow bg-transparent border-0">
                                <div className="card-body text-center">
                                    <img src={writer} alt="" className='img-fluid' />
                                    <h4 className='fw_700 fs_20'>Our Approach</h4>
                                    <h6 className='fs_16 fw_400'>We create beautiful book covers just for you! Our experts work closely with you, keeping you in the loop and asking for your input throughout the process. Each cover is unique, perfectly capturing the essence of your book.</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-lg-0 mb-3 box__shadow bg-transparent border-0 ">
                                <div className="card-body text-center">
                                    <img src={refund} alt="" className='img-fluid' />
                                    <h4 className='fw_700 fs_20'>Affordable Packages</h4>
                                    <h6 className='fs_16 fw_400'>Looking for top-notch book cover designs that won't break the bank? You're in the right place! We offer high-quality services at prices you can afford. Book Writing Experts Company is your go-to solution for budget-friendly designs.</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-lg-0 mb-3 box__shadow bg-transparent border-0 ">
                                <div className="card-body text-center">
                                    <img src={customer} alt="" className='img-fluid' />
                                    <h4 className='fw_700 fs_20'>Customer-Focused</h4>
                                    <h6 className='fs_16 fw_400'>Your satisfaction is our priority. We're dedicated to providing the best customer service every day. If you're not happy with your book cover, we'll make sure to create one that meets your expectations. Your happiness is what drives us!</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="timeline-section pt-3">
                <h2 className="text-center fs_32 mb-3 text-white fw_700">OUR PROCESS</h2>
                <div class="timeline pb-lg-3">
                    <div class="inner left">
                        <div class="content">
                            <h2 className='fs_24 fw_700'>Submit Your Manuscript</h2>
                            <p className='fs_16 fw_400'>Send us your manuscript file along with any specific ideas you have for your book cover. Even though they say not to judge a book by its cover, a compelling design truly captivates readers and boosts marketing.</p>
                        </div>
                    </div>
                    <div class="inner right">
                        <div class="content">
                            <h2 className='fs_24 fw_700'>Explore Cover Options</h2>
                            <p className='fs_16 fw_400'>Our experts carefully analyze your book's genre and target audience. We present you with a variety of cover samples as references, ensuring the design aligns perfectly with your vision.</p>
                        </div>
                    </div>
                    <div class="inner left">
                        <div class="content">
                            <h2 className='fs_24 fw_700'>Custom Design Process</h2>
                            <p className='fs_16 fw_400'>Our talented designers craft a unique and stylish cover tailored to your needs. Whether it's for print or an e-book, we consider all the essential elements, including front and back cover copy, graphics, and logos, to create an eye-catching design.</p>
                        </div>
                    </div>
                    <div class="inner right">
                        <div class="content">
                            <h2 className='fs_24 fw_700'>Your Approval Matters</h2>
                            <p className='fs_16 fw_400'>We value your input. Once the design is ready, we'll share it with you for approval. If any changes are needed, we'll gladly make them until you are completely satisfied.</p>
                        </div>
                    </div>
                    <div class="inner left">
                        <div class="content">
                            <h2 className='fs_24 fw_700'>Finalizing Your Book Cover</h2>
                            <p className='fs_16 fw_400'>Once you give your approval, the cover becomes an integral part of your book. It's finalized and prepared for the next exciting step: publishing your book.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container py-5'>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <p className='fs_16 fw_400'>Struggling to create an attractive book cover? We've got you covered. Amazon Publisher Pros offer creative ideas to make your book stand out.</p>
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

export default BookCover
