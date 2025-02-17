import React from 'react';
import PropTypes from 'prop-types';

const Tel = props => {
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
      <path d="M6.823 1.833c.407 0 .782.221.98.578l1.372 2.47c.18.324.188.715.022 1.046L7.876 8.57s.383 1.969 1.985 3.571c1.603 1.603 3.565 1.98 3.565 1.98l2.643-1.322a1.121 1.121 0 011.046.023l2.478 1.378c.356.197.576.573.576.98v2.844c0 1.449-1.345 2.495-2.718 2.032-2.819-.951-7.195-2.762-9.968-5.536-2.774-2.774-4.585-7.15-5.536-9.968-.463-1.373.583-2.718 2.032-2.718h2.844z"></path>
      <path d="M20.1 9.167a6.418 6.418 0 00-.123-2.506 6.357 6.357 0 00-1.678-2.957 6.357 6.357 0 00-2.957-1.678 6.42 6.42 0 00-2.506-.122"></path>
      <path d="M16.468 9.167a3.188 3.188 0 00-.9-2.732 3.189 3.189 0 00-2.732-.9"></path>
    </svg>
  );
};

Tel.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Tel.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Tel;
