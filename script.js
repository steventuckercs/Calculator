//performs and returns addition on x and y. 
function add(x,y) {
    return x+y;
}

//performs and returns subtraction on x and y. 
function subtract(x,y) {
    return x-y;
}

//performs and returns multiplication on x and y. 
function multiply(x,y) {
    return x*y;
}

//performs and returns division on x and y. 
function divide(x,y) {
    if (y==0){
        return "err div by 0, clear to reset";
    }
    return x/y;
}

//Updates our display based on text passed into parameter text from our operations and inputs.
function updateDisplay(text){
    text = String(text);
    let display = document.getElementById("display");

    if (display.innerHTML ==""){
        display.innerHTML="Enter";
    }
    else{
    display.innerHTML=text;
    }
}

//Resets display to cleared.
function clearDisplay(){
    let display = document.getElementById("display");
    display.innerHTML = "Cleared";
}

//Handles button clicks on all buttons and performs necessary operations based on which is selected.
function clickButton(result){
    buttons = document.querySelectorAll('button').length; 
    let firstOp =result;
    let secondOp="";
    let operator=null; 

    for (var i = 0; i < buttons ; i++) {
        document.querySelectorAll(".button")[i].addEventListener("click", function() {
            switch(this.name){
                case "clear":
                    if (firstOp !=""){
                    firstOp="";
                    secondOp="";
                    operator=null;
                    clearDisplay();
                    clickButton("");
                    }
                    break;

                case 'equals':
                    if (firstOp!="" && secondOp!=""){
                        operate(operator,parseFloat(firstOp),parseFloat(secondOp));
                        firstOp=0;
                        secondOp=0;
                        operator=null;
                    }
                    break;

                case 'add':
                    if (operator ==null){
                        operator = "+";
                        updateDisplay(firstOp+operator);
                    }
                    break;

                case 'subtract':
                    if (operator ==null){
                        operator = "-";
                        updateDisplay(firstOp+operator);
                    }
                    break;

                case 'multi':
                    if (operator ==null){
                        operator = "*";
                        updateDisplay(firstOp+operator);
                    }
                    break;

                case 'divide':
                    if (operator ==null){
                        operator = "/";
                        updateDisplay(firstOp+operator);
                    }
                    break;

                case 'plusminus':
                    if (operator == null && firstOp !=""){
                        firstOp = (firstOp * -1);
                        updateDisplay(firstOp);
                    }
                    if (operator !=null && secondOp !=""){
                        secondOp = (secondOp * -1);
                        updateDisplay(firstOp+operator+secondOp);
                    }
                    break;

                case 'percent':
                    break;

                case 'dot':
                    if (operator ==null && firstOp.includes(".")==false){
                        if (firstOp != ""){
                            firstOp=firstOp+".";
                            updateDisplay(firstOp);
                        }else{
                            firstOp=".";
                            updateDisplay(firstOp);
                        }
                    }
                    if (operator !=null && secondOp.includes(".")==false){
                        if (secondOp != ""){
                            secondOp=secondOp+".";
                            updateDisplay(firstOp+operator+secondOp);
                        }else{
                            secondOp=".";
                            updateDisplay(firstOp+operator+secondOp);
                        }
                    }
                    break; 

                default:
                    if (operator == null && result ==""){
                        firstOp += this.name;
                        updateDisplay(firstOp);
                    }else{
                        secondOp+=this.name;
                        updateDisplay(firstOp+operator+secondOp);
                    }
                break;
            }
        });
    }
}

//Calls the mathematical operation functions and calls clickbutton with our result to use as first operand.
function operate(operator,v1,v2){
    switch (operator){
        case '+':
            result = add(v1,v2);
            updateDisplay(result);
            break;
        case '-':
            result = subtract(v1,v2);
            updateDisplay(result);
            break;
        case '/':
            result = divide(v1,v2);
            updateDisplay(result);
            break;
        case '*':
            result = multiply(v1,v2);
            updateDisplay(result);
            break;
    }
    clickButton(result);
}


//Functions to run on load to initialize all our values.
updateDisplay("");
clickButton("");
