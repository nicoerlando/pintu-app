import React from 'react';
import './style.scss';
import Gallery from '../../../components/Adhoc/Gallery';
import titleImg from '../../../images/Adhoc/GTDheader.jpg';
import logo from '../../../images/Adhoc/gtd.png';

export default function GTD() {
  return (
    <div className="gtd">
      <div
        className="header"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)) ,url(${titleImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
          Get Together Day (GTD)
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
          Get Together Day (GTD) is an annual orientation camp to introduce new
          Indonesian NTU students to a warm and welcoming community. One of its
          main goals is to ease Indonesian newcomers in Singapore into NTU’s and
          Singapore’s environment. GTD also strives to help freshmen batches
          bond together and get to know their fellow Indonesian seniors in NTU.
          The event consists of 3 days, and is organized by a committee of 100
          people. The event will feature fun activities, where groups consisting
          of seniors and freshmen will participate in bonding and team-building
          activities.
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
          <a href="https://www.instagram.com/pintugtd/" target="_blank">
            <i className="fab fa-instagram" />
          </a>
          <a href="https://www.facebook.com/PINTUGTD" target="_blank">
            <i className="fab fa-facebook-square" />
          </a>
          <a href="https://pintugtd.com/" target="_blank">
            <i className="fas fa-globe-americas" />
          </a>
        </div>

        <div>
          <Gallery type="gtd" />
        </div>
      </div>
    </div>
  );
}
