/* eslint-disable no-unused-expressions */

import React from 'react';
import Header from '../../../components/Guide/Admission/Header';
import DragDown from '../../../components/Guide/Admission/DragDown';
import './index.scss';

export default function Admission() {
  const data = [
    {
      query: 'Apply Online',
      answer:
        'Prior to your application, you have to determine your application group which corresponds to the qualification you hold. After you have successfully submitted the application form, you will receive a confirmation email with your application number. You can apply online and see more details ',
      link:
        'https://admissions.ntu.edu.sg/UndergraduateAdmissions/Pages/ApplytoNTU.aspx',
    },
    {
      query: 'Upload/Submit Documents',
      answer:
        'You are required to upload and submit documents according to the checklist within 5 days after the application closing date. The checklist can be accessed ',
      link: 'https://wis.ntu.edu.sg/pls/webexe/adm_fore_appl.login',
    },
    {
      query: 'University Entrance Examination',
      answer:
        'Once you obtain the confirmation email that you have proceeded to the next round, you will receive an email stating the date and the location of the tests. Then, you can do the university entrance examination at the designated venue as written in the email. ',
      link: 'none',
    },
  ];

  return (
    <div className="admission">
      <Header />
      <div className="DragDown">
        {data.map((item, i) => (
          <DragDown
            index={i + 1}
            title={item.query}
            answer={item.answer}
            link={item.link}
          />
        ))}
        <div style={{ width: '70vw' }}>
          <p className="MoreInfo">
            More information can be found in the NTU Admissions website{' '}
            <a
              href="https://admissions.ntu.edu.sg/Pages/Home.aspx"
              target="_blank"
            >
              here.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
