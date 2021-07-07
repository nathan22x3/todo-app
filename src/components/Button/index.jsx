import React from 'react';
import styles from 'components/Button/Button.module.scss';
import PropTypes from 'prop-types';

const colors = {
  default: '#2f80ed',
  success: '',
  warning: '',
  danger: '#eb5757',
};

const Button = ({ children, style, type, variant, onClick }) => {
  return (
    <button
      className={styles.container}
      style={{ backgroundColor: colors[variant], ...style }}
      type={type}
      {...{ onClick, onSubmit: onClick }}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'success', 'warning', 'danger']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'submit',
  variant: 'default',
  onClick: null,
};

export default Button;
