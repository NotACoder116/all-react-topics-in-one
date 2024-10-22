import { createContext, useState } from "react";

export const FeatureFlag = createContext({});

const FeatureFlagProvider = ({ children }) => {
  const [feature, setFeature] = useState({
    isGooglePayEnabled: true,
    isApplePayEnabled: false,
  });

  const handleToggle = () => {
    setFeature({
        isGooglePayEnabled: !feature.isGooglePayEnabled,
        isApplePayEnabled: !feature.isApplePayEnabled
    });
  }

  return (
    <>
      <FeatureFlag.Provider value={{ feature }}>
        {children}
      </FeatureFlag.Provider>
      <button className="px-3 py-3 bg-cyan-400 rounded-md" onClick={handleToggle}>Toggle Values</button>
    </>
  );
};

export default FeatureFlagProvider;
