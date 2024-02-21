import React from "react";
import Image from "./Image";

function Body({ features, image }) {
  console.log(features);

  return (
    <div id="content" className="main-content">
      <div className="features">
        {features.map((feature) => {
          return <h3> ⚪️ {feature}</h3>;
        })}
      </div>
      <Image image={image} H={"500"} W={"auto"} />
    </div>
  );
}

export default Body;
