import React, { useState, useEffect, useRef } from 'react'
import { NavItem, NavLink as TabLink, TabContent, TabPane } from "react-bootstrap";
import bookbanner from '../asset/images/newbooks-20220506-qe1r71c2aiab828hnjgabbx2e61bizj22vjp1kcn0w.jpg'
import Counter1 from '../asset/images/counter/01-Tea-Coffee.png'
import Counter2 from '../asset/images/counter/02-years-of-exp.png'
import Counter3 from '../asset/images/counter/03-hours-on-project.png'
import Counter4 from '../asset/images/counter/04-national-projects.png'
import Counter5 from '../asset/images/counter/05-professional-services.png'
import brands from '../asset/images/trusted.png'
import client from '../asset/images/1ameli.jpg'
import book from '../asset/images/book.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Slider from '../components/Slider'
import Nav from 'react-bootstrap/Nav';
import Tabdata from '../components/Tabdata'
import t1 from '../asset/images/image-0-0-e1697720523664.jpg'
import t2 from '../asset/images/tab-1.jpg'
import t3 from '../asset/images/tab-2.png'
import Accordion from 'react-bootstrap/Accordion';
import { FaCheckDouble } from 'react-icons/fa'
import { ContactForm, BannerForm } from '../components/Mail';
import { NavLink } from 'react-router-dom';
import Header from '../layout/Header';
import MetaTitleDesc from '../MetaTitleDesc';
import partner1 from '../asset/images/partner/1.png';
import partner2 from '../asset/images/partner/2.png';
import partner3 from '../asset/images/partner/3.png';
import partner4 from '../asset/images/partner/4.png';
import partner5 from '../asset/images/partner/5.png';
import partner6 from '../asset/images/partner/6.png';

const Home = () => {

  const [count, setCount] = useState(0);

  const topSectionRef = useRef(null);

  const scrollToTop = () => {
    if (topSectionRef.current) {
      topSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error("Element with ID 'scroll-to-top' not found");
    }
  };

  const tabs = [
    {
      id: 1,
      title: (<>BOOK<br />WRITING</>),
      content: <Tabdata scrollToTop={scrollToTop} TabDes={"Whether you're a seasoned author or just starting, our team of experts will polish your manuscript, fix errors, and provide valuable feedback. We have specialists in various genres to help you become a successful author."} TabImg={t1} />,
    },
    {
      id: 4,
      title: (<>BOOK<br />EDITING</>),
      content: <Tabdata scrollToTop={scrollToTop} TabDes={"No matter your level of experience, every writer needs professional editing. Our editors ensure your manuscript is error-free and ready for publication. We also have genre-specific experts who can provide constructive feedback."} TabImg={t2} />,
    },
    {
      id: 5,
      title: (<>BOOK<br />PUBLISHING</>),
      content: <Tabdata scrollToTop={scrollToTop} TabDes={"Don't worry if you're new to this. We guide you through the publishing process, making sure your manuscript is error-free and ready to publish. Our genre- specific experts will help you improve your work."} TabImg={t3} />,
    },
    {
      id: 2,
      title: (<>BOOK<br />MARKETING</>),
      content: <Tabdata scrollToTop={scrollToTop} TabDes={"We offer expert assistance in marketing your book. Our team will assess your work, identify areas for improvement, and provide you with feedback to help you succeed."} TabImg={t3} />,
    },
    {
      id: 6,
      title: (<>AMAZON<br />PUBLISHING</>),
      content: <Tabdata scrollToTop={scrollToTop} TabDes={"If you've always dreamed of writing a book but don't know where to start, we're here for you. Amazon Publisher Pros is a top platform for self-publishing authors. We handle everything from writing and design to publishing and distribution, making it easier than ever for you to become a successful author."} TabImg={t2} />,
    },


  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  useEffect(() => {
    const elements = document.querySelectorAll('.count');

    elements.forEach(element => {
      const targetCount = parseInt(element.innerText, 10);

      let start = 0;
      const step = () => {
        const increment = Math.ceil((targetCount - start) / 50);
        start += increment;

        element.innerText = start;

        if (start < targetCount) {
          requestAnimationFrame(step);
        }
      };

      step();
    });
  }, [count]);

  const openLiveChat = () => {
    window.LC_API.open_chat_window();
  }

  return (
    <>
      <MetaTitleDesc />
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
              <h3 className='text__shadow fs_23 fw_700 text-white'>BECOME A <span className='text__orange'>BEST-SELLING AUTHOR</span> <br />
                WITH AMAZON PUBLISHER PROS!</h3>
              <h1 className='text__shadow fs_40 text-white fw_700'> <span className='text__orange'>AWARD-WINNING</span> <br />AMAZON PUBLISHING <span className='text__orange'>SERVICES</span></h1>
              <h5 className='fs_21 fw_400 text-white'>Eager to share your story with the<br />
                world? Look no further. Amazon Publisher<br />
                Pros has all your author needs covered,<br />
                offering services like:</h5>
              <ul className='list-unstyled ps-3'>
                <li className='fs_15 fw_400 text__green'><FaCheckDouble className='fs_20 text-white' /> Writing your book</li>
                <li className='fs_15 fw_400 text__green'><FaCheckDouble className='fs_20 text-white' /> Editing and formatting</li>
                <li className='fs_15 fw_400 text__green'><FaCheckDouble className='fs_20 text-white' /> Ghostwriting</li>
                <li className='fs_15 fw_400 text__green'><FaCheckDouble className='fs_20 text-white' /> Publishing your book</li>
                <li className='fs_15 fw_400 text__green'><FaCheckDouble className='fs_20 text-white' /> Marketing your book</li>
                <li className='fs_15 fw_400 text__green'><FaCheckDouble className='fs_20 text-white' /> Creating eye-catching book covers</li>
              </ul>
              <p className='fs_16 fw_400 text-white'>Plus, we can help you generate a steady, dependable income from your writing.
                Let's make your author dreams a reality!</p>
              <div className="d-flex justify-content-lg-start justify-content-center gap-2">
                <button onClick={scrollToTop} className='btn border-0 bg__orange text__black rounded-pill fs_18 fw_600'>START PROJECT</button>
                <NavLink to="tel:1-216-777-2526" className='btn border-0 bg__orange text__black rounded-pill fs_18 fw_600'>CALL NOW</NavLink>
              </div>
              <div className='pt-4 pb-4'>
                <img src={brands} className='img-fluid' alt="trusted brand" />
              </div>
            </div>
            <div className="col-26"></div>
            <div className="col-28">
              <div className="form pt-4" ref={topSectionRef}>
                <h2 className='text-center text-white pb-4 fw-bold'>Let's Get <br /> Started!</h2>
                <BannerForm PageNameTracking={'[Home Page Banner Form]'} />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="our-partner py-3">
        <div className="px-5">
          <Swiper
            spaceBetween={0}
            grabCursor={true}
            slidesPerView={6}
          >
            <SwiperSlide><img src={partner1} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={partner2} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={partner3} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={partner4} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={partner5} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={partner6} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={partner1} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={partner2} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={partner3} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={partner4} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={partner5} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={partner6} className='img-fluid' alt="" /></SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="we-offer py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <h2 className='fs_36 lh_1 d-none d-lg-block text-start px-5 fw_700 text__black mx-5'>Elevate Your Brand With <span className='text__orange'>Amazon Publisher Pros</span>
                <br />Book Publishing</h2>
              <h2 className='fs_36 d-block d-lg-none lh_1 text-center fw_700 text__black '>Elevate Your Brand With <span className='text__orange'>Amazon Publisher Pros</span>
                <br />Book Publishing</h2>
              <img src={bookbanner} alt="" className='img-fluid mb-lg-0 mb-3' />
            </div>
            <div className="col-md-6">
              <h2 class="fs_30 fw_700 text__black text-lg-start text-center">Want to <span className="text__orange"> boost</span> your brand?</h2>
              <p className='fs_16 fw_400 text__black'>Our book publishing service is here to make it simple for you. Writing a book is a powerful way to transform your life and career. At Amazon Publisher Pros, we help turn your ideas into a book, guiding you from start to finish.</p>
              <p className='fs_16 fw_400 text__black'>Here's what we offer:</p>
              <ul className="list-unstyled ps-3">
                <li className='fs_16 fw_400 list__green'><FaCheckDouble className='fs_20 text__black' /> A custom book, written just for you.
                </li>
                <li className='fs_16 fw_500 list__green'><FaCheckDouble className='fs_20 text__black' /> A beautifully designed print-ready book.
                </li>
                <li className='fs_16 fw_500 list__green'><FaCheckDouble className='fs_20 text__black' /> An ISBN number for publishing and selling.
                </li>
                <li className='fs_16 fw_500 list__green'><FaCheckDouble className='fs_20 text__black' /> The option to print or promote your book online.
                </li>
                <li className="fs_16 fw_500 list__green"><FaCheckDouble className='fs_20 text__black' /> Your book featured on Amazon Kindle and Apple iBookstore.
                </li>
                <li className="fs_16 fw_500 list__green"><FaCheckDouble className='fs_20 text__black' /> Exceptional service and support throughout the process.
                </li>
                <li className="fs_16 fw_500 list__green"><FaCheckDouble className='fs_20 text__black' /> The chance to build fame, authority, and advance your career.
                </li>
              </ul>
              <p className='fs_16 fw_400 text__black'>Ready to take the next step in your brand growth? Choose Amazon Publisher Pros for your book publishing needs!</p>
              <div className="text-lg-start text-center">
                <button onClick={scrollToTop} className='btn bg__orange border-0 d-inline text__black rounded-pill fs_18 fw_600'>START PROJECT</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-section py-5">
        <div className="container">
          <div className="text-center">
            <h1 className='pt-3 fs_45 fw_600 text__yellow'>Your Voice, Your Words – Let's Publish It!</h1>
            <h3 className='pt-3 fs_20 fw_400 text-white'>Transform Your Passionate Dreams into Published Pages Today.</h3>
            <h3 className='pt-3 pb-3 fs_20 fw_600 text-white'>Call Us +1-216-777-2526</h3>
            <button onClick={scrollToTop} className='btn bg__orange border-0 d-inline text__black rounded-pill fs_18 fw_600'>Get Started</button>
          </div>
        </div>
      </div>

      <div className='bookslider py-5'>
        <div className="container">
          <div className="text-center">
            <h2 className='fs_36 fw_700 text__orange'>Explore Our Work</h2>
            <p className='fs_16 px_150 d-none d-lg-block fw_600'>We've completed lots of different projects, from small to big. Our clients include regular folks, <br />  experts,
              and businesses of all sizes. Here are some books we've helped create for our clients</p>
            <p className='fs_16 d-lg-none d-block fw_600'>We've completed lots of different projects, from small to big. Our clients include regular folks, experts,
              and businesses of all sizes. Here are some books we've helped create for our clients</p>
            <h3 className='fs_30 fw_700'>YOUR BOOK, YOUR SUCCESS</h3>
            {/* <div className="container p-90"> */}
            <Slider />
            {/* </div> */}
            <h3 className='fs_35 pt-3 fw_700'>Get in touch with us to start your project today!</h3>
            <p className='fs_16 fw_600'>We've turned over 300 writers' dreams into reality.</p>
            <div className="d-flex justify-content-center gap-2">
              <button onClick={scrollToTop} className='btn border-0 bg__orange text__black rounded-pill fs_18 fw_600'>START PROJECT</button>
              <NavLink to="tel:1-216-777-2526" className='btn border-0 bg__black text-white rounded-pill fs_18 fw_600'>CALL NOW</NavLink>
            </div>
          </div>
        </div>
      </div>

      <section className='service-section'>
        <div class="background-overlay"></div>
        <div className="position-relative">
          <div className="container">
            <div className="row pt-5">
              <h1 className='fs_44 fw_700 text-white text-center'>Welcome to <span className='text__orange'>Amazon Publisher Pros</span> <br />
                Your One-Stop Solution for Your Book Needs</h1>
              <p className='text-center text-white'>At Amazon Publisher Pros, we’ve got you covered with a variety of services tailored just for you:</p>
              <Nav className="justify-content-lg-center">
                {tabs.map((tab) => (
                  <NavItem key={tab.id}>
                    <TabLink
                      active={activeTab === tab.id}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <button>
                        {tab.title}
                      </button>
                    </TabLink>
                  </NavItem>
                ))}
              </Nav>
              <TabContent activeTab={activeTab}>
                {tabs.map((tab) => (
                  <TabPane key={tab.id} tabId={tab.id} className={`${activeTab === tab.id ? 'active opacity-100' : ''} `}>
                    {tab.content}
                  </TabPane>
                ))}
              </TabContent>
            </div>
          </div>
        </div>
      </section>

      <div className='counter'>
        <div className="container p-0" style={{ maxWidth: '900px' }}>
          <div className="row">
            <div className="box d-flex flex-column justify-content-center align-items-center text-center">
              <img src={Counter1} alt="" />
              <h5 className='fs_60 fw_600 text__dark_green count'> 1982</h5>
              <span className='fs_15 fw_600 text__dark_green'>cups of coffee & tea</span>
            </div>
            <div className="box d-flex flex-column justify-content-center align-items-center text-center ">
              <img src={Counter2} alt="" />
              <h5 className='fs_60 fw_600 text__dark_green count'>7</h5>
              <span className='fs_15 fw_600 text__dark_green'>Years of experience​</span>
              <div style={{ height: '48px' }}></div>
            </div>
            <div className="box d-flex flex-column justify-content-center align-items-center text-center ">
              <img src={Counter3} alt="" />
              <h5 className='fs_60 fw_600 text__dark_green count'>21</h5>
              <span className='fs_15 fw_600 text__dark_green'>Hours on project​</span>
              <div style={{ height: '21px' }}></div>
            </div>
            <div className="box d-flex flex-column justify-content-center align-items-center text-center ">
              <img src={Counter4} alt="" />
              <h5 className='fs_60 fw_600 text__dark_green count'>121</h5>
              <span className='fs_15 fw_600 text__dark_green'>National Project​</span>
              <div style={{ height: '10px' }}></div>
            </div>
            <div className="box d-flex flex-column justify-content-center align-items-center text-center ">
              <img src={Counter5} alt="" />
              <h5 className='fs_60 fw_600 text__dark_green count'>1982</h5>
              <span className='fs_15 fw_600 text__dark_green'>Professional Services​</span>
              <div style={{ height: '15px' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className='client-section'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img src={client} className='img-fluid' alt="" />
            </div>
            <div className="col-md-6">
              <h4 className='f_25 fw_600 text-white'>Amelia</h4>
              <h6 className='f_16 pt-3 fw_600 text-white'>Marketing Manager</h6>
              <p className='f_16 pt-3 fw_500 text-white'>Hi, I’m Amelia, the Marketing Manager at Amazon Publisher Pros. Whether you’re a famous writer or just getting started, we have experts who can review your book. Our editors make sure your manuscript is perfect, and we have specialists for different types of books.
                They’ll check your work, give you helpful advice, and help you become a better writer.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='book-publish py-5'>
        <div className="container">
          <div className="text-center">
            <h1 className='fs_44 fw_700 text__black'>Get Your Book Out There with <br />
              <span className='text__orange'> Amazon Publisher Pros</span></h1>
            <p className='fs_16 px_150 d-lg-block d-none fw_300 text__black'>Are you thinking about writing a book? We’re here to make it easy for you. Amazon <br /> Publisher
              Pros has a simple and effective process to help you
              create and publish your <br /> book. Here’s how it works:</p>
            <p className='fs_16 d-lg-none d-block fw_300 text__black'>Are you thinking about writing a book? We’re here to make it easy for you. Amazon Publisher
              Pros has a simple and effective process to help you
              create and publish your book. Here’s how it works:</p>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-25"></div>
            <div className="col-25">
              <ul className='list-unstyled'>
                <li className='fs_15 fw_600 list__green'><FaCheckDouble className='fs_20 text__black' /> You tell us what you want your book to be about.</li>
                <li className='fs_15 fw_600 list__green'><FaCheckDouble className='fs_20 text__black' /> We write a custom book just for you.</li>
                <li className='fs_15 fw_600 list__green'><FaCheckDouble className='fs_20 text__black' /> You get a professionally designed book ready for printing.</li>
                <li className='fs_15 fw_600 list__green'><FaCheckDouble className='fs_20 text__black' /> We give you an ISBN number to help with publishing and  sales</li>
                <li className='fs_15 fw_600 list__green'><FaCheckDouble className='fs_20 text__black' /> You can choose to print your book or promote it online.</li>
                <li className='fs_15 fw_600 list__green'><FaCheckDouble className='fs_20 text__black' /> Your book will be featured on Amazon Kindle and Apple iBookstore.</li>
                <li className='fs_15 fw_600 list__green'><FaCheckDouble className='fs_20 text__black' /> We provide exceptional service and support throughout the project.</li>
                <li className='fs_15 fw_600 list__green'><FaCheckDouble className='fs_20 text__black' /> This is your chance to gain recognition, authority, and boost your career.</li>
              </ul>
            </div>
            <div className="col-25">
              <div className="text-center">
                <img src={book} alt="" className='img-fluid' />
              </div>
            </div>
            <div className="col-25"></div>
          </div>
          <p className='fs_16 fw_300 text__black text-center pt-2'>Don't wait any longer – let's get started on your book today!</p>
          <div className='d-flex justify-content-center'>
            <button onClick={openLiveChat} className='btn border-0 bg__orange text__black rounded-pill fs_18 fw_600'>CHAT NOW</button>
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
                        <button onClick={openLiveChat} style={{ padding: '12px 24px' }} className='btn border-0 bg__black text-white rounded-pill fs_25 fw_600'>Contact Us</button>
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
              <h5 className='fs_20 fw_600 text-center text__orange mb-5'>Simply Fill Out the Form Below</h5>
              <ContactForm PageNameTracking={'Home Page Contact Form'} />
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

export default Home
