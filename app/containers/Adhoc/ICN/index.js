import React from 'react';
import './style.scss';
import Gallery from '../../../components/Adhoc/Gallery';
import titleImg from '../../../images/Adhoc/ICNheader.jpg';
import logo from '../../../images/Adhoc/icn.png';

export default function ICN() {
  return (
    <div className="icn">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)) ,url(${titleImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          width: 'auto',
          height: '65vh',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '100%/25%',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }}
        className="header"
      >
        <img
          style={{
            width: '300px',
          }}
          className="header-logo"
          alt="logo"
          src={logo}
        />
      </div>
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          padding: '25px',
          margin: '25px',
        }}
      >
        <strong
          style={{
            color: '#620512',
            fontSize: '36px',
            display: 'flex',
            textAlign: 'center',
            margin: '50px auto 20px auto',
            fontWeight: '900',
          }}
        >
          Indonesian Culture Night (ICN)
        </strong>
        <p
          style={{
            textAlign: 'center',
            padding: '20px 20px 0 20px',
            fontSize: '18px',
            width: '75%',
          }}
          className="description-text"
        >
          ICN Cultural Production is an annual musical theatre production that
          presents a new perspective on Indonesian folklore and history to the
          Singapore community. ICN aims to deliver a performance showcasing and
          preserving the rich and diverse Indonesian cultural heritage in
          Singapore, while developing the talents and skills of those who are
          involved in the production of ICN. ICN is organized by the Indonesian
          Students of NTU (PINTU). The students write their own script and
          songs, prepare their own choreography and create their own sets and
          costumes. Since its humble performance in 2007, it has grown to be a
          professional student-run musical performance with thousands of
          audiences. Each year more than 100 students are involved in the
          various divisions within ICN.
        </p>
        <p
          style={{
            textAlign: 'center',
            padding: '30px 20px 10px 20px',
            fontSize: '18px',
          }}
        >
          Visit us here!
        </p>

        <div className="social-media">
          <a href="https://www.instagram.com/icnmusical/" target="_blank">
            <i className="fab fa-instagram" />
          </a>
          <a href="https://www.facebook.com/ICNmusical" target="_blank">
            <i className="fab fa-facebook-square" />
          </a>
          <a href="http://show.icnmusical.com/" target="_blank">
            <i className="fas fa-globe-americas" />
          </a>
        </div>
        <div>
          <Gallery type="icn" />
        </div>
      </div>
    </div>
  );
}
