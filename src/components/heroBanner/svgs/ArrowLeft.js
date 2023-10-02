const ArrowLeft = ({ width, height,fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '45'}
      height={height || '45'}
      viewBox="0 0 45 45"
      fill="none"
    >
      <g clip-path="url(#clip0_202_7442)">
        <rect y="-0.000244141" width="45" height="45" fill={fill||"white"} />
        <path
          d="M19.5683 22.5714L24.9646 17.1769C25.2014 16.9407 25.585 16.9407 25.8224 17.1769C26.0592 17.4131 26.0592 17.7967 25.8224 18.0329L20.8541 22.9994L25.8218 27.966C26.0586 28.2021 26.0586 28.5858 25.8218 28.8226C25.585 29.0588 25.2008 29.0588 24.964 28.8226L19.5677 23.428C19.3345 23.1943 19.3345 22.8046 19.5683 22.5714Z"
          fill="#767676"
        />
      </g>
      <defs>
        <clipPath id="clip0_202_7442">
          <rect
            width="45"
            height="45"
            fill="white"
            transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 45 0)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
export default ArrowLeft
