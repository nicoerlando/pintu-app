/* eslint-disable global-require */
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './index.scss';

import titleImg from '../../images/Events/eventsHeader.jpg';

function i(image) {
  return require(`../../images/Events/${image}.jpg`);
}

export default function Events() {
  const eventDetails = [
    {
      title: 'PINTU Visit',
      desc: `PINTU Visit is an event held by PINTU that consists of a tour and
            seminar to introduce NTU to Indonesians visiting Singapore. We aim
            to facilitate comparative study tours for our university peers
            studying in Indonesia, while also giving tips and tricks for
            Indonesians planning to pursue their higher education in NTU.`,
      images: [
        i('pintuVisit1'),
        i('pintuVisit2'),
        i('pintuVisit3'),
        i('pintuVisit4'),
      ],
    },
    {
      title: 'Warung PINTU',
      desc: `Warung PINTU or WARPIN in short is a bi-annual event held by PINTU\
            to provide Indonesian students in NTU with various home-cooked\
            Indonesian cuisines that can bring memories of home.`,
      images: [i('warpin1'), i('warpin2'), i('warpin3')],
    },
    {
      title: 'Warung Baper',
      desc: `Warung Baper is an annual bonding event held by PINTU that aims to
            foster a solid bond between Indonesian Students in NTU
            by providing varieties of board and console games.`,
      images: [i('baper1'), i('baper2'), i('baper3'), i('baper4'), i('baper6')],
    },
    {
      title: 'PINTU Ke Mana Saja',
      desc: `PINTU Kemana Saja or PKMS in short is an outing event held by PINTU
            where Indonesian Students can travel around well-known landmarks in
            Singapore while playing fun games along the way. PKMS aims to
            introduce Indonesian Students to various places in Singapore while
            becoming a way to refresh their minds.`,
      images: [i('pkms1'), i('pkms2'), i('pkms4'), i('pkms5')],
    },
  ];

  return (
    <div className="events">
      <div className="event-container">
        <div
          className="event-header"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)) ,url(${titleImg})`,
          }}
        >
          <img
            src={require('../../images/Events/PINTULogo.png')}
            id="pintu-title"
            alt="LogoPINTU"
          />
          <p id="events-title">EVENTS</p>
        </div>
        <div className="content-container">
          {eventDetails.map((event, eventKey) => (
            <div className="row" key={event.title}>
              <div className="col-lg-6">
                <div className="event-row">
                  <div className="event-name">{event.title}</div>
                  <div className="event-description"> {event.desc} </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="event-row">
                  <div className="slideshow-container">
                    <Carousel>
                      {event.images.map(value => (
                        <Carousel.Item>
                          <img
                            className="sliderimg"
                            alt="sliderImg"
                            src={value}
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </div>
                </div>
              </div>
              {eventKey === eventDetails.length - 1 ? '' : <hr />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
