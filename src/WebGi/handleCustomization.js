import { ScrollableCameraViewPlugin, CameraViewPlugin, EasingFunctions, mobileAndTabletCheck, timeout } from "webgi";

export default async function handleCustomization(viewer) {
  const diamondColorsContainer = document.querySelector(".footer-container-diamond-color");
  const ringColorsContainer = document.querySelector(".footer-container-ring-colors");
  const diamondColorsContainers = document.querySelector(".footer-container-ring-colors");
  const closeButtonGem = document.getElementById("Gem1");
  const closeButtonMetal = document.getElementById("Metal1");

  const scroller = viewer.getPlugin(ScrollableCameraViewPlugin);
  const camera = viewer.scene.activeCamera;
  const camViews = viewer.getPlugin(CameraViewPlugin);
  const isMobile = mobileAndTabletCheck();

  closeButtonMetal.addEventListener("click", () => {
    closegems();
    closeMaterialTab();
    isAutoRotateTrue();
  });
  closeButtonGem.addEventListener("click", () => {
    closegems();
    closeMaterialTab();
    isAutoRotateTrue();
  });

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
    cameraControls();
  }

  function cameraControls() {
    const options = viewer.scene.activeCamera.getCameraOptions();
    viewer.scene.activeCamera.setCameraOptions(options);
    const controls = viewer.scene.activeCamera.controls;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.minDistance = 3;
    controls.maxDistance = 15;
    camera.setCameraOptions({ controlsEnabled: true });
  }

  function disablePointerEvents() {
    diamondColors.style.pointerEvents = "none";
    ringColors.style.pointerEvents = "none";
    buttonExit.style.pointerEvents = "none";
    canvasContainer.style.pointerEvents = "none";
  }

  function buttonExitFunc() {
    scroller.enabled = true;

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
    scroller.enabled = false;
    camViews.animateToView(camViews.camViews[3]);
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
    isAutoRotateFalse();
    diamondColorsContainers.style.visibility = "visible";
    diamondColorsContainers.style.pointerEvents = "all";
    diamondColorsContainers.style.opacity = "1";
    setTimeout(() => {
      movetoRing();
    }, 500);
  });

  diamondColors.addEventListener("click", () => {
    hideRingColorsContainer();
    isAutoRotateFalse();
    diamondColorsContainer.style.visibility = "visible";
    diamondColorsContainer.style.pointerEvents = "all";
    diamondColorsContainer.style.opacity = "1";
    setTimeout(() => {
      movetoDiamonds();
    }, 500);
  });

  function isAutoRotateFalse() {
    const options = viewer.scene.activeCamera.getCameraOptions();
    viewer.scene.activeCamera.setCameraOptions(options);
    const controls = viewer.scene.activeCamera.controls;
    controls.autoRotate = false;
  }

  function isAutoRotateTrue() {
    const controls = viewer.scene.activeCamera.controls;
    controls.autoRotate = true;
  }

  async function movetoRing() {
    let moveRing = camViews.getCurrentCameraView(viewer.scene.activeCamera);
    moveRing.position.set(-2.25, -0.18, 4.56);
    if (isMobile === true) {
      moveRing.position.set(-5, 0.38, 8);
    }
    moveRing.target.set(0.2, 0.28, -0.02);
    await camViews.animateToView(moveRing, 1000, EasingFunctions.easeInOut);
  }
  async function movetoDiamonds() {
    let moveDiamonds = camViews.getCurrentCameraView(viewer.scene.activeCamera);
    moveDiamonds.position.set(1.59, 0.65, 5.05);
    if (isMobile === true) {
      moveDiamonds.position.set(1.8, 1.2, 8.4);
    }
    moveDiamonds.target.set(-0.1, 0.02, 0.4);
    await camViews.animateToView(moveDiamonds, 1000, EasingFunctions.easeInOut);
  }
}
