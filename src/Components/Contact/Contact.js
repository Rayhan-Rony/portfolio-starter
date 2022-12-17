import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_klxx3to', 'template_hl1azan', form.current, 'FJ89ZE7crckVHK_5M')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='contact-form' id='contact'>
            <div className="c-left">
                <div className="awesome">
                    <span>Get in touch</span>
                    <span>Contact Me</span>
                    <div className="blur p-blur" style={{ background: "#ABF1FF94" }}></div>
                </div>
            </div>
            <div className='c-right' >
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className='user' placeholder='Name' />
                    <input type="email" name="user_email" className='user' placeholder='Email' />
                    <textarea name="message" className='user' placeholder='Message'></textarea>
                    <input type="submit" value="Send" className="button" />
                    <div className='blur c-blur' style={{ background: "var(--purple)" }}></div>
                </form>
            </div>

        </div>
    );
};

export default Contact;