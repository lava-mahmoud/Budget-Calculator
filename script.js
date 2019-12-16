//// very important notice
// the codes inside the function are runnuing like console 
// and events and any thins out side the functions inside the moule pattern
// but the functions don't run with out calling them




// how to create module pattern
//how to write a module with module pattern 
//we create variable wich is a immediatly invoked function expression
//that will return an object
// an immediatly invoked function expression of ifi is annonymous function
//rapped in parantheses  
//var budgetController=(function(){})();
var budgetController=(function(){
    var x=23;
    //assigning function to a variable
    var add=function(a){
        return x+a;
    }

    return {
        //assigning function to item in the object 
        publicTest:function(b){
            return add(5);
        }
    }
})();



 var UIController=(function(){
    //some code
})(); 


// this function takes two paramiter budgetCtrl and UICtrl
// and we pass budgetControler and UIController to it
var controller=(function(budgetCtrl,UICtrl){
/*     function print(){
        console.log('son function');
    } */
    var z=budgetCtrl.publicTest(5);
    console.log('lava');
    return {
        anotherPublic:function(){
            console.log(z);
            //print();

        }
    }
})(budgetController,UIController);



//nothing happens whith out calling anotherPublic
controller.anotherPublic();