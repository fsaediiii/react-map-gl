import React from "react";
const Icon = `
M12 0c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 
1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 
11c-1.657 0-3-1.343-3-3s1.342-3 3-3 3 1.343 3 3-1.343 3-3 3z
`;

const markerStyle = {
  fill: "#d00",
  stroke: "none",
};

const Marker = (props) => {
  const { size, clicked } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={markerStyle}
      onClick={clicked}
    >
      <path d={Icon} />
    </svg>
  );
};
export default Marker;
