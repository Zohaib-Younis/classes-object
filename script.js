const student={
    fullName:"Zohiab Younis",
    marks:90,
    printMarks: function() {
        console.log("marks = ",this.marks);
    }
};
//  this keyword means --> student.marks


//Spacial property in JS is Prototype
//ya apnay ap ma ak object ha 

//We can create our own prototype for example
const employee = {
    calcTax (){
        console.log("Tax is 10%");
    }
};

const Zohaib={
    salary:500000,
    calcTax (){
        console.log("Tax is 20%");
    }
};

// __proto__ used to set a prototype
Zohaib.__proto__=employee;
