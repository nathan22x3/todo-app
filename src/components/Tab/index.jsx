import React, { useLayoutEffect, useState } from 'react';
import TabButton from './TabButton';
import styles from 'components/Tab/Tab.module.scss';

const Tab = ({ children }) => {
  const [buttons, setButtons] = useState([]);
  const [activeTab, setActiveTab] = useState(children[0]?.props.label);
  const [content, setContent] = useState(children[0]);

  const handleChangeTab = (tab) => {
    setActiveTab(tab);
    setContent(children.find(({ props }) => props.label === tab));
  };

  useLayoutEffect(() => {
    setButtons(children.map(({ props }) => props.label));
  }, [children]);

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        {buttons?.map((label) => {
          return (
            <TabButton
              key={label}
              label={label}
              isActive={label === activeTab}
              onClick={() => handleChangeTab(label)}
            />
          );
        })}
      </div>
      {content}
    </div>
  );
};

export default Tab;
