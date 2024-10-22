import React from "react";
import FeatureFlagProvider from "./FeatureFlagContext";
import NormalComponent from "./NormalComponent";


const ParentFeatureFlag = () => {
  return (
    <FeatureFlagProvider>
      <NormalComponent />
    </FeatureFlagProvider>
  );
};

export default ParentFeatureFlag;
