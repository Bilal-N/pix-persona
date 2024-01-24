export const Refresh = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 512 512"
    >
      <path
        d="M320,146s24.36-12-64-12A160,160,0,1,0,416,294"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth="32px"
      />
      <polyline
        points="256 58 336 138 256 218"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="48px"
      />
    </svg>
  );
};
