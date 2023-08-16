import { Product } from './product';

export class Order {
  #number;
  #items;
  #price;
  #prepTime;
  #finalizationTime;

  constructor(_number, _items) {
    this.#number = _number;
    this.#items = _items;
    this.#price = this.calculatePrice();
    this.#prepTime = this.calculatePrepTime();
    this.#finalizationTime = this.getFormattedTime(this.calculateFinalizationTime());
  }

  calculateFinalizationTime() {
    const now = new Date();
    const finalizationTime = new Date(now.getTime() + this.getPrepTime() * 60000);
    return finalizationTime;
  }

  getFormattedTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes}`;
  }

  calculatePrice() {
    let finalPrice = 0;
    this.#items.forEach((product) => {
      finalPrice += product.getPrice();
    });
    return finalPrice;
  }

  calculatePrepTime() {
    let totalPrepTime = 0;
    this.#items.forEach((product) => {
      totalPrepTime += product.getPrepTime();
    });
    return totalPrepTime;
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

  getPrice() {
    return this.#price;
  }

  getPrepTime() {
    return this.#prepTime;
  }

  getFinalizationTime() {
    return this.#finalizationTime;
  }
}
