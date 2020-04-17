var displayValue = document.getElementById('displayValue');

var isOn = 0; 
var isClear = true;
var calcDefault = '0.0';

//Function to take values passed from the calculator view
function inputBtn(obj){
     
    var inputValue = obj.innerHTML;
    
    if(isOn != 0)
    { 
        if (inputValue == '=')
        {
            //To evaluate exxpression present in display field
            displayValue.innerHTML = eval(displayValue.innerHTML);
        }
        else
        {
            //Else condition to append values to display field
            if (isClear)
            {
                //If value is 0.0
                isClear = false;
                displayValue.innerHTML = inputValue;
            }
            else
            {
                //Add values to existing display field
                displayValue.innerHTML += inputValue;
            }
        }
    }
}

function offBtn(){
    //Switch off calculator and reset values
    isOn = 0;
    if(isOn == 0)
    {
        displayValue.innerHTML = ''; 
    }
}

function onBtn(){
    //Switch on calculator and reset values
    isOn = 1;
    isClear = true;
    if(isOn == 1)
    {
        displayValue.innerHTML = calcDefault; 
    }
}

function clearBtn(){
    //Clear the display field
    isClear = true;
    if(isOn != 0)
    {
        displayValue.innerHTML = calcDefault; 
    }
}