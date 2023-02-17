import { MaterialConfiguratorBasePlugin } from "webgi";

export default class CustomMaterialConfiguratorPlugin extends MaterialConfiguratorBasePlugin {
  // This must be set to exactly this.
  static PluginType = "MaterialConfiguratorPlugin";

  // this function is automatically called when an object is loaded with some material variations
  async _refreshUi() {
    if (!(await super._refreshUi())) return false; // check if any data is changed.
    const configuratorDiv = document.getElementById("configurator");

    configuratorDiv.innerHTML = "";
    let buttonid = 0;

    for (const variation of this.variations) {
      buttonid = buttonid + 1;
      const container = document.createElement("div");
      container.classList.add("variations");
      container.classList.add(
        variation.title === "Gem" ? "footer-container-diamond-color" : "footer-container-ring-colors"
      );
      container.id = variation.title;
      // container.textContent = variation.title;
      configuratorDiv.appendChild(container);

      variation.materials.map((material) => {
        // material is the variation that can be applied to an object

        let image;
        // if (!variation.preview.startsWith('generate:')) {
        //     const pp = material[variation.preview] || '#ff00ff'
        //     image = pp.image || pp
        // }

        // callback to change the material variations
        const onClick = () => {
          document.querySelectorAll(".configurator-button").forEach((el) => {
            el.classList.remove("active");
          });
          document.getElementById(material.name).classList.add("active");
          this.applyVariation(variation, material.uuid);
        };
        // Generate a UI from this data.
        // variations
        const button = document.createElement("li");
        button.classList.add("configurator-button");
        button.id = material.name;
        button.innerHTML = `
                      <div id="tooltipOne" class="tooltip">
                      ${material.name}
                      </div>
                      <img alt="${material.name}" width="40" height="40" src="/images/${material.name}.png">`;
        button.style.position = "relative";
        button.onclick = onClick;
        container.append(button);
      });
      const closeButton = document.createElement("li");
      closeButton.id = variation.uuid + "1";
      closeButton.style.position = "relative";
      closeButton.innerHTML = `<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM15 9l-6 6M9 9l6 6" stroke="#52322B" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
      container.append(closeButton);
    }
    return true;
  }
}
