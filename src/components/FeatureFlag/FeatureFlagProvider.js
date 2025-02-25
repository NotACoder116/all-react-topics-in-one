import React, { createContext, useState } from 'react';

export const FeatureFlagContext = createContext({});

const FeatureFlagProvider = ({children}) => {
    const [features, setFeatures] = useState({
        isGooglePayEnabled: true,
        isApplePayEnabled: false
    });
  return (
    <FeatureFlagContext.Provider value={{ features, setFeatures }}>{children}</FeatureFlagContext.Provider>
  )
}

export default FeatureFlagProvider