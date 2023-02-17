export default function Loader() {
  return (
    <div className="loader">
      <svg width={48} height={48} fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="a"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x={9}
          y={3}
          width={32}
          height={42}
        >
          <path
            d="M25 44a15 15 0 1 0 0-30 15 15 0 0 0 0 30Z"
            stroke="#fff"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="m18 8 3-4h8l3 4-7 6-7-6Z" fill="#555" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" />
        </mask>
        <g mask="url(#a)">
          <path d="M0 0h48v48H0V0Z" fill="#52322B" />
        </g>
      </svg>
      <p>Loading... Please wait</p>
      <div className="progress"></div>
    </div>
  );
}
