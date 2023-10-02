const ArrowRight = ({width,height, fill}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '45'}
      height={height || '45'}
      viewBox="0 0 45 45"
      fill="none"
    >
      <g clipPath="url(#clip0_202_7438)">
        <rect width="45" height="45" fill={fill||"white"} />
        <path
          d="M26.129 23.4283L20.7327 28.8229C20.4959 29.059 20.1122 29.059 19.8749 28.8229C19.6381 28.5867 19.6381 28.203 19.8749 27.9668L24.8432 23.0003L19.8755 18.0338C19.6387 17.7976 19.6387 17.414 19.8755 17.1772C20.1122 16.941 20.4965 16.941 20.7333 17.1772L26.1296 22.5717C26.3628 22.8055 26.3628 23.1952 26.129 23.4283Z"
          fill="#767676"
        />
      </g>
      <defs>
        <clipPath id="clip0_202_7438">
          <rect
            width="45"
            height="45"
            fill="white"
            transform="matrix(1 0 0 -1 0 45)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
export default ArrowRight
