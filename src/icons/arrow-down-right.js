import React from 'react';
import PropTypes from 'prop-types';

const ArrowDownRight = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 15.582V6.417a.917.917 0 00-1.833 0v6.953L7.065 5.768a.917.917 0 10-1.297 1.297l7.602 7.602H6.417a.917.917 0 100 1.833H15.592a.918.918 0 00.342-.07"
      ></path>
    </svg>
  );
};

ArrowDownRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowDownRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowDownRight;
