export const BackArrow = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 512 512"
    >
      <polyline
        points="244 400 100 256 244 112"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="48px"
      />
      <line
        x1="120"
        y1="256"
        x2="412"
        y2="256"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="48px"
      />
    </svg>
  );
};
