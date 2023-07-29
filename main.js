//use AC to power on the screen
//use input row to display user input
//use output screen to output result

const keys = document.querySelector('#power');
const operations = document.getElementsByClassName("operators");
const numbers = document.getElementsByClassName("number");
const output = document.querySelector(".outputdata")
let power = 0;
let firstNumber;
let secondNumber;
let operator;


keys.addEventListener("click", function(){
    if(power === 0){
        console.log("Calculator is on");
        //activate
        console.log(power)
        output.innerText =0;
        power += 1;
        listentokey();
    }else{
        console.log("calculator is off");
        console.log(power);
        output.innerText = "";
        power -= 1;
    }
}
);



function operate(firstNumber,operator,secondNumber){
    //now we perform a switch case logic to perform each operation
    
    switch(operator){
        case '*':
            console.log("call multiply function here");
            break;
        case '+':
            console.log('call addition function here');
            break;
        case '/':
            console.log('call division function here');
            break;
        case '-':
            console.log("call the substraction function here");
            break;
        default:
            alert("Happy Hacking!");
        
    }

}



function listentokey(){
    console.log("function called");
    for (let i = 0; i<operations.length; i++){
        operations[i].addEventListener('click', function(){
           let Symbol =  operations[i].getAttribute('data-operator');
           console.log(Symbol);
           operate(0,Symbol,0);
        })
    }
}
