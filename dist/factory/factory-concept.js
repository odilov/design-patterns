"use strict";
// the factory concept
Object.defineProperty(exports, "__esModule", { value: true });
class ConcreteProduct {
    constructor() {
        this.name = "";
    }
}
class ConcreteProductA extends ConcreteProduct {
    constructor() {
        super();
        this.name = "ConcreteProductA";
    }
}
class ConcreteProductB extends ConcreteProduct {
    constructor() {
        super();
        this.name = "ConcreteProductB";
    }
}
class ConcreteProductC extends ConcreteProduct {
    constructor() {
        super();
        this.name = "ConcreteProductC";
    }
}
class Creator {
    static create(param) {
        if (param === "a") {
            return new ConcreteProductA();
        }
        else if (param === "b") {
            return new ConcreteProductB();
        }
        else {
            return new ConcreteProductC();
        }
    }
}
// usage
const PRODUCT = Creator.create("c");
console.log(PRODUCT.name);
