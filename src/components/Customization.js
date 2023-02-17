import { useEffect } from "react";

export default function Customization() {
  useEffect(() => {
    window.scrollTo(0, 0);

    let closeButtonGem;
    let closeButtonMetal;
    let diamondColorsContainer;
    let ringColorsContainer;
    let diamondColorsContainers;
    setTimeout(() => {
      diamondColorsContainer = document.querySelector(".footer-container-diamond-color");
      ringColorsContainer = document.querySelector(".footer-container-ring-colors");
      diamondColorsContainers = document.querySelector(".footer-container-ring-colors");
      closeButtonGem = document.getElementById("Gem1");
      closeButtonMetal = document.getElementById("Metal1");

      closeButtonMetal.addEventListener("click", () => {
        closegems();
        closeMaterialTab();
        // isAutoRotateTrue();
      });
      closeButtonGem.addEventListener("click", () => {
        closegems();
        closeMaterialTab();
        // isAutoRotateTrue();
      });
    }, 1000);

    const canvasView = document.getElementById("webgi-canvas");
    const canvasContainer = document.getElementById("webgi-canvas-container");
    const buttonExit = document.querySelector(".button-exit");
    const CustomizerInterface = document.querySelector(".footer-container");
    let diamondColors = document.querySelector(".footer-diamond-colors");
    let ringColors = document.querySelector(".footer-ring-colors");
    let bodyDocument = document.body;
    let htmlDocument = document.documentElement;
    const sections = document.querySelector(".container-hide");
    function EnablePointerEvents() {
      buttonExit.style.pointerEvents = "all";
      canvasView.style.pointerEvents = "all";
      canvasContainer.style.pointerEvents = "all";
      diamondColors.style.pointerEvents = "all";
      ringColors.style.pointerEvents = "all";
    }

    function enableControllers() {
      buttonExit.classList.add("visible");
      CustomizerInterface.classList.remove("hidden");
      CustomizerInterface.classList.add("visible");
      // cameraControls();
    }

    function disablePointerEvents() {
      diamondColors.style.pointerEvents = "none";
      ringColors.style.pointerEvents = "none";
      buttonExit.style.pointerEvents = "none";
      canvasContainer.style.pointerEvents = "none";
    }

    function buttonExitFunc() {
      // scroller.enabled = true;

      bodyDocument.style.overflowY = "visible";
      htmlDocument.style.overflowY = "visible";
      sections.style.visibility = "visible";
      canvasView.style.pointerEvents = "all";
      canvasContainer.style.zIndex = "unset";
      document.body.style.cursor = "default";
      ringColorsContainer.style.opacity = "0";
      ringColorsContainer.style.visibility = "hidden";
      diamondColorsContainer.style.opacity = "0";
      diamondColorsContainer.style.visibility = "hidden";
    }

    function hideRingColorsContainer() {
      ringColorsContainer.style.opacity = "0";
      ringColorsContainer.style.visibility = "hidden";
      ringColorsContainer.style.pointerEvents = "none";
    }

    function hideDiamondColorsContainer() {
      diamondColorsContainer.style.opacity = "0";
      diamondColorsContainer.style.visibility = "hidden";
      diamondColorsContainer.style.pointerEvents = "none";
    }

    function closegems() {
      diamondColorsContainer.style.opacity = 0;
      diamondColorsContainer.style.visibility = "hidden";
      diamondColorsContainer.style.pointerEvents = "none";
    }

    function closeMaterialTab() {
      ringColorsContainer.style.opacity = 0;
      ringColorsContainer.style.visibility = "hidden";
      ringColorsContainer.pointerEvents = "none";
    }

    document.querySelector(".btn-customize").addEventListener("click", () => {
      document.documentElement.style.overflowY = "hidden";
      canvasContainer.style.cursor = "grab";
      canvasContainer.style.zIndex = "1";
      document.body.style.cursor = "grab";
      // scroller.enabled = false;
      // camViews.animateToView(camViews.camViews[3]);
      EnablePointerEvents();
      enableControllers();
    });

    buttonExit.addEventListener("click", () => {
      buttonExit.classList.remove("visible");
      CustomizerInterface.classList.remove("visible");
      CustomizerInterface.classList.add("hidden");
      diamondColorsContainer.classList.remove("visible");
      diamondColorsContainers.classList.remove("visible");
      disablePointerEvents();
      buttonExitFunc();
    });

    ringColors.addEventListener("click", () => {
      hideDiamondColorsContainer();
      // isAutoRotateFalse();
      diamondColorsContainers.style.visibility = "visible";
      diamondColorsContainers.style.pointerEvents = "all";
      diamondColorsContainers.style.opacity = "1";
      // setTimeout(() => {
      //   movetoRing();
      // }, 500);
    });

    diamondColors.addEventListener("click", () => {
      hideRingColorsContainer();
      // isAutoRotateFalse();
      diamondColorsContainer.style.visibility = "visible";
      diamondColorsContainer.style.pointerEvents = "all";
      diamondColorsContainer.style.opacity = "1";
      // setTimeout(() => {
      //   movetoDiamonds();
      // }, 500);
    });
  }, []);

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
