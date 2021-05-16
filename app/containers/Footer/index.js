import React from 'react';
import './index.scss';
import Image from 'react-image-resizer';
import ytLogo from '../../images/yt-icon.svg';
import fbLogo from '../../images/fb-icon.svg';
import igLogo from '../../images/ig-icon.svg';

export default function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="footerText col-sm-5">
          Copyright © 2021 PINTU. All Rights Reserved.
        </div>
        <div className="col-sm-2 socialMedia">
          <a
            href="https://www.youtube.com/user/pintusingapura/"
            target="_blank"
          >
            <Image src={ytLogo} height={33} width={30} />
          </a>
          <a href="https://www.facebook.com/pintusingapura/" target="_blank">
            <Image src={fbLogo} height={25} width={25} />
          </a>
          <a href="https://www.instagram.com/pintugram/" target="_blank">
            <Image src={igLogo} height={25} width={25} />
          </a>
        </div>
        <div className="footerText col-sm-5 ">
          Developed By: PINTU XIX Tech and Creative Media
        </div>
      </div>
    </div>
  );
}
