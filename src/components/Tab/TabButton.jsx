import styles from 'components/Tab/Tab.module.scss';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const TabButton = ({ label, isActive, onClick }) => {
  return (
    <div className={styles.button} {...{ onClick }}>
      <span>{label}</span>
      {isActive && (
        <motion.div
          layoutId={'indicator'}
          className={styles.indicator}
          initial={false}
          animate={{ backgroundColor: '#2f80ed' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
      )}
    </div>
  );
};

TabButton.propTypes = {
  label: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

TabButton.defaultProps = {
  label: 'Tab name',
  isActive: false,
  onClick: () => {},
};

export default TabButton;
