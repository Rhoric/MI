// document.getElementById("black");
// document.querySelector("#black .red");

import { Color, colorModel } from "/color.mjs";
import * as Colors from "/colorsLibrary.mjs";
function main() {

    ////var es global
    //var Canvas = Document.querySelector("#GL");

    ////Let es local
    //let Canvas = Document.querySelector("#GL");

    //const es constante
    const Canvas = document.querySelector("#GL");
    const cColor = Colors.azulchidito;

    try {
        const gl = Canvas.getContext("webgl");
        if (gl === null) {
            throw "No se inicializo WebGL";
        }
        gl.clearColor(cColor.r, cColor.g, cColor.b, cColor.a);
        gl.clear(gl.COLOR_BUFFER_BIT);

    }
    catch (error) {
        console.error(error);
    }
}
window.onload = main;
