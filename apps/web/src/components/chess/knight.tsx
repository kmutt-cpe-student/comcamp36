import { type SVGProps } from "react";

const Knight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <path
        className="fill-[#F7941D]"
        d="M19.13,19.86l0.02,12.62c0,0-10.6-2.27-16.13-3.41c0,0,7.66-2.94,11.38-3.78c0,0-2.67-8.34,4.72-5.7"
      />
      <path
        className="fill-[#F8F8F8] stroke-2 stroke-[#464646]"
        style={{
          strokeMiterlimit: 10,
        }}
        d="M81.77,45.24c0,0-0.57,33.07-27.07,33.07s-26.98-12-26.98-17.25s5.53-20.49,5.15-24.21c-0.38-3.72-11.53-2.09-13.48-5.01c-1.96-2.9-2.85-9.14-0.17-11.34c2.67-2.18,10.08-2.33,15.85-0.67c5.77,1.67,10.57,9.1,11.39,13.01c0.56,2.69,1.57,7.91,2.84,11.63c6.09-3.09,14.67-5.6,25.24-3.9c0,0,0.54,2.4-0.08,5.92C78.68,45.83,81.77,45.24,81.77,45.24z"
      />
      <path
        className="fill-none stroke-2 stroke-[#464646]"
        strokeLinecap="round"
        style={{
          strokeMiterlimit: 10,
        }}
        d="M49.31,44.49c-6.67,3.38-10.35,7.47-10.35,7.47"
      />
      <path
        className="fill-[#F8F8F8] stroke-2 stroke-[#464646]"
        style={{
          strokeMiterlimit: 10,
        }}
        d="M65.31,73.96c-6.47,0-15.26,0-15.26,0s-8.79,0-15.26,0s-14.23,2.89-14.23,7.53s0,9.36,0,9.36h29.49h29.49c0,0,0-4.72,0-9.36S71.77,73.96,65.31,73.96z"
      />
      <circle className="fill-[#464646]" cx="23.86" cy="25.11" r="1.74" />
      <path
        className="fill-none stroke-2 stroke-[#464646]"
        strokeLinecap="round"
        style={{
          strokeMiterlimit: 10,
        }}
        d="M74.47,46.52c-1.01,5.78-5.08,14.62-19.64,21.02"
      />
    </g>
  </svg>
);

export default Knight;
