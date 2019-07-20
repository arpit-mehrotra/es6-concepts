/*
    Javascript Classes are primarily syntactic sugar over Javascript's existing prototype based inheritance.
*/

class Rectangle1{
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
}

/*
Hoisting:
An important difference between function declarations and class declarations is that function declarations are hoisted and
class declarations are not. You first need to declare your class and then access it, otherwise code like the following will
throw a reference error 
*/

//const p = new NewRectangle();

//class NewRectangle{}

/*
Class Expressions: 
A class expression is another way to define a class. Class Expressions can be named or unnamed. The name given to a named
class expression is local to the class's body.(it can be retreived through the class's(not an instance's) name property 
though).
*/

//unnamed
let Rectangle2 = class {
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
};

console.log(Rectangle2.name); // Rectangle2

//named 
let Rectangle3 = class NamedRectangle{
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
}

console.log(Rectangle3.name); // NamedRectangle

/* 
Class Body and Method definitions:
The code written inside the class is executed in strict mode.
The constructor method is a special method for creating and initializing an object created with a class. There can be only
one special method with a name constructor in class. A Syntax Error will be thrown if the class contains more than one 
occurences of the constructor method. A constructor can use the 'super' keyword to call the constructor of super class.
*/

class Rectangle4{
    constructor(height,width){
        this.height = height;
        this.width = width;
    }

    //Getter
    get area(){
        return this.calcArea();
    }

    calcArea(){
        return this.height * this.width;
    }
}

const square = new Rectangle4(10,10);
console.log(square.area); //100

//Static Methods

class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static distance(a,b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.hypot(dx,dy);
    }
}

const p1 = new Point(5,5);
const p2 = new Point(10,10);

console.log(Point.distance(p1,p2));

/*
Boxing with prototype and static methods
When a static or prototype method is called without a value for this, the this value will be undefined inside the method.
*/

class Animal{
    speak(){
        return this;
    }

    static eat(){
        return this;
    }
}

let obj = new Animal();
console.log(obj.speak()); // Animal {}

let speak = obj.speak;
console.log(speak()); // undefined

console.log(Animal.eat()); // class Animal

let eat = Animal.eat;
console.log(eat()); // undefined

// Subclassing with extends

class Animal2{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal2{
    constructor(name){
        super(name); // call the super class constructor and pass in the name parameter
    }

    speak(){
        console.log(`${this.name} barks`);
    }
}

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.

// Superclass calls with super

class Cat{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} makes a noise.`);
    }
}

class Lion extends Cat{
    speak(){
        super.speak();
        console.log(`${this.name} roars`);
    }
}

let l = new Lion('Fuzzy');
l.speak();