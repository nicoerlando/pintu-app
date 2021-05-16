/* eslint-disable prettier/prettier */
import React from 'react';
const styles = {
  SubTitle: {
    textAlign: 'justify',
    marginBottom: '20px',
    fontFamily: 'Lato',
    fontWeight: '700',
    fontSize: '24px',
    color: '#620512',
  },
  BigContainer: {
    display: 'flex',
    justifyContent: 'Center',
    flexDirection: 'Column',
    padding: '100px 7% 90px 7%',
    margin: '100px 20% 100px 20%',
    backgroundColor: '#F6EAEA',
    borderRadius: '5%',
  },
  Content: {
    color: '#2E2925',
    textAlign: 'justify',
    fontSize: '18px',
    padding: '5px 5% 0 5%',
    fontFamily: 'Lato',
  },
};

export default function Content() {
  return (
    <div style={styles.BigContainer} id="content">
      <div>
        <h2 style={styles.SubTitle}>Tuition Fees</h2>
        <p style={styles.Content}>
          Tuition Grant is a subsidy provided by the Ministry of Education,
          Singapore (MOE) which covers a substantial portion of the full tuition
          fees to eligible students. Students who receive the tuition grant are
          required to pay only the subsidized tuition fee. Everyone who receives
          a tuition grant has to finish their 3-year bond, working in companies
          listed in Singapore.
        </p>
      </div>
      <div style={{ marginTop: '4vw' }}>
        <h2 style={styles.SubTitle}>Financial Aids</h2>
        <p style={styles.Content}>
          Loans & Bursaries are offered to Indonesian students who have received
          tuition grants. The loans have to be paid after the students have
          graduated from NTU.
        </p>
      </div>
      <div style={{ marginTop: '4vw' }}>
        <h2 style={styles.SubTitle}>Scholarship</h2>
        <p style={styles.Content}>
          NTU offers scholarships to Indonesian students and cover almost 100%
          of the tuition fees. Some of the scholarships offered by NTU include
          ASEAN Scholarship and other external scholarships.
        </p>
      </div>
    </div>
  );
}
