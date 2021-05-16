/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-expressions */
import PropTypes from 'prop-types';
// eslint-disable-next-line prettier/prettier
import React, { useState } from 'react';
const styles = {
  DragDown: {
    display: 'flex',
    marginBottom: '40px',
    padding: '25px 0 25px 0',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70vw',
    backgroundColor: '#620512',
    fontFamily: 'Lato',
    borderRadius: '10px',
  },
  btn: {
    height: '32px',
    width: '32px',
    boxShadow: 'none',
  },
  OpenBar: {
    display: 'flex',
    padding: '3% 7% 5% 7%',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '70vw',
    backgroundColor: '#F6EAEA',
    fontFamily: 'Lato',
    borderRadius: '0px',
    marginTop: '-45px',
    marginBottom: '20px',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
  },
  SubTitle: {
    color: 'white',
    marginLeft: '3vw',
    fontFamily: 'Lato',
    fontSize: '20px',
  },
  Content: {
    fontSize: '18px',
    fontFamily: 'Lato',
    textAlign: 'justify',
  },
};

export default function DragDown(props) {
  const [textDrop, setTextDrop] = useState(false);
  const [colorChange, setColorChange] = useState('#620512');
  const { index } = props;
  const { title } = props;
  const { answer } = props;
  const { link } = props;

  return (
    <div key={index} style={{ margin: '10px' }}>
      <div
        style={{ ...styles.DragDown, backgroundColor: colorChange }}
        onMouseEnter={() => setColorChange('#400000')}
        onMouseLeave={() => setColorChange('#620512')}
      >
        <h2 style={styles.SubTitle}>{title}</h2>
        <button
          type="button"
          style={{ marginRight: '3vw', marginLeft: '2vw' }}
          className="btn"
          onClick={() => {
            textDrop ? setTextDrop(false) : setTextDrop(true);
          }}
        >
          {textDrop ? (
            <div>
              <span
                style={{
                  display: 'block',
                  lineHeight: '40px',
                  color: 'white',
                  weight: '1000',
                  fontSize: '40px',
                  border: 'none',
                  marginBottom: '10px',
                  marginRight: '2px',
                }}
              >
                -
              </span>
            </div>
          ) : (
            <div>
              <span
                style={{
                  color: 'white',
                  weight: '1000',
                  fontSize: '30px',
                  border: 'none',
                }}
              >
                +
              </span>
            </div>
          )}
        </button>
      </div>
      {textDrop ? (
        <div style={styles.OpenBar}>
          <h3 style={styles.Content}>
            {answer}
            {link !== 'none' && (
              <a href={link} target="_blank">
                here
              </a>
            )}
            {link !== 'none' && '.'}
          </h3>
        </div>
      ) : (
        <React.Fragment />
      )}
    </div>
  );
}

DragDown.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  answer: PropTypes.string,
  link: PropTypes.string,
};
