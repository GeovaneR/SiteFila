export class Product{
    #name;
    #price;
    #prepTime

    constructor(_name, _price, _prepTime){
        this.#name = _name;
        this.#price = _price;
        this.#prepTime = _prepTime;
    }

    getName() {
        return this.#name;
    }
    
    setName(_newName) {
        this.#name = _newName;
    }

    getPrice() {
        return this.#price;
    }
    
    setPrice(_newPrice) {
        this.#price = _newPrice;
    }

    getPrepTime() {
        return this.#prepTime;
    }

    setPrepTime(_newTemp) {
        this.#prepTime = _newTemp;
    }
}
