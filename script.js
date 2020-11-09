'use strict';
//Learn "CLASS"


class Rectangle {

    constructor(height, weight) {
        //this is "super();"
        this.height = height;
        this.weight = weight;
    }

    calcArea() {
        return this.height * this.weight;
    }
}

//new class extends for Rectangle
class ColoredRectangleWithText extends Rectangle {
    constructor(height, weight, text, bgColor) {
        //must stay first this say EXTENDS all constroct for parent class
        super(height, weight);
        //other property
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProperty(){
        console.log(`Text: ${this.text}, colorBG: ${this.bgColor}`);
    }
}


const p1 = new Rectangle(100, 32);
const p2 = new Rectangle(530, 86);

console.log(p1.calcArea());
console.log(p2.calcArea());

const p3 = new ColoredRectangleWithText(23,42,"WOW THIS TEXT", "red");
p3.showMyProperty();
console.log(p3.calcArea());
