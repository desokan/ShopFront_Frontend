import * as React from 'react'
const BagIcon = ({ fill }) => (

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 16 16"
    fill="none"
    style={{marginTop:'3px'}}
  >
    <path
      d="M14.125 3.75H12.2204C11.9722 1.64131 10.1743 0 8 0C5.82572 0 4.02784 1.64131 3.77956 3.75H1.875C1.52981 3.75 1.25 4.02981 1.25 4.375V15.375C1.25 15.7202 1.52981 16 1.875 16H14.125C14.4702 16 14.75 15.7202 14.75 15.375V4.375C14.75 4.02981 14.4702 3.75 14.125 3.75ZM8 1.25C9.48388 1.25 10.7193 2.33297 10.9581 3.75H5.04191C5.28066 2.33297 6.51612 1.25 8 1.25ZM13.5 14.75H2.5V5H3.75V6.875C3.75 7.22019 4.02981 7.5 4.375 7.5C4.72019 7.5 5 7.22019 5 6.875V5H11V6.875C11 7.22019 11.2798 7.5 11.625 7.5C11.9702 7.5 12.25 7.22019 12.25 6.875V5H13.5V14.75Z"
      fill={fill || 'black'}
    />
  </svg>

)
export default BagIcon
