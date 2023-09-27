import * as React from "react";
const BagIcon = (props) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="20px"
    height="20px"
    viewBox="0 0 64 64"
    enableBackground="new 0 0 64 64"
    xmlSpace="preserve"
    {...props}
  >
    <polygon
      fill="none"
      stroke="#000000"
      strokeWidth={2}
      strokeMiterlimit={10}
      points="44,18 54,18 54,63 10,63 10,18 20,18 "
    />
    <path
      fill="none"
      stroke="#000000"
      strokeWidth={2}
      strokeMiterlimit={10}
      d="M22,24V11c0-5.523,4.477-10,10-10s10,4.477,10,10v13 "
    />
  </svg>
);
export default BagIcon;
