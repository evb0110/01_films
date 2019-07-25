import React from 'react';
import PropTypes from 'prop-types';
import './Stars.css';
import Star from './Star';

export default function Stars({ count }) {
  let visible = true;
  if (!Number.isInteger(count) || count < 1 || count > 5) visible = false;
  return (
    visible && (
      <ul className="card-body-stars u-clearfix">
        {[...Array(count)].map(n => (
          <Star key={n} />
        ))}
      </ul>
    )
  );
}

Stars.propTypes = {
  count: PropTypes.number,
};
