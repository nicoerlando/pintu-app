/* eslint-disable no-unused-expressions */

import React from 'react';
import Header from '../../../components/Guide/FAQ/Header';
import DragDown from '../../../components/Guide/FAQ/DragDown';
import './index.scss';

export default function FAQ() {
  const data = [
    {
      query: 'When is the NTU application period? ',
      answer:
        "NTU usually opens for registration from around October to December each year. However, the exact dates may vary. It can be seen on NTU's official website ",
      link:
        'https://admissions.ntu.edu.sg/UndergraduateIntnlAdmissions/Pages/InternationalOthers.aspx#apply',
    },
    {
      query:
        'What is the minimum grade to be shortlisted for the Undergraduate Entrance Examination (UEE)?',
      answer:
        'Officially, NTU does not release the minimum grade needed to be shortlisted for the UEE. However, based on past students, on average, the minimum grade will be 85 for the following subjects: Mathematics, Physics, Chemistry, Biology, Bahasa, and English for Science students; and Mathematics, Economics, History, Geography, Bahasa, and English for Social Science students. ',
      link: 'none',
    },
    {
      query: 'Are TOEFL and IELTS necessary for NTU Admission? ',
      answer:
        'TOEFL and IELTS are not compulsory but they can be uploaded while submitting the necessary documents after the application. However, if you submit these, you will be exempted from the NTU English lesson without needing to take additional English tests once accepted to NTU.',
      link: 'none',
    },
    {
      query:
        'What is the difference between AO level and A level? Which tests should I take when registering to NTU?',
      answer:
        'The scope of the lessons is different. Usually, AO level is easier than A level. However, the tests you take will depend on the major. If you are taking a business or social science related major, you will have to take an AO level exam. However, if you are taking an engineering, science or IT-related major, you will have to take A level exams. The details of the Undergraduate Entrance Examination (UEE) requirements, can be seen ',
      link:
        'https://www3.ntu.edu.sg/oad2/website_files/International/ExamPaperRequirements.pdf',
    },
    {
      query: 'Are there any tips and tricks to get accepted to NTU?',
      answer:
        'There are no particular tips and tricks that we can give. However, the key is to make sure that you have prepared and learned all the materials for the UEE, especially since the curriculum tested will be different. Practicing past year papers will also be useful in preparing for the exams. Do your best and believe in yourself!. ',
      link: 'none',
    },
    {
      query: 'How much does it cost for the basic expenses in NTU?',
      answer:
        'The food in NTU can cost from $2 to $5 SGD. Hence, the expenses in NTU can range from $300 per month to $600 SGD per month depending on one’s needs and lifestyle. The details of the expenses in NTU can be seen ',
      link:
        'https://global.ntu.edu.sg/GMP/GEMTrailblazer/GEMTrailblazerexchange/Beforeyouapply/Pages/LivinginSingapore.aspx',
    },
    {
      query: 'Does NTU offer student exchange programs?',
      answer:
        'NTU offers 2 different student exchange programs. The first one is the Overseas Exchange Program (OEP) that can be done either during summer break, or for a whole semester. The second is a student exchange program inside Singapore, in which students can study in some of the top universities in Singapore which includes NUS and SMU. More details regarding student exchange programs can be accessed ',
      link:
        'https://www.ntu.edu.sg/Students/Undergraduate/AcademicServices/ExchangeProgrammes/Pages/NTUStudentsSUSEP.aspx',
    },
  ];

  return (
    <div className="FAQ">
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
      </div>
    </div>
  );
}
