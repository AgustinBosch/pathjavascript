import PriorityQ from "./PriorityQ.js";
import Nodo from "./Nodo.js";


export default function dijkstra(grid, starNode, endNode) {
    if (starNode.id === endNode.id) {
        return starNode;
    }

    let visitados = [];
    let porVisitar = new PriorityQ();
    let encontrado = false;
    starNode.start();
    endNode.end();
    let aux = starNode;
    porVisitar.pushAll(starNode.visitarVecinosNoVisitados(grid));
    let i = 0;
    while (!porVisitar.empty() && !encontrado) {
        let visitar = porVisitar.shift();
        if (visitar.soyFinal()) {
            encontrado = true;
            console.log("el final es: " + visitar.id);
            backtrack(visitar, i);
            break;
        }
        i++;
        //visitar.fill();
        task(visitar, i);
        //visitar.fill();
        porVisitar.pushAll(visitar.visitarVecinosNoVisitados(grid));
        aux = visitar;
    }
}

function task(v, i) {
    setTimeout(function () {
        v.fill();
    }, 25 * i);
}

function backtrack(nodo, i) {
    let aux = nodo.padre;
    while (aux.padre != null) {
        task2(aux, i)
        aux = aux.padre;
        i++;
    }
}
function task2(v, i) {
    setTimeout(function () {
        v.camino();
    }, 25 * i);
}

// export default function dijkstra(grid, starNode, endNode) {
//     if (starNode.id === endNode.id) {
//         return starNode;
//     }

//     let visitados = [];
//     let porVisitar = new PriorityQ();
//     let encontrado = false;
//     starNode.start();
//     endNode.end();
//     let aux = starNode;
//     porVisitar.pushAll(starNode.vecinosNoVisitados(grid));
//     let i = 0;
//     while (!porVisitar.empty() && !encontrado) {
//         let visitar = porVisitar.shift();
//         visitar.visitar(aux);
//         if (visitar.soyFinal()) {
//             encontrado = true;
//             console.log("el final es: " + visitar.id);
//             break;
//         }
//         i++;
//         task(visitar, i);
//         //visitar.fill();
//         porVisitar.pushAll(visitar.vecinosNoVisitados(grid));
//         aux = visitar;
//     }
// }

// function task(i, h) {
//     setTimeout(function () {
//         i.fill();
//     }, 50 * h);
// }