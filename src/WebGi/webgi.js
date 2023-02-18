import {
  ViewerApp,
  AssetManagerPlugin,
  timeout,
  TonemapPlugin,
  addBasePlugins,
  ScrollableCameraViewPlugin,
} from "webgi";
import CustomMaterialConfiguratorPlugin from "./CustomMaterialConfiguratorPlugin";
import handleCustomization from "./HandleCustomization";

export default async function setupViewer(canvas) {
  // Initialize the viewer
  const viewer = new ViewerApp({
    canvas: canvas.current,
    useRgbm: true,
  });

  // Add some plugins
  const manager = await viewer.addPlugin(AssetManagerPlugin);
  await viewer.addPlugin(ScrollableCameraViewPlugin);
  await viewer.addPlugin(CustomMaterialConfiguratorPlugin);

  // Add all the plugins at once
  await addBasePlugins(viewer);

  // This must be called after adding any plugin that changes the render pipeline.
  viewer.renderer.refreshPipeline();

  viewer.getPlugin(TonemapPlugin).contrast = 1.06;

  // ---------------------------------  WEBGi loader ---------------------------------  //

  const importer = manager.importer;

  let loaderFix = document.querySelector(".loader");

  importer.addEventListener("onProgress", (ev) => {
    const progressRatio = ev.loaded / ev.total;
    document.querySelector(".progress").setAttribute("style", `transform: scaleX(${progressRatio})`);
  });

  importer.addEventListener("onLoad", async (ev) => {
    await timeout(500);

    handleCustomization(viewer);
    document.documentElement.style.overflowY = "scroll";
    loaderFix.style.opacity = "0";
    loaderFix.style.visibility = "hidden";
  });

  // Load a 3d model configured in the webgi editor using MaterialConfiguratorPlugin
  await manager.addFromPath("/scene.glb");
}
