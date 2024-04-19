class parent{
    hello(){
        console.log("Hello");
    }
}

class child extends parent{

}
let obj= new child();     

//eg

class person{
    constructor(name){
        this.spicies="homo spicese";
        this.name=name;
    }
    eat(){ 
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("Do nothing");
    }
}

class Engineer extends person{
    work(){
        console.log("solve problems, build something");
    }
}
class Doctor extends person{
    constructor(name){
        super(name); //to pass name in upper construtor or parent constructor
        //super(); is used to invoke parent class constructor
    }
    work(){
        super.eat();
        console.log("treatment patient");
    }
}

//jab bhi parent class and child class ma same name wala function hota ha to child class ka function invoke hota ha

let zohiabObj=new Engineer("Zohaib");
let zohaibObj1=new Doctor("Shahzaib");


//practice question

// class User {
//     name="Zohaib";
//     email="mr.zohaibyounis@gmail.com";
//     viewData(){
//         console.log(`Name : ${this.name}\nEmail : ${this.email}`);
//     }
// }
// let students= new User();
let Data="Secret information";

class User {
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log(`Name : ${this.name}\nEmail : ${this.email}`);
    }
}
class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        Data="Some new data";
    }
}
let students= new User("Zohaib","mr.zohaibyounus@gmail.com");
let admin1=new Admin("admin","admin@gmail.com");