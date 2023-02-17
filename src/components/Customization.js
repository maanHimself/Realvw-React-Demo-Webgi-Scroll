import { useEffect } from "react";

export default function Customization() {
  useEffect(() => {}, []);

  return (
    <>
      <div className="footer-container hidden">
        <li id="nav-tabs-inner" className="footer-diamond-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40">
            <g transform="translate(-1143 -1225)">
              <g transform="translate(1143.808 1227.616)">
                <path
                  d="M15.6,3,21,13.795l-9,21.59"
                  transform="translate(7.192 0)"
                  fill="none"
                  stroke="#5a3540"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                />
                <path
                  d="M12.4,3,7,13.795l9,21.59"
                  transform="translate(3.197 0)"
                  fill="none"
                  stroke="#5a3540"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                />
                <path
                  d="M28.188,3H10.2L3,13.795l16.192,21.59,16.192-21.59Z"
                  transform="translate(0 0)"
                  fill="none"
                  stroke="#5a3540"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                />
                <path
                  d="M3,9H35.384"
                  transform="translate(0 4.795)"
                  fill="none"
                  stroke="#5a3540"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                />
              </g>
              <path d="M24,44A20,20,0,1,0,4,24,20,20,0,0,0,24,44Z" transform="translate(1139 1221)" fill="none" />
            </g>
          </svg>
        </li>
        <li id="nav-tabs-inner" className="footer-ring-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 48 48">
            <rect width={48} height={48} fill="rgba(255,255,255,0.01)" />
            <path
              d="M24,44A20,20,0,1,0,4,24,20,20,0,0,0,24,44Z"
              fill="none"
              stroke="#5a3540"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3.5}
            />
            <path
              d="M24,36h0A12,12,0,0,0,36,24"
              transform="translate(48 48) rotate(180)"
              fill="none"
              stroke="#5a3540"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3.5}
            />
          </svg>
        </li>

        <div id="configurator"></div>
      </div>
      <button className="btn-customize button-exit">EXIT</button>
    </>
  );
}
