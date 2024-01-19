import React from 'react'
import Logo from "../asset/images/amazonpub_DB.png"
import google from '../asset/images/google.png'
import scribe from '../asset/images/scribd.png'
import kobo from '../asset/images/kobo.png'
import ibook from '../asset/images/ibook.png'
import hathee from '../asset/images/hatchee.png'
import { NavLink } from "react-router-dom";
import { FaChevronRight } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <footer class="text-lg-start bg-body-tertiary text-muted">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                            <h3 className='fs_40 fw_600 text-white'>Want to Collaborate?</h3>
                            <p className='fs_16 fw_400 text-white'>We're up for a challenge! Let's team up to create amazing content.</p>
                            <p className='fs_16 fw_400 text-white'>Have a book idea, but not sure where to start? We’ve got your back. Amazon Publisher Pros is a top choice for self-published authors. We handle everything from writing and designing to publishing and distribution. Becoming a successful author is now simpler than ever!</p>
                        </div>
                        <div className="col-md-5 text-center">
                            <NavLink to="/contact" className='btn bg__orange text__black fs_17 fw_600 rounded-pill p_2_4'>Contact Us <FaChevronRight /></NavLink>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="container text-md-start pt-5">
                        <div class="row mt-3">
                            <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
                                <img src={Logo} alt="" className="mb-4 img-fluid" />
                                <p className='fs_16 fw_300 text-white'>
                                    Got a book inside you but not sure how to make it happen? We’re here to help. Amazon Publisher Pros is one of the most successful platforms for self-publishing authors. From writing, designing, publishing to distribution – we take care of everything. Becoming an accomplished author has never been easier!
                                </p>
                                <div className='d-flex'>
                                    <img style={{ height: "32px", width: "78px" }} src={google} className='img-fluid' />
                                    <img style={{ height: "32px", width: "78px" }} src={scribe} className='img-fluid' />
                                    <img style={{ height: "32px", width: "78px" }} src={kobo} className='img-fluid' />
                                    <img style={{ height: "32px", width: "78px" }} src={ibook} className='img-fluid' />
                                    <img style={{ height: "32px", width: "78px" }} src={hathee} className='img-fluid' />
                                </div>
                            </div>
                            <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4 pt-md-5">
                                <h6 class="text-uppercase fw_600 text-white fs_25 mb-4">
                                    About Us
                                </h6>
                                <ul className="list-unstyled">
                                    <li><NavLink className='fs_16 fw_50 text-white' to="/">Home</NavLink></li>
                                    <li><NavLink className='fs_16 fw_50 text-white' to="/">About Us</NavLink></li>
                                    <li><NavLink className='fs_16 fw_50 text-white' to="#">Our Services</NavLink></li>
                                    <li><NavLink className='fs_16 fw_50 text-white' to="/portfolio">Our Portfolio</NavLink></li>
                                    <li><NavLink className='fs_16 fw_50 text-white' to="/testimonial">Client Testimonial</NavLink></li>
                                    <li><NavLink className='fs_16 fw_50 text-white' to="/contact">Contact Us</NavLink></li>
                                    <li><NavLink className='fs_16 fw_50 text-white' to="/publishing">Amazon Publishing</NavLink></li>
                                </ul>
                            </div>
                            <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4 pt-md-5">
                                <h6 class="text-uppercase fw_600 text-white fs_25 mb-4">
                                    Company
                                </h6>
                                <p className='fs_16 fw_50 text-white'>
                                    Head Office:<br />
                                    2 Shannon Dr, Woodbury, New York 11797</p>
                                <p className='fs_16 fw_50 text-white'>
                                    Mailing Address:<br />
                                    4 New Hyde Park Franklin Square New York</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center p-4 fs_16 fw_50 text-white">
                    © 2024 – Amazon Publisher Pros | All right reserved.
                </div>
            </footer>
        </>
    )
}

export default Footer
