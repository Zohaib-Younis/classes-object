class toyotaCar{
    constructor(brand){
        console.log("creating new object");
        this.brandName=brand;
    }
    start(){
        console.log("Start");
    }
    stop(){
        console.log("stop");
    }
    // setBrand(brand){
    //     this.brandName=brand;
    // }
}

//creating obj
let fortuner=new toyotaCar("fortuner");
// fortuner.setBrand("FORTUNER");
let marcidise=new toyotaCar();

//constructor --> is a spacial method
//automaticaly invoked by new
//initialize object 
//hmm apni marzi ka b constructor bana saktay hn jab b koi new object create hoga to constructor invoke ho k aye ga sab sa pahlay
//we can pass argument to our normal function