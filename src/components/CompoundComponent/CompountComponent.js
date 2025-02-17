import React, { createContext, useContext, useState } from 'react';
import './CompountComponent.css';

const TabsContext = createContext();

const Tabs = ({ children, defaultIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  // Context value provides active index and function to change it
  const contextValue = { activeIndex, setActiveIndex };

  return (
    <TabsContext.Provider value={contextValue}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
};

const TabList = ({ children }) => {
  return <div className="tab-list">{children}</div>;
};

const Tab = ({ children, index }) => {
  const { activeIndex, setActiveIndex } = useContext(TabsContext);

  const handleClick = () => {
    setActiveIndex(index);
  };

  return (
    <button
      onClick={handleClick}
      className={`tab ${activeIndex === index ? 'active' : ''}`}
    >
      {children}
    </button>
  );
};

const TabPanel = ({ children, index }) => {
  const { activeIndex } = useContext(TabsContext);

  return activeIndex === index ? <div className="tab-panel">{children}</div> : null;
};

// Usage of the compound components
const CompountComponent = () => {
  return (
    <Tabs defaultIndex={0}>
      <TabList>
        <Tab index={0}>Tab 1</Tab>
        <Tab index={1}>Tab 2</Tab>
        <Tab index={2}>Tab 3</Tab>
      </TabList>
      <TabPanel index={0}>Content for Tab 1</TabPanel>
      <TabPanel index={1}>Content for Tab 2</TabPanel>
      <TabPanel index={2}>Content for Tab 3</TabPanel>
    </Tabs>
  );
};

export default CompountComponent;
