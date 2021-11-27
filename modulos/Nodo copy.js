export default class Nodo {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.id = (x + "_" + y);
        this.status = "empty";
        this.valor = Infinity;
        this.visitado = false;
        this.padre = null;
    }

    crearTd() {
        let td = document.createElement("td");
        td.setAttribute("class", this.status);
        td.setAttribute("id", this.id);
        td.setAttribute("title", this.id)
        td.addEventListener("click", this.click.bind(this));
        return td;
    }

    click(a) {
        this.pared();
        console.log(this)
    }

    updateCass() {
        let td = document.getElementById(this.id);
        td.setAttribute("class", this.status);
        if (this.valor != Infinity) {
            td.textContent = this.valor;
        }
    }
    soyFinal() {
        return this.status === "end"
    }
    empty() {
        this.status = "empty";
        this.updateCass();
    }

    pared() {
        this.status = "pared";
        this.updateCass();
    }

    camino() {
        this.status = "camino";
        this.updateCass();
    }

    fill() {
        this.status = "fill";
        this.updateCass();
    }

    start() {
        this.valor = 0;
        this.visitado = true;
        this.status = "start";
        this.updateCass();
    }

    end() {
        this.status = "end";
        this.updateCass();
    }

    vecinos(grid) {
        let vecinos = [];
        if (this.y > 0) {
            vecinos.push(grid[this.y - 1][this.x])
        }
        if (this.x > 0) {
            vecinos.push(grid[this.y][this.x - 1])
        }
        if (this.x < grid[this.y].length - 1) {
            vecinos.push(grid[this.y][this.x + 1])
        }
        if (this.y < grid.length - 1) {
            vecinos.push(grid[this.y + 1][this.x])
        }
        return vecinos;
    }

    vecinosNoVisitados(grid) {
        let vecinos = [];
        if (this.y > 0) {
            if (!grid[this.y - 1][this.x].visitado) {
                vecinos.push(grid[this.y - 1][this.x])
            }
        }
        if (this.x > 0) {
            if (!grid[this.y][this.x - 1].visitado) {
                vecinos.push(grid[this.y][this.x - 1])
            }
        }
        if (this.x < grid[this.y].length - 1) {
            if (!grid[this.y][this.x + 1].visitado) {
                vecinos.push(grid[this.y][this.x + 1])
            }
        }
        if (this.y < grid.length - 1) {
            if (!grid[this.y + 1][this.x].visitado) {
                vecinos.push(grid[this.y + 1][this.x])
            }
        }
        return vecinos;
    }

    visitar(desde) {
        this.valor = desde.valor + 1;
        this.visitado = true;
        this.padre = desde;
    }


    visitarVecinosNoVisitados(grid) {
        let vecinos = [];
        let aux;
        if (this.y > 0) {
            aux = grid[this.y - 1][this.x];
            if (!aux.visitado && aux.status !== "pared") {
                aux.visitar(this);
                vecinos.push(aux)
            }
        }
        if (this.x > 0) {
            aux = grid[this.y][this.x - 1];
            if (!aux.visitado && aux.status !== "pared") {
                aux.visitar(this);
                vecinos.push(aux)
            }
        }
        if (this.x < grid[this.y].length - 1) {
            aux = grid[this.y][this.x + 1];
            if (!aux.visitado && aux.status !== "pared") {
                aux.visitar(this);
                vecinos.push(aux)
            }
        }
        if (this.y < grid.length - 1) {
            aux = grid[this.y + 1][this.x];
            if (!aux.visitado && aux.status !== "pared") {
                aux.visitar(this);
                vecinos.push(aux)
            }
        }
        return vecinos;
    }
}