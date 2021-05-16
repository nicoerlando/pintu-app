import React from 'react';
import background from '../../../images/Guide/admission-header.jpg';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40vh',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)) ,url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    fontFamily: 'Lato',
    fontWeight: '600',
    fontSize: '4.2vw',
    textAlign: 'center',
    color: 'white',
    marginBottom: '80px',
  },
};

export default function Header() {
  return (
    <div>
      <h1 style={styles.header}>Admission</h1>
    </div>
  );
}
