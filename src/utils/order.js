class Order {
  #number;
  #items;
  #preparationTime;
  #finalizationTime;

  constructor(_number, _items, _preparationTime, _finalizationTime) {
    this.#number = _number;
    this.#items = _items;
    this.#preparationTime = _preparationTime;
    this.#finalizationTime = _finalizationTime;
  }

  getNumber() {
    return this.#number;
  }

  setNumber(_newNumber) {
    this.#number = _newNumber;
  }

  getItems() {
    return this.#items;
  }

  setItems(_newItems) {
    this.#number = _newItems;
  }

  getPreparationTIme() {
    return this.#preparationTime;
  }

  setPreparationTime(_newPreparationTime) {
    this.#preparationTime = _newPreparationTime;
  }

  getFinalizationTime() {
    return this.#finalizationTime;
  }

  setFinalizationTime(_newFinalizationTime) {
    this.#finalizationTime = _newFinalizationTime;
  }
}