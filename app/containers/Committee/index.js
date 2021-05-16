/* eslint-disable no-unused-vars */
import React from 'react';
import './committeeStyles.scss';
import Carousel from 'react-bootstrap/Carousel';

import sliderCM from '../../images/Committee/slider_CM.jpg';
import sliderOps from '../../images/Committee/slider_Ops.jpg';
import sliderPR from '../../images/Committee/slider_PR.jpg';
import sliderTech from '../../images/Committee/slider_Tech.jpg';
import sliderTOPS from '../../images/Committee/slider_TOPS.jpg';
import sliderWelf from '../../images/Committee/slider_Welf.jpg';
import sliderAdhoc from '../../images/Committee/slider_Adhoc.jpg';

import agnesImg from '../../images/Committee/agnes.jpg';
import bharaImg from '../../images/Committee/bhara.jpg';
import eganImg from '../../images/Committee/egan.jpg';
import felisImg from '../../images/Committee/felis.jpg';
import ferlitaImg from '../../images/Committee/ferlita.jpg';
import gegeImg from '../../images/Committee/gege.jpg';
import icoImg from '../../images/Committee/ico.jpg';
import jenssenImg from '../../images/Committee/jenssen.jpg';
import jessImg from '../../images/Committee/jess.jpg';
import joceImg from '../../images/Committee/joce.jpg';
import joviImg from '../../images/Committee/jovi.jpg';
import juliaImg from '../../images/Committee/julia.jpg';
import kejaImg from '../../images/Committee/keja.jpg';
import kennyImg from '../../images/Committee/kenny.jpg';
import kleoImg from '../../images/Committee/kleo.jpg';
import meganImg from '../../images/Committee/megan.jpg';
import noahImg from '../../images/Committee/noah.jpg';
import sharonImg from '../../images/Committee/sharon.jpg';
import timmyImg from '../../images/Committee/timmy.jpg';
import wiellyImg from '../../images/Committee/wielly.jpg';
import wynonaImg from '../../images/Committee/wynona.jpg';

export default function Committee() {
  const dataArray = [
    {
      name: 'Timothy William',
      position: 'Vice President (Internal)',
      imageURL: timmyImg,
    },
    {
      name: 'Giorgio Alexander',
      position: 'Vice President (External)',
      imageURL: gegeImg,
    },
    {
      name: 'Jessica Widjaja',
      position: 'Secretary',
      imageURL: jessImg,
    },
    {
      name: 'Kezia Janet',
      position: 'Treasurer',
      imageURL: kejaImg,
    },
    {
      name: 'Wynona Raissa N.',
      position: 'President of BK',
      imageURL: wynonaImg,
    },
    {
      name: 'Kelvin Leo',
      position: 'President of GTD',
      imageURL: kleoImg,
    },
    {
      name: 'Jason Jovi Brata',
      position: 'Producer of ICN',
      imageURL: joviImg,
    },
    {
      name: 'Julia S. Tjoang',
      position: 'Creative Media Director',
      imageURL: juliaImg,
    },
    {
      name: 'Megan Limanjaya',
      position: 'Creative Media Director',
      imageURL: meganImg,
    },
    {
      name: 'Sharon Gautama',
      position: 'Creative Media Director',
      imageURL: sharonImg,
    },
    {
      name: 'Kenny Lo',
      position: 'Public Relations Director',
      imageURL: kennyImg,
    },
    {
      name: 'Felicia Angelina H.',
      position: 'Public Relations Director',
      imageURL: felisImg,
    },
    {
      name: 'Kristoffer Jenssen',
      position: 'Operation & Sports Director',
      imageURL: jenssenImg,
    },
    {
      name: 'Wielly Halim',
      position: 'Operation & Sports Director',
      imageURL: wiellyImg,
    },
    {
      name: 'Agnes Melia',
      position: 'Welfare & Events Director',
      imageURL: agnesImg,
    },
    {
      name: 'Egan Valentino',
      position: 'Welfare & Events Director',
      imageURL: eganImg,
    },
    {
      name: 'Bhara Sina M.',
      position: 'Welfare & Events Director',
      imageURL: bharaImg,
    },
    {
      name: 'Jocelyn Valencia Y.',
      position: 'Welfare & Events Director',
      imageURL: joceImg,
    },
    {
      name: 'Ferlita Halim',
      position: 'Technology Director',
      imageURL: ferlitaImg,
    },
    {
      name: 'Fransisco Bryant',
      position: 'Technology Director',
      imageURL: icoImg,
    },
  ];
  return (
    <div className="committeePage">
      <Carousel>
        <Carousel.Item>
          <img className="sliderimg" alt="sliderImg" src={sliderTOPS} />
          <Carousel.Caption>
            <p className="title">Our Committee</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="sliderimg" alt="sliderImg" src={sliderAdhoc} />
          <Carousel.Caption>
            <p className="title">Our Committee</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="sliderimg" alt="sliderImg" src={sliderCM} />
          <Carousel.Caption>
            <p className="title">Our Committee</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="sliderimg" alt="sliderImg" src={sliderPR} />
          <Carousel.Caption>
            <p className="title">Our Committee</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="sliderimg" alt="sliderImg" src={sliderOps} />
          <Carousel.Caption>
            <p className="title">Our Committee</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="sliderimg" alt="sliderImg" src={sliderWelf} />
          <Carousel.Caption>
            <p className="title">Our Committee</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="sliderimg" alt="sliderImg" src={sliderTech} />
          <Carousel.Caption>
            <p className="title">Our Committee</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1>Executive Committee PINTU XIX</h1>
      <div className="president item-container">
        <img id="Image" alt="presidentImg" src={noahImg} />
        <p id="Name">Noah Winston Ng</p>
        <p className="role">President</p>
      </div>
      <div className="grid-container">
        {dataArray.map(item => (
          <div className="grid-item item-container">
            <img src={item.imageURL} id="Image" alt="committeeImg" />
            <p id="Name">{item.name}</p>
            <p className="role">{item.position}</p>
          </div>
        ))}
      </div>
      <div className="end" />
    </div>
  );
}
