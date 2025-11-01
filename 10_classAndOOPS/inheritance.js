class Animal {
    constructor(name) {
        this.name = name
    }
}

class cat extends Animal{
    constructor(name,age){
        super(name)
        this.age = age
    }

    static isCat(){
        console.log("its a pursian cat");
    }
}

const cat1 = new cat ("pushy",5)
console.log(cat1.isCat());

const Dog1 = new Animal("buzo","2")
// console.log(Dog1);
// console.log(cat1 instanceof cat);
// console.log(cat1 instanceof Animal);

