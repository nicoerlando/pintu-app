/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
/* eslint-disable consistent-return */
/* eslint-disable radix */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-inner-declarations */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import './index.scss';

import titleImg from '../../images/HomePage/foto1_title.jpg';
import aboutUsImg from '../../images/HomePage/foto2_aboutUs.jpg';
import visionImg from '../../images/HomePage/foto3_vision.jpg';
import missionImg from '../../images/HomePage/foto4_mission.jpg';
import gtdImg from '../../images/HomePage/foto5_adhocGTD.jpg';
import icnImg from '../../images/HomePage/foto6_adhocICN .jpg';
import bkImg from '../../images/HomePage/foto7_adhocBK.jpg';

import gtdIcon from '../../images/HomePage/gtd.png';
import icnIcon from '../../images/HomePage/icn.png';
import bkIcon from '../../images/HomePage/bk.png';

export default function HomePage() {
  const hasWindow = typeof window !== 'undefined';

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);

  return (
    <div className="homepage">
      <div
        className="TitlePosition"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)) ,url(${titleImg})`,
        }}
      >
        <span
          style={
            windowDimensions.width > 1145
              ? {
                  fontSize: '55px',
                  lineHeight: '150%',
                  marginBottom: '30px',
                  fontWeight: '900',
                }
              : windowDimensions.width > 575
              ? {
                  fontSize: '35px',
                  lineHeight: '150%',
                  marginBottom: '30px',
                  fontWeight: '900',
                }
              : {
                  fontSize: '30px',
                  lineHeight: '120%',
                  marginBottom: '30px',
                  fontWeight: '900',
                }
          }
        >
          NTU Indonesian Students Association
        </span>
        <span
          style={
            windowDimensions.width > 1145
              ? { fontSize: '25px', lineHeight: '150%' }
              : windowDimensions.width > 575
              ? { fontSize: '20px', lineHeight: '150%' }
              : { fontSize: '15px', lineHeight: '150%' }
          }
        >
          Find out more about us!
        </span>
        <div
          style={
            windowDimensions.width > 1145
              ? {}
              : windowDimensions.width > 575
              ? { marginTop: '7vh' }
              : { marginTop: '9vh' }
          }
        >
          <Scroll
            className="Arrow"
            to="AboutUs"
            spy
            smooth
            hashSpy
            offset={-20}
            duration={500}
            delay={100}
            isDynamic
            ignoreCancelEvents={false}
          >
            <span />
            <span />
            <span />
          </Scroll>
        </div>
      </div>
      <div id="AboutUs" className="AboutUs">
        <span
          style={
            windowDimensions.width > 450
              ? { fontSize: '36px', color: '#620512', fontWeight: '900' }
              : { fontSize: '24px', color: '#620512', fontWeight: '900' }
          }
        >
          About Us
        </span>
        <span
          className="AboutUsText"
          style={
            windowDimensions.width > 590
              ? { fontSize: '18px', lineHeight: '27px' }
              : {
                  fontSize: '14px',
                  marginTop: '10px',
                  lineHeight: '21px',
                  paddingLeft: '0px',
                  paddingRight: '0px',
                }
          }
        >
          Pelajar Indonesia NTU (PINTU) is an association for Indonesian
          students in Nanyang Technological University (NTU) Singapore. It was
          officially founded on 17 August 2002 and has now become one of the
          most established Indonesian students’ organizations in Singapore. We
          contribute to the well-being of students in NTU, both Indonesians and
          non-Indonesians, by organising various activities and initiatives, as
          well as taking part in many school-organized activities.
        </span>
        <img className="AboutUsPhoto" src={aboutUsImg} />
      </div>
      <div id="VisionandMission" className="VisionandMission">
        <svg
          className="wave1"
          viewBox="0 0 1366 170"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height={windowDimensions.width > 1350 ? '100%' : '170'}
          style={
            windowDimensions.width > 1225
              ? {}
              : windowDimensions.width > 940
              ? { marginBottom: '-7%' }
              : windowDimensions.width > 710
              ? { marginBottom: '-10%' }
              : windowDimensions.width > 600
              ? { marginBottom: '-12%' }
              : windowDimensions.width > 500
              ? { marginBottom: '-15%' }
              : windowDimensions.width > 445
              ? { marginBottom: '-17%' }
              : windowDimensions.width > 387
              ? { marginBottom: '-20%' }
              : windowDimensions.width > 350
              ? { marginBottom: '-23%' }
              : { marginBottom: '-26%' }
          }
        >
          <path
            d="M-122.338 35.3308L-116.8 169.356L1427.94 107.697L1423.51 0.477121C1265.81 42.5709 901.44 111.822 705.589 52.0771C509.738 -7.668 72.0329 16.0191 -122.338 35.3308Z"
            fill="#F6EAEA"
          />
        </svg>
        <div className="OurVisionandMission">
          <div
            className="OurVisionandMissionTitle"
            style={
              windowDimensions.width > 1240
                ? {
                    marginBottom: '-85px',
                    marginTop: '70px',
                    fontWeight: '900',
                  }
                : windowDimensions.width > 450
                ? { marginBottom: '50px', fontWeight: '900' }
                : { fontSize: '24px', marginBottom: '4vh', fontWeight: '900' }
            }
          >
            {parseInt(windowDimensions.width) > 1240 ? (
              <div
                style={{
                  width: '38vw',
                }}
              />
            ) : (
              <div />
            )}
            <span>Our Visions</span>
          </div>
          <div
            className="OurVisionandMissionBody"
            style={
              windowDimensions.width > 1240 ? {} : { flexDirection: 'column' }
            }
          >
            <div>
              <img className="VisionandMissionPhoto" src={visionImg} />
            </div>
            <ul
              style={
                windowDimensions.width > 1240
                  ? {
                      fontSize: '18px',
                      marginTop: '8vh',
                      marginLeft: '30px',
                      paddingBottom: '60px',
                      paddingTop: '60px',
                    }
                  : windowDimensions.width > 590
                  ? {
                      marginTop: '2vh',
                      fontSize: '18px',
                      lineHeight: '27px',
                      marginLeft: '0px',
                    }
                  : { fontSize: '14px', marginTop: '2vh', marginLeft: '0px' }
              }
            >
              <li>
                To foster a community based on unity and solidarity, that
                strives to develop a greater sense of belonging, awareness, and
                nationalism towards Indonesia.
              </li>
              <p />
              <li>
                To be a student-run organization that aspires its members to
                continually and holistically improve themselves.
              </li>
              <p />
              <li>
                To establish its position as a well-respected institution that
                gives positive societal impacts by maintaining a harmonious
                relationship with other external bodies.
              </li>
            </ul>
          </div>
        </div>
        <div className="OurVisionandMission">
          <div
            className="OurVisionandMissionTitle"
            style={
              windowDimensions.width > 1240
                ? { marginBottom: '-100px', fontWeight: '900' }
                : windowDimensions.width > 450
                ? { marginBottom: '50px', fontWeight: '900' }
                : { fontSize: '24px', marginBottom: '4vh', fontWeight: '900' }
            }
          >
            <span>Our Missions</span>
            {parseInt(windowDimensions.width) > 1240 ? (
              <div
                style={{
                  width: '43vw',
                }}
              />
            ) : (
              <div />
            )}
          </div>
          <div
            className="OurVisionandMissionBody"
            style={
              windowDimensions.width > 1240
                ? {}
                : { flexDirection: 'column-reverse' }
            }
          >
            <ul
              style={
                windowDimensions.width > 1240
                  ? {
                      marginRight: '60px',
                      fontSize: '18px',
                      marginLeft: '-60px',
                      marginTop: '140px',
                      paddingBottom: '60px',
                    }
                  : windowDimensions.width > 590
                  ? { fontSize: '18px', marginTop: '3vh', marginRight: '0px' }
                  : { fontSize: '14px', marginTop: '2vh', marginRight: '0px' }
              }
            >
              <li>
                To organize bonding activities and events which allow the
                members to contribute back to Indonesia, learn more about
                national heritage, and most importantly to have fun together as
                one huge family.
              </li>
              <p />
              <li>
                To run various clubs, platforms, and interest groups that enable
                the members to discover their talents, indulge in their
                passions, and continually hone their skills.
              </li>
              <p />
              <li>
                To forge a close and mutual relationship with external parties
                such as the Embassy of the Republic of Indonesia in Singapore,
                other Indonesian communities in Singapore, and administrative
                bodies of Nanyang Technological University (NTU)
              </li>
            </ul>
            <div>
              <img className="VisionandMissionPhoto" src={missionImg} />
            </div>
          </div>
        </div>
        <svg
          className="wave2"
          width="100%"
          height={windowDimensions.width > 1350 ? '100%' : '324'}
          viewBox="0 0 1366 324"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={
            windowDimensions.width > 1225
              ? {}
              : windowDimensions.width > 1030
              ? { marginTop: '-15%' }
              : windowDimensions.width > 865
              ? { marginTop: '-18%' }
              : windowDimensions.width > 740
              ? { marginTop: '-21%' }
              : windowDimensions.width > 650
              ? { marginTop: '-24%' }
              : windowDimensions.width > 580
              ? { marginTop: '-27%' }
              : windowDimensions.width > 530
              ? { marginTop: '-30%' }
              : windowDimensions.width > 475
              ? { marginTop: '-33%' }
              : windowDimensions.width > 440
              ? { marginTop: '-36%', marginBottom: '-8%' }
              : windowDimensions.width > 404
              ? { marginTop: '-39%', marginBottom: '-13%' }
              : windowDimensions.width > 375
              ? { marginTop: '-42%', marginBottom: '-18%' }
              : windowDimensions.width > 355
              ? { marginTop: '-45%', marginBottom: '-23%' }
              : windowDimensions.width > 340
              ? { marginTop: '-48%', marginBottom: '-28%' }
              : { marginTop: '-52%', marginBottom: '-33%' }
          }
        >
          <path
            d="M1494.79 186.185L1475.13 0.194681L-215.616 174.522L-199.888 323.314C-30.9062 255.753 362.358 138.585 583.564 210.401C804.77 282.217 1283.21 224.18 1494.79 186.185Z"
            fill="#F6EAEA"
          />
        </svg>
      </div>
      <div id="AdHoc" className="AdHoc">
        <span
          style={
            windowDimensions.width > 450
              ? { fontSize: '36px', fontWeight: '900', lineHeight: '54px' }
              : { fontSize: '24px', fontWeight: '900', lineHeight: '36px' }
          }
        >
          Our Ad Hoc Organizations
        </span>
        <div
          className="Website"
          style={
            windowDimensions.width > 1169
              ? {}
              : {
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }
          }
        >
          <Link
            to="/adhoc/gtd"
            onClick={() => {}}
            className="WebsiteBox"
            style={
              windowDimensions.width > 480
                ? {}
                : { width: '220px', height: '309px' }
            }
          >
            <div
              className="WebsitePicture"
              style={
                windowDimensions.width > 480
                  ? {
                      backgroundImage: `url(${gtdImg})`,
                    }
                  : {
                      width: '165px',
                      height: '165px',
                      backgroundImage: `url(${gtdImg})`,
                    }
              }
            />
            <img
              src={gtdIcon}
              className="WebsiteLogo"
              style={
                windowDimensions.width > 480
                  ? {
                      width: '250px',
                      marginTop: '6vh',
                    }
                  : {
                      width: '172px',
                      marginTop: '5vh',
                    }
              }
            />
          </Link>
          <Link
            to="/adhoc/icn"
            onClick={() => {}}
            className="WebsiteBox"
            style={
              windowDimensions.width > 480
                ? {}
                : { width: '220px', height: '309px' }
            }
          >
            <div
              className="WebsitePicture"
              style={
                windowDimensions.width > 480
                  ? { backgroundImage: `url(${icnImg})` }
                  : {
                      width: '165px',
                      height: '165px',
                      backgroundImage: `url(${icnImg})`,
                    }
              }
            />
            <img
              src={icnIcon}
              className="WebsiteLogo"
              style={
                windowDimensions.width > 480
                  ? { width: '110px' }
                  : {
                      width: '85px',
                      marginTop: '2vh',
                    }
              }
            />
          </Link>
          <Link
            to="/adhoc/balik-kampoeng"
            onClick={() => {}}
            className="WebsiteBox"
            style={
              windowDimensions.width > 480
                ? {}
                : { width: '220px', height: '309px' }
            }
          >
            <div
              className="WebsitePicture"
              style={
                windowDimensions.width > 480
                  ? {
                      backgroundImage: `url(${bkImg})`,
                    }
                  : {
                      width: '165px',
                      height: '165px',
                      backgroundImage: `url(${bkImg})`,
                    }
              }
            />
            <img
              src={bkIcon}
              className="WebsiteLogo"
              style={
                windowDimensions.width > 480
                  ? { width: '240px' }
                  : {
                      width: '164px',
                    }
              }
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
