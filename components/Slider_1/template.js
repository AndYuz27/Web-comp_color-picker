export default {
    render() {
        return `
            ${this.css()}
            ${this.html()}
        `
    },
    html(){
        return `
        <div class="overlay bg-transparent"></div>
        <div class="slider-thumb"></div>
        `
    },
    css() {
        return `
        <style>
        .overlay{
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 255, 0.78);

        }
        .slider-thumb{
            position: absolute;
            height: 100%;
            border: 2px solid #fff;
            box-shadow: 0 0 2px #000;
            top: -2px;
            left: calc(50% - 5px);
        }
        .bg-transparent {
            background-image: linear-gradient(to right, transparent, #00f),
             linear-gradient(45deg, #ccc 25%, transparent 25%),
            linear-gradient(-45deg, #ccc 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #ccc 75%),
            linear-gradient(-45deg, transparent 75%, #ccc 75%);
            background-size: cover, 10px 10px, 10px 10px, 10px 10px, 10px 10px, 10px 10px;
            background-position: center, 0 0, 0 5px, 5px -5px, -5px 0;
        }
        </style>`
    }
}