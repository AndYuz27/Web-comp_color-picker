export default {
    render() {
        return `
            ${this.css()}
            ${this.html()}
        `
    },
    html(){
        return `
        <div class="overlay bg-color"></div>
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
        .bg-color{
            background-image: linear-gradient(to right, #f00 0%, #ff0, #0f0, #0ff ,#00f , #f0f, #f00);
        }
        </style>`
    }
}