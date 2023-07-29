//use AC to power on the screen
//use input row to display user input
//use output screen to output result

const keys = document.querySelector('#power');
const output = document.querySelector(".outputdata")
let power = 0;

keys.addEventListener("click", function(){
    
    if(power % 2 === 0){
        console.log("Calculator is on");
        //activate
        console.log(power)
        output.innerText =0;
        evaluate();
        power += 1;
    }else{
        power +=1;
        console.log("calculator is off");
        output.innerText = "";
    }
}
);



function evaluate(){

    console.log("Calculating");

}