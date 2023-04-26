class ClassMates{
	constructor(n1,a1){
    }

    compare(other){
        if (this.age>other.age){
            console.log("true");
        }
    }
  	displayInfo(){
    	return this.name + "is " + this.age + " years old!";
    }
}

let obj1 = new ClassMates("Mike Will",15);
let obj2= new ClassMates("guhan",9);
obj1.compare(obj2);

console.log(obj1.displayInfo());
console.log(obj2.displayInfo());