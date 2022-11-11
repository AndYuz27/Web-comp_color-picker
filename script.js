import CoordPicker from "./components/colorpicker/index.js";
import SliderColor from "./components/Slider/index.js"
import SliderColor1 from "./components/Slider_1/index.js"
if(!customElements.get("coord-picker")) {
    customElements.define("coord-picker", CoordPicker);
}
if(!customElements.get("slider-fff")) {
    customElements.define("slider-fff", SliderColor);
}
if(!customElements.get("slider-ffa")) {
    customElements.define("slider-ffa", SliderColor1);
}