import React, { useContext } from "react";
import { FeatureFlagContext } from "./FeatureFlagProvider";

const FeatureFlag = () => {
  const { features } = useContext(FeatureFlagContext);
  return (
    <>
      <Features
        feature="isGooglePayEnabled"
        value={features.isGooglePayEnabled}
      >
        Google
      </Features>
      <Features feature="isApplePayEnabled" value={true}>
        Apple
      </Features>
    </>
  );
};

const Features = ({ feature, children, value }) => {
  const { features } = useContext(FeatureFlagContext);
  console.log(features[feature], "Hello", value)
  return <div>{features[feature] === value ? children : null}</div>;
};

export default FeatureFlag;
