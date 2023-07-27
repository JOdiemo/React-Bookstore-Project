import React from 'react';
import PropTypes from 'prop-types';

function Button({ onClick, btnName, btnValue }) {
  return (
    <button type="button" onClick={onClick} className={btnName}>
      {btnValue}
    </button>
  );
}

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  btnValue: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
