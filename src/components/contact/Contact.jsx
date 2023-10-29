import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_s7o6xrk',
        'template_agvr98r',
        formRef.current,
        'F0UmTl_XRhHhrEimd'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      {/* <h5>
        I do receive your messages and will respond asap if the valid email is
        provided :)
      </h5> */}
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="itsvikasdwivedi" data-version="v1">
              <a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/itsvikasdwivedi?trk=profile-badge">Vikas Dwivedi</a>
            </div>
            <h4>Email</h4>
            <h5>vickyserver22@gmail.com</h5>
            <a href="mailto:vickyserver22@gmail.com">Send a message</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="name"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            name="email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>Thanks, I'll reply ASAP</span>}
        </form>
      </div>
      
    </section>
  );
};

export default Contact;
