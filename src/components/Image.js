import React from "react";

function Image({ image, H = "auto", W = "1000" }) {
  return (
    <div>
      <img src={image} height={H} width={W} />
    </div>
  );
}

export default Image;
