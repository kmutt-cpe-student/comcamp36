import { type SVGProps } from "react";

const Bishop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <path
        className="fill-[#F7941D]"
        d="M45.89,9.28l-3.21,11.88c0,0-11.22-5.35-17.08-8.1c0,0,9.28-0.44,13.64-0.11c0,0-0.82-8.65,6.72-3.93"
      />
      <g>
        <path
          className="fill-[#F8F8F8] stroke-2 stroke-[#464646]"
          style={{
            strokeMiterlimit: 10,
          }}
          d="M60.31,24.31c-4.49,9.03-6.73,18.8-5.52,28.25h-9.57C44.8,38.23,48.3,25.37,57.4,14.06c-1.17-2.95-4.03-5.04-7.4-5.04c-4.39,0-7.96,3.56-7.96,7.96c0,1.59,0.47,3.07,1.28,4.31c-8.22,6.3-20.33,18.92-17.81,35.43C29,79.54,50,77.07,50,77.07s21,2.47,24.49-20.34C76.66,42.53,68,31.21,60.31,24.31z"
        />
      </g>
      <path
        className="fill-[#F8F8F8] stroke-2 stroke-[#464646]"
        style={{
          strokeMiterlimit: 10,
        }}
        d="M65.26,73.96c-6.47,0-15.26,0-15.26,0s-8.79,0-15.26,0s-14.23,2.89-14.23,7.53s0,9.36,0,9.36H50h29.49c0,0,0-4.72,0-9.36S71.72,73.96,65.26,73.96z"
      />
      <circle className="fill-[#464646]" cx="48.26" cy="15.01" r="1.74" />
    </g>
  </svg>
);

export default Bishop;
