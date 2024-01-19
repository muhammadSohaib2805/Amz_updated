import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from "react-toastify";
import { NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const BannerForm = ({ PageNameTracking }) => {
    const dataSend = useRef({
        user_name: '',
        user_email: '',
        PageNameTracking: PageNameTracking,
        user_phone_number: '',
        user_message: '',
    });

    const { user_name, user_email, user_phone_number, user_message } = dataSend;

    const sendEmail = async (e) => {

        e.preventDefault();

        if (user_name !== '' && user_email !== '' && user_phone_number !== '' && user_message !== '') {
            emailjs.sendForm('service_p01o9m9', 'template_1ha4d58', dataSend.current, '9jbiWdhyoiQfZPX42')
                .then((result) => {
                    toast.success('Email Sent Successfully!');
                }, (error) => {
                    toast.error('Temporary Closed');
                });
        } else {
            toast.error('All fields are mandatory');
        }
        e.target.reset()

    };

    return (
        <>
            <Form onSubmit={sendEmail} ref={dataSend}>
                <Form.Group className="mb-4">
                    <Form.Control type="text" placeholder="Enter Your Name" name='user_name' required />
                </Form.Group>
                <input name="PageNameTracking" value={"[Banner Form Home Page]"} hidden type='text' />
                <Form.Group className="mb-4">
                    <Form.Control type="email" placeholder="Enter Your Email" name='user_email' required />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Control type="number" placeholder="Enter Your Mobile Number" name='user_phone_number' required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control as="textarea" rows={7} placeholder='Enter Your Message' type='text' name='user_message' required />
                </Form.Group>
                <button className='w-100 btn bg__orange text__black rounded-pill fs_16 fw_500' type='submit'>Start project</button>
            </Form>
        </>
    )
}

const ContactForm = ({ PageNameTracking }) => {
    const dataSend = useRef({
        user_name: '',
        user_email: '',
        PageNameTracking: PageNameTracking,
        user_phone_number: '',
        user_message: '',
    });

    const { user_name, user_email, user_phone_number, user_message } = dataSend;

    const sendEmail = async (e) => {

        e.preventDefault();

        if (user_name !== '' && user_email !== '' && user_phone_number !== '' && user_message !== '') {
            emailjs.sendForm('service_p01o9m9', 'template_1ha4d58', dataSend.current, '9jbiWdhyoiQfZPX42')
                .then((result) => {
                    toast.success('Email Sent Successfully!');
                }, (error) => {
                    toast.error('Temporary Closed');
                });
        } else {
            toast.error('All fields are mandatory');
        }
        e.target.reset()

    };

    return (
        <>
            <form onSubmit={sendEmail} ref={dataSend}>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="mb-2">
                            <input type="text" className="form-control" placeholder='Name' name='user_name' required />
                        </div>
                        <div className="mb-2">
                            <input type="email" className="form-control" placeholder='Email' name='user_email' required />
                        </div>
                        <input name="PageNameTracking" value={PageNameTracking} hidden type='text' />
                        <div className="mb-2">
                            <input type="number" className="form-control" placeholder='Phone no' name='user_phone_number' required />
                        </div>
                    </div>
                    <div className="col-md-6 mb-2">
                        <textarea name="user_message" rows="5" placeholder="Message" className='form-control' required></textarea>
                    </div>
                    <button type="submit" className='btn border-0 bg__orange w-auto d-inline text-white rounded-pill fs_18 fw_600 mt-3'>Send Message</button>
                </div>
            </form>
        </>
    )
}

export { BannerForm, ContactForm };
