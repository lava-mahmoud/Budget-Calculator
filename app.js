//Budget Controller
var budgetController=(function(){
    //private section
    
     var Expense=function(id,description,value){
         this.id=id;
         this.description=description;
         this.value=value;
     }
     var Income=function(id,description,value){
        this.id=id;
        this.description=description;
        this.value=value;
    }
    
    caculateTotal=function(type){
        var sum=0;
         data.allItems[type].forEach(function(current){
             sum+=current.value;
             
         });
         data.totals[type]=sum;
    }
     var data={
         allItems:{
            exp:[],
            inc:[]
            },
        totals:{
            exp:0,
            inc:0
            },
            budget:0,
            percentage:-1
     }
    //public section
    return{
        setInput:function(type,description,value){
            var newItem,ID;
            if(data.allItems[type].length>0){
                ID=data.allItems[type][data.allItems[type].length-1].id+1;

            }
            else{ID=0;}
            if(type==='exp')
                newItem=new Expense(ID,description,value);
               
            else if(type==='inc')
                newItem=new Income(ID,description,value);    
            data.allItems[type].push(newItem);    
            return newItem;
        },
        test:function(){
            console.log(data);
        }, 
        calculateBudget:function(){
          
            //calculate total incomes and the total expenses
            caculateTotal('inc');
            caculateTotal('exp');
            //calculate budget : income-expenses
            data.budget=data.totals.inc-data.totals.exp;
            //calculate pecentage expenses*100/inc
            data.percentage=Math.round((data.totals.exp/data.totals.inc)*100) ;

        },


    }
  
})();

//UI Controller
var UIController=(function(){
    //private section
    var DOMStrings={
        inputType:'.add__type',
        inputDescription:'.add__description',
        inputValue:'.add__value',
        addButton:'.add__btn' ,
        incomeContainer:'.income__list' ,
        expensesContainer: '.expenses__list',
    }

      //public section
    return {
        getinput: function(){
            return{
            type:document.querySelector(DOMStrings.inputType).value,
            description:document.querySelector(DOMStrings.inputDescription).value,
           value:parseFloat( document.querySelector(DOMStrings.inputValue).value)
        }
        },
        addListItem: function(obj, type) {
            var html, newHtml, element;
            // Create HTML string with placeholder text
            
            if (type === 'inc') {
                element = DOMStrings.incomeContainer;
                
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMStrings.expensesContainer;
                
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            
            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%',obj.value);
            
            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        
         clearFilds:function(){
             var filds,fildsArr;
             filds=document.querySelectorAll(DOMStrings.inputDescription+', '+DOMStrings.inputValue);
             fildsArr=Array.prototype.slice.call(filds);
             fildsArr.forEach(function(current,index,array){
                current.value="";
             });
             fildsArr[0].focus();
         },
         getDOMStrings: function() {
            return DOMStrings;
        }   

        }
       

   
   
})();

//Global App Controller
var controller=(function(budgetCtrl,UICtrl){
    //private section
   
    function setupEventListners(){
        var Dom=UICtrl.getDOMStrings();
        document.querySelector(Dom.addButton).addEventListener('click',function(){
            ctrlAddItem();
        });
    
        document.addEventListener('keypress',function(event){
            if(event.keyCode===13 || event.which===13)
            ctrlAddItem();
        });
    }

    function updateBudget(){
        //1.calculate the budget
        budgetCtrl.calculateBudget();
        //2.return the budget


        //5.display the budget to the user UI
    }

    function ctrlAddItem(){
        //1. get the field input data 
        
        var input=UICtrl.getinput();

        if(input.description!==""&& !isNaN(input.value)&& input.value>0){
        //2.add the item to the budget controller
        var newItem=budgetCtrl.setInput(input.type,input.description,input.value);
        

        //3.add the item to the UI

        UICtrl.addListItem(newItem,input.type);

        //4. clear filds
        UICtrl.clearFilds();

        // update budget
        updateBudget();
    }


    }


    //public section

    return{
        //initialization function
        init:function(){
            console.log('works');
            //when we cal the controller in ifi it returns imediatly
            //init but dosent call setup event listner to do that we
            // call init from the out side
            setupEventListners();
        }

    }
})(budgetController,UIController);


//whitout this call nothing works and the listner function are not called
controller.init();