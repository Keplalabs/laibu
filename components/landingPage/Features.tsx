import React from "react";
import Feature from "./Feature";
import { featuresProps } from "./propTypes";

const Features = (props: featuresProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 px-8 md:w-3/4 lg:w-2/3 mx-auto  mt-16 w-full justify-between">
      {props.features &&
        props.features.map((feature, i) => {
          return (
            <Feature
              key={i}
              title={feature.title}
              description={feature.description}
              iconUrl={feature.iconUrl}
            />
          );
        })}
    </div>
  );
};

export default Features;
