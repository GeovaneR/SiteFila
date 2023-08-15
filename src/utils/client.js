export class Cliente {
    #name;

    constructor(_name) {
        this.#name = _name;
    }
    getName() {
        return this.#name;
    }
    setName(_newName) {
        this.#name = _newName;
    }

}