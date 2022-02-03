import React, { useState } from "react";

const Icon = ({ iname }) => {
  const [isHovered, setIsHovered] = useState(true);

  const toggleHover = () => setIsHovered(!isHovered);
  const classonHover =
    "devicon-" + iname + "-plain-wordmark colored technology";
  const classnotHover = `devicon-${iname}-plain-wordmark technology`;

  return (
    <i
      className={isHovered ? classonHover : classnotHover}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      onClick={toggleHover}
    ></i>
  );
};

export default Icon;
