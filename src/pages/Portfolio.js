import React, {useRef} from 'react'
import Slider from '../components/Slider'
import Accordion from 'react-bootstrap/Accordion';
import book from '../asset/images/book.jpg'
import Header from '../layout/Header';
import { FaCheckDouble } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import brands from '../asset/images/trusted.png'
import { BannerForm, ContactForm } from '../components/Mail';
import MetaTitleDesc from '../MetaTitleDesc';

const Portfolio = () => {

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
                            <h3 className='text__shadow fs_23 fw_700 text-white'>OUR WORK</h3>
                            <h1 className='text__shadow fs_40 text-white fw_700'> CHECKOUT OUR <span className='text__orange'> PORTFOLIO</span> </h1>
                            <h5 className='fs_21 fw_400 text-white'>We have successfully completed many projects of varying scope and magnitudes. Our clients range from working professionals, and industry experts to small and large scale corporations. Below are a few books that we have written and published for our clients:</h5>
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
                                <BannerForm PageNameTracking={'[Portfolio Page Banner Form]'} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className='bookslider py-5'>
                <div className="container">
                    <div className="text-center">
                        <h2 className='fs_36 fw_700 text__orange'>Explore Our Work</h2>
                        <p className='fs_16 px_150 fw_600'>We've completed lots of different projects, from small to big. Our clients include regular folks,<br /> experts,
                            and businesses of all sizes. Here are some books we've helped create for our clients</p>
                        <h3 className='fs_30 fw_700'>YOUR BOOK, YOUR SUCCESS</h3>
                        {/* <div className="container p-90"> */}
                        <Slider />
                        {/* </div> */}
                        <h3 className='fs_20 pt-3 fw_700'>Get in touch with us to start your project today!</h3>
                        <p className='fs_16 fw_600'>We've turned over 300 writers' dreams into reality.</p>
                        <div className="d-flex justify-content-center gap-2">
                            <button onClick={scrollToTop} className='btn border-0 bg__orange text__black rounded-pill fs_18 fw_600'>START PROJECT</button>
                            <NavLink to="tel:1-216-777-2526" className='btn border-0 bg__black text-white rounded-pill fs_18 fw_600'>CALL NOW</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className='contactbanner z-3 position-relative'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-11">
                            <div className="card">
                                <div className="card-body p-0">
                                    <div className="p_66_40">
                                        <div className="row align-items-center">
                                            <div className="col-md-5">
                                                <h2 className='fs_45 fw_600 text__shadow text-white'>Interested in Collaboration?</h2>
                                                <p className='fs_17 fw_300 text-white'>Challenge us. We want to work with you to create the really cool stuff.</p>
                                            </div>
                                            <div className="col-md-1"></div>
                                            <div className="col-md-6 d-flex justify-content-center">
                                                <button onClick={openLiveChat} style={{padding:'12px 24px'}} className='btn border-0 bg__black text-white rounded-pill fs_25 fw_600'>Contact Us</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='contact-section py-5'>
                <div class="background-overlay"></div>
                <div className="position-relative">
                    <div className="container">
                        <div className="row">
                            <h1 className='p-145 fs_40 fw_600 text-center text-white'>Invest in Your Book Dreams with <br />
                                <span className='text__orange'>Amazon Publisher Pros</span></h1>
                            <p className='fs_15 fw_300 text-center text-white'>Get Your Book Written and Published Fast!</p>
                            <p className='fs_15 fw_300 text-center text-white'>Contact Us: +1-216-777-2526</p> <br />
                            <h5 className='fs_20 fw_600 text-center text__orange mb-4'>Simply Fill Out the Form Below</h5>
                            <ContactForm PageNameTracking={'Portfolio Page Contact Form'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='faq-section py-5'>
                <div className="container acc">
                    <div className="row justify-content-center">
                        <h1 className='text-center fw_700 fs_44'>Frequently Asked Question</h1>
                        <p className='text-center fs_15 fw_400'>Before contacting us you might want to check whether your question is one of our frequently asked questions.</p>
                        <div className="col-md-8">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0" className='rounded-0'>
                                    <Accordion.Header>Q. Does the author keep the film/movie rights for her/his book?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes, the author has holds 100% film rights for her/his work. But you must notify us the detailed good news to spread socially. That is it. No commission.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Q. What will be the printing cost of the book?</Accordion.Header>
                                    <Accordion.Body>
                                        The printing cost of the book depends on the following factors.
                                        Page quality
                                        Content color
                                        Number of pages
                                        Binding type
                                        Number of copies ordered
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Q. How is the royalty calculated?</Accordion.Header>
                                    <Accordion.Body>
                                        What will be the author’s share when books will be sold?
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Q. Who will hold the copyright?</Accordion.Header>
                                    <Accordion.Body>
                                        The author will hold the copyrights in all cases.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='rounded-0'>
                                    <Accordion.Header>Q. How long will it take to get the book published?</Accordion.Header>
                                    <Accordion.Body>
                                        In approximately 7 to 14 days, from the time we have the computer typed manuscript, your written (or email) approval for print and the verified payment with us. However, some of the distribution channels may take longer time, but the book will be available in our store within time, with guarantee.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Portfolio
