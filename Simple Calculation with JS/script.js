
// Selecting the inputs
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const resultdiv = document.getElementById("result");

// Selecting the buttons
const addbtn = document.getElementById("add");
const subtractbtn = document.getElementById("subtract");
const multiplybtn = document.getElementById("multiply");
const dividebtn = document.getElementById("divide");
const clearbtn = document.getElementById("clear")

// Converting the value to integers
function getvalues() {
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    return {value1, value2}
}

function check() {
    if(input1 || input2 == ""){
        resultdiv.textContent = 'Please enter both the values';
    }
}

// Adding event listerners to the buttons
addbtn.addEventListener("click", addvalues =>
{
    check();
    const {value1, value2} = getvalues();
    const result = value1 + value2;
    if(value1 && value2 !== 0) {
        resultdiv.textContent = 'Result:\n' + result;
        clearbtn.style.display= "block";
    }
});

subtractbtn.addEventListener("click", subtractvalues =>
{
    check();
    const {value1, value2} = getvalues();
    if(value1 && value2 !== 0) {
    const result = value1 - value2;
    resultdiv.textContent = 'Result:\n' + result;
    clearbtn.style.display= "block";
    }
});

multiplybtn.addEventListener("click", multiplyvalue =>
{
    check();
    const {value1, value2} = getvalues();
    if(value1 && value2 !== 0) {
    const result = value1 * value2;
    resultdiv.textContent = 'Result:\n' + result;
    clearbtn.style.display= "block";
    }
});

dividebtn.addEventListener("click", dividevalue =>
{
    check();
    const {value1, value2} = getvalues();    
    if (value2 !== 0){
            const result = value1 / value2;
            resultdiv.textContent = 'Result:\n' + result;
    }else {
        resultdiv.textContent = 'Error:\n Division by zero';
    }
    clearbtn.style.display= "block";
});

clearbtn.addEventListener("click", clearvalues => 
{
    input1.value = "";
    input2.value = "";
    clearbtn.style.display = "none";
    resultdiv.textContent = "";
}
)