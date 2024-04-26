let display= document.querySelector(".display");
let boxes= document.querySelectorAll(".box");

let evaluated=false;
//loop for add eventlisteners on buttons
boxes.forEach(box => {
    box.addEventListener("click", () => {
        // Check which button was clicked
        const buttonClicked = box.innerText;
        let currtext= display.textContent;
        // Handle button click
        if (buttonClicked === 'C') {
            clearScreen();
        } else if (buttonClicked === '=') {
            evaluate();
            evaluated=true;
        }
        else if(evaluated ){
            if(buttonClicked==="Del"){
                display.textContent='';
            }else{
                display.textContent='';
                evaluated=false;
                addtoDisplay(buttonClicked);
            }
            
        }

        else if (buttonClicked === 'Del') {
            display.textContent = currtext.slice(0, -1); // Delete the last character
        } 
        else {
            addtoDisplay(buttonClicked);
        }
    });
});

//fn for adding
function addtoDisplay(text){
    display.textContent+=text;
    
}

//fn for evaluation
function evaluate(){
    const result= display.innerText;
    let ans;
    try{
        ans=eval(result);
        display.textContent = ans;
    }catch(error){
        ans= "error";
    }
    
}

//clear screen
function clearScreen(){
    display.textContent='';
}
