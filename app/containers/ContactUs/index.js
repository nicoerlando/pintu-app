import React, { useState } from 'react';
import './ContactUs.scss';
import { Modal } from 'react-bootstrap';
import firebase from './firebase';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [modal, setModal] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    const messageRef = firebase.database().ref('messages');
    const m = {
      name,
      contact,
      message,
      time_stamp: Date().toString(),
    };
    messageRef.push(m);

    setModal(validate());
    setName('');
    setContact('');
    setMessage('');
  };

  const handleClose = () => {
    setModal(false);
  };

  function validate() {
    if (name && contact) return true;
    return false;
  }

  return (
    <div className="contactUs">
      <div className="container">
        <div className="row gx-5 justify-content-center">
          <div className="col-sm-12 col-md-9 col-lg-7 col-xl-6 col-xxl-6">
            <div className="p-3">
              <form onSubmit={handleSubmit}>
                <h1 className="contact-title">Contact Us</h1>
                <div className="mb-3">
                  <label htmlFor="InputName" className="form-label">
                    Name*
                  </label>
                  <input
                    type="name"
                    className="form-control"
                    id="NameInput"
                    value={name}
                    onChange={e => {
                      setName(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="InputContact" className="form-label">
                    Contact*
                  </label>
                  <input
                    className="form-control"
                    id="ContactInput"
                    type="number"
                    value={contact}
                    onChange={e => {
                      setContact(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="InputMessage" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="MessageInput"
                    value={message}
                    onChange={e => {
                      setMessage(e.target.value);
                    }}
                  />
                  <label htmlFor="InputMessage" className="form-label">
                    * Mandatory fields
                  </label>
                  {/* <p>*Mandatory fields</p> */}
                </div>
                <button className="btn" type="submit">
                  SEND
                </button>
              </form>
            </div>
          </div>
          <div
            className="col-sm-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5"
            id="contact-right"
          >
            <p className="info-title">Info</p>
            <iframe
              id="map"
              title="Nanyang Technological University"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15954.854553505544!2d103.6831347!3d1.3483099!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb8bb0800c52d8219!2sNanyang%20Technological%20University!5e0!3m2!1sen!2ssg!4v1614791738557!5m2!1sen!2ssg"
            />
            <div className="logo-container">
              <svg
                className="email-logo"
                viewBox="0 0 37 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M36.6667 26.6667V3.33333L18.3333 18.3333L0 3.33333V26.6667H36.6667ZM18.3333 13.3333L35 0H1.66667L18.3333 13.3333Z"
                  fill="white"
                />
              </svg>
              <br />
              <svg
                className="instagram-logo"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.8571 0C25.2523 0 25.9255 0.0199999 28.0423 0.12C30.157 0.22 31.5967 0.554 32.8636 1.05C34.1741 1.558 35.2782 2.246 36.3823 3.356C37.392 4.35579 38.1733 5.56518 38.6718 6.9C39.1623 8.174 39.4959 9.626 39.5951 11.756C39.6885 13.888 39.7143 14.566 39.7143 20C39.7143 25.434 39.6944 26.112 39.5951 28.244C39.4959 30.374 39.1623 31.824 38.6718 33.1C38.1747 34.4356 37.3932 35.6452 36.3823 36.644C35.3893 37.6606 34.1887 38.4475 32.8636 38.95C31.5987 39.444 30.157 39.78 28.0423 39.88C25.9255 39.974 25.2523 40 19.8571 40C14.462 40 13.7888 39.98 11.672 39.88C9.55724 39.78 8.1176 39.444 6.85071 38.95C5.5249 38.4489 4.32395 37.6619 3.33203 36.644C2.32211 35.6444 1.54078 34.4349 1.0425 33.1C0.550043 31.826 0.218428 30.374 0.119143 28.244C0.0258142 26.112 0 25.434 0 20C0 14.566 0.019857 13.888 0.119143 11.756C0.218428 9.624 0.550043 8.176 1.0425 6.9C1.5394 5.56436 2.32091 4.35464 3.33203 3.356C4.32423 2.33846 5.52511 1.55146 6.85071 1.05C8.1176 0.554 9.55526 0.22 11.672 0.12C13.7888 0.0259999 14.462 0 19.8571 0ZM19.8571 10C17.2239 10 14.6986 11.0536 12.8366 12.9289C10.9746 14.8043 9.92857 17.3478 9.92857 20C9.92857 22.6522 10.9746 25.1957 12.8366 27.0711C14.6986 28.9464 17.2239 30 19.8571 30C22.4904 30 25.0157 28.9464 26.8777 27.0711C28.7397 25.1957 29.7857 22.6522 29.7857 20C29.7857 17.3478 28.7397 14.8043 26.8777 12.9289C25.0157 11.0536 22.4904 10 19.8571 10ZM32.7643 9.5C32.7643 8.83696 32.5028 8.20107 32.0373 7.73223C31.5718 7.26339 30.9404 7 30.2821 7C29.6238 7 28.9925 7.26339 28.527 7.73223C28.0615 8.20107 27.8 8.83696 27.8 9.5C27.8 10.163 28.0615 10.7989 28.527 11.2678C28.9925 11.7366 29.6238 12 30.2821 12C30.9404 12 31.5718 11.7366 32.0373 11.2678C32.5028 10.7989 32.7643 10.163 32.7643 9.5ZM19.8571 14C21.4371 14 22.9523 14.6321 24.0695 15.7574C25.1867 16.8826 25.8143 18.4087 25.8143 20C25.8143 21.5913 25.1867 23.1174 24.0695 24.2426C22.9523 25.3679 21.4371 26 19.8571 26C18.2772 26 16.762 25.3679 15.6448 24.2426C14.5276 23.1174 13.9 21.5913 13.9 20C13.9 18.4087 14.5276 16.8826 15.6448 15.7574C16.762 14.6321 18.2772 14 19.8571 14Z"
                  fill="white"
                />
              </svg>
              <br />
              <svg
                className="facebook-logo"
                viewBox="0 0 40 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.30376 0C3.2578 0 0 3.28124 0 7.3563V32.9315C0 37.0066 3.2578 40.2878 7.30376 40.2878H21.0663V24.5378H16.9313V18.8673H21.0663V14.0227C21.0663 10.2165 23.5094 6.72177 29.1375 6.72177C31.4162 6.72177 33.1013 6.94211 33.1013 6.94211L32.9688 12.2374C32.9688 12.2374 31.2502 12.2211 29.375 12.2211C27.3454 12.2211 27.02 13.1629 27.02 14.7265V18.8673H33.13L32.8638 24.5378H27.02V40.2878H32.6962C36.7422 40.2878 40 37.0066 40 32.9315V7.35634C40 3.28128 36.7422 4.02878e-05 32.6962 4.02878e-05H7.30372L7.30376 0Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="logo-description">
              <div className="email-description">
                <a a href="mailto:kontakpintusg@gmail.com">
                  kontakpintusg&#64;gmail.com
                </a>
              </div>
              <br />
              <div className="instagram-description">
                <a
                  href="https://www.instagram.com/pintugram/?hl=en"
                  target="_blank"
                >
                  &#64;pintugram{' '}
                </a>
              </div>
              <br />
              <div className="facebook-description">
                <a
                  href="https://www.facebook.com/pintusingapura"
                  target="_blank"
                >
                  facebook.com&#47;pintusingapura
                </a>
              </div>
            </div>
          </div>
        </div>

        <Modal show={modal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Thank You </Modal.Title>
          </Modal.Header>
          <Modal.Body>Your message has been submitted</Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
