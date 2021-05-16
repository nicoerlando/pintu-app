import React from 'react';
import PropTypes from 'prop-types';
import './Gallery.scss';

import gtd1 from '../../images/Adhoc/GTD/gtd-1.jpg';
import gtd2 from '../../images/Adhoc/GTD/gtd-2.jpg';
import gtd3 from '../../images/Adhoc/GTD/gtd-3.jpg';
import gtd4 from '../../images/Adhoc/GTD/gtd-4.jpg';
import gtd5 from '../../images/Adhoc/GTD/gtd-5.jpg';
import gtd6 from '../../images/Adhoc/GTD/gtd-6.jpg';
import gtd7 from '../../images/Adhoc/GTD/gtd-7.jpg';
import gtd8 from '../../images/Adhoc/GTD/gtd-8.jpg';
import gtd9 from '../../images/Adhoc/GTD/gtd-9.jpg';

import icn1 from '../../images/Adhoc/ICN/icn-1.jpg';
import icn2 from '../../images/Adhoc/ICN/icn-2.jpg';
import icn3 from '../../images/Adhoc/ICN/icn-3.jpg';
import icn4 from '../../images/Adhoc/ICN/icn-4.jpg';
import icn5 from '../../images/Adhoc/ICN/icn-5.jpg';
import icn6 from '../../images/Adhoc/ICN/icn-6.jpg';
import icn7 from '../../images/Adhoc/ICN/icn-7.jpg';
import icn8 from '../../images/Adhoc/ICN/icn-8.jpg';
import icn9 from '../../images/Adhoc/ICN/icn-9.jpg';

import bk1 from '../../images/Adhoc/BK/bk-1.jpg';
import bk2 from '../../images/Adhoc/BK/bk-2.jpg';
import bk3 from '../../images/Adhoc/BK/bk-3.jpg';
import bk4 from '../../images/Adhoc/BK/bk-4.jpg';
import bk5 from '../../images/Adhoc/BK/bk-5.jpg';
import bk6 from '../../images/Adhoc/BK/bk-6.jpg';
import bk7 from '../../images/Adhoc/BK/bk-7.jpg';
import bk8 from '../../images/Adhoc/BK/bk-8.jpg';
import bk9 from '../../images/Adhoc/BK/bk-9.jpg';

const imgUrls = [
  [gtd1, gtd2, gtd3, gtd4, gtd5, gtd6, gtd7, gtd8, gtd9],
  [icn1, icn2, icn3, icn4, icn5, icn6, icn7, icn8, icn9],
  [bk1, bk2, bk3, bk4, bk5, bk6, bk7, bk8, bk9],
];

export default function Gallery(props) {
  const { type } = props;

  let id;
  if (type === 'gtd') {
    id = 0;
  } else if (type === 'icn') {
    id = 1;
  } else {
    // key === bk
    id = 2;
  }

  return (
    <div className="gallery-container">
      <div className="grid-container">
        {imgUrls[id].map(item => (
          <div className="grid-item item-container">
            <img src={item} id="Image" alt="galleryImg" />
          </div>
        ))}
      </div>
    </div>
  );
}

Gallery.propTypes = {
  type: PropTypes.string,
};
