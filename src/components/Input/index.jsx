import React from 'react';
import styles from 'components/Input/Input.module.scss';
import PropTypes from 'prop-types';

const Input = ({ type, value, placeholder, onChange }) => {
  return (
    <div className={styles.container}>
      <input {...{ type, value, placeholder, onChange }} />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: 'Type something...',
  onChange: () => {},
};

export default Input;
