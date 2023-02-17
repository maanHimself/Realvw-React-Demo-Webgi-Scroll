import {
  ViewerApp,
  AssetManagerPlugin,
  timeout,
  TonemapPlugin,
  mobileAndTabletCheck,
  CameraViewPlugin,
  MaterialConfiguratorBasePlugin,
  addBasePlugins,
  EasingFunctions,
  ScrollableCameraViewPlugin,
} from "webgi";
import CustomMaterialConfiguratorPlugin from "./CustomMaterialConfiguratorPlugin";
import gsap from "gsap";

export default async function setupViewer() {
  // Initialize the viewer
  const viewer = new ViewerApp({
    canvas: document.getElementById("webgi-canvas"),
    useRgbm: true,
  });

  // Add some plugins
  const manager = await viewer.addPlugin(AssetManagerPlugin);
  const scroller = await viewer.addPlugin(ScrollableCameraViewPlugin);
  await viewer.addPlugin(CustomMaterialConfiguratorPlugin);

  const camera = viewer.scene.activeCamera;

  // Add all the plugins at once
  await addBasePlugins(viewer);

  const camViews = viewer.getPlugin(CameraViewPlugin);

  // This must be called after adding any plugin that changes the render pipeline.
  viewer.renderer.refreshPipeline();

  // Load a 3d model configured in the webgi editor using MaterialConfiguratorPlugin
  await manager.addFromPath("/scene.glb");

  viewer.getPlugin(TonemapPlugin).contrast = 1.06;

  // ---------------------------------  WEBGi loader ---------------------------------  //

  const importer = manager.importer;

  let loaderFix = document.querySelector(".loader");

  importer.addEventListener("onProgress", (ev) => {
    const progressRatio = ev.loaded / ev.total;
    document.querySelector(".progress").setAttribute("style", `transform: scaleX(${progressRatio})`);
  });

  importer.addEventListener("onLoad", (ev) => {
    if (firstLooad) {
      setupScrollAnimation();
      firstLooad = false;
    } else {
      loaderFix.style.opacity = "0";
      gsap.to(".loader", {
        x: "100%",
        duration: 0.1,
        ease: "power4.inOut",
        delay: 1,
      });
    }
  });

  viewer.renderer.refreshPipeline();

  await timeout(350);

  // ---------------- ------------------------ Custom Buttons ---------------- ------------------------ //

  const buttonExit = document.querySelector(".button-exit");
  const isMobile = mobileAndTabletCheck();
  let diamondColors = document.querySelector(".footer-diamond-colors");
  let ringColors = document.querySelector(".footer-ring-colors");
  let htmlDocument = document.documentElement;
  let firstLooad = true;
  const setupScrollAnimation = () => {
    htmlDocument.style.overflowY = "scroll";
    loaderFix.style.opacity = "0";
    loaderFix.style.visibility = "hidden";

    document.querySelector(".btn-customize").addEventListener("click", () => {
      scroller.enabled = false;
      camViews.animateToView(camViews.camViews[3]);
      cameraControls();
    });

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

    // ----------------------------   CUSTOMIZE EXIT

    buttonExit.addEventListener("click", () => {
      scroller.enabled = true;
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

    // ---------------------- CUSTOMIZE THE RING COLORS / PROPERTIES
    ringColors.addEventListener("click", () => {
      isAutoRotateFalse();
      setTimeout(() => {
        movetoRing();
      }, 500);
    });

    diamondColors.addEventListener("click", () => {
      isAutoRotateFalse();
      setTimeout(() => {
        movetoDiamonds();
      }, 500);
    });

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

    const closeButtonMetal = document.getElementById("Metal1");
    closeButtonMetal.addEventListener("click", () => {
      isAutoRotateTrue();
    });
    const closeButtonGem = document.getElementById("Gem1");
    closeButtonGem.addEventListener("click", () => {
      isAutoRotateTrue();
    });
  };
  setupScrollAnimation();
}
