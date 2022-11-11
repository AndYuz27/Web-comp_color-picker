import Tmp from "./template.js";

export default class SliderColor extends HTMLElement {
    static get observedAttributes() {
        return ["bg", "x", "y"]
    }
    attributeChangedCallback(name, oldV, newV) {
        switch(name){
            case "bg":
                break;
            default:
                    this.setPosition()

        }
    }
    set x(v){
        this.setAttribute("x", v)
    }
    get x(){
        return this.getAttribute("x");
    }
    set y(v){
        this.setAttribute("y", v)
    }
    get y(){
        return this.getAttribute("y");
    }
    set bg(v){
        this.setAttribute("bg", v)
    }
    get bg(){
        return this.getAttribute("bg");
    }
    connectedCallback() {
        this.innerHTML = Tmp.render();

    }
    handler(e) {
        
    }
    update(x, y) {
       
    }
    setPosition() {
        
    }


}