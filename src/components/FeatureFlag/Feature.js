import { useContext } from "react";
import { FeatureFlag } from "./FeatureFlagContext";

export const Feature = ({ features, children }) => {
  const { feature } = useContext(FeatureFlag);
  return feature[features] ? children : null;
};
