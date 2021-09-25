var person = {
    name:"Tom",
    sayHello() {
        console.log("Hello!" +this.name);
    }
};

var person = {
    name:"Tom",
    sayHello : function() {
        console.log("Hello!" +this.name);
    }
};

//these are almost same