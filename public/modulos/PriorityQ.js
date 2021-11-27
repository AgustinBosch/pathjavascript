export default class PriorityQ {
    constructor() {
        this.items = [];
    }
    push(nodo) {
        if (!this.items.includes(nodo)) {
            let contain = false;
            let i = 0;

            while (i < this.items.length && !contain) {
                if (this.items[i].valor > nodo.valor) {
                    this.items.splice(i, 0, nodo);
                    contain = true;
                }
                i++
            }
            if (!contain) {
                this.items.push(nodo);
            }
        }
    }
    pushAll(array) {
        for (let i = 0; i < array.length; i++) {
            this.push(array[i]);
        }
    }
    shift() {
        return this.items.shift();
    }
    length() {
        return this.items.length;
    }
    empty() {
        return this.items.length === 0;
    }
}