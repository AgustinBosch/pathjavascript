import Nodo from "./modulos/Nodo.js";
import dijkstra from "./modulos/dijkstra.js";

window.mouseAbajo = false;

function hacerGrid(celdasX, celdasY) {
    let array = new Array(celdasY);
    for (let i = 0; i < celdasY; i++) {
        array[i] = new Array(celdasX);
        for (let j = 0; j < celdasX; j++) {
            let n = new Nodo(j, i);
            array[i][j] = n;
        }
    }
    return array;
}


function visualGrid(array) {
    let div = document.querySelector("#grid");
    let tabla = document.createElement("table");

    for (let i = 0; i < array.length; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < array[i].length; j++) {
            tr.appendChild(array[i][j].crearTd())
        }
        tabla.appendChild(tr);
    }
    div.appendChild(tabla);
}


let x = 30;
let y = 20;
let array = hacerGrid(x, y);
visualGrid(array);
array[6][3].start();
array[11][18].end();


let boton = document.querySelector("#b1");
let algo = function () {
    dijkstra(array, array[6][3], array[11][18]);
}
boton.addEventListener("click", algo);

// let botonreinicio = document.querySelector("#b2");
// let algo2 = function () {
//     reiniciar();
// }
// botonreinicio.addEventListener("click", algo2);

//array[0][0].start();
//array[y - 1][x - 1].end();


// let pq = new PriorityQ();

// let a = array[0][0];
// a.fill();
// array[1][0].visitado = true;
// array[0][1].visitado = true;
// let vecinos = a.vecinosNoVisitados(array);
// pq.pushAll(vecinos);
// console.log(vecinos);
// for (let i = 0; i < vecinos.length; i++) {
//     pq.push(vecinos[i]);
//     vecinos[i].fill();
// }
// console.log(pq);

