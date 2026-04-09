


function calculateNumber(thing){

     if (calcNumber.calcFunction.length == 0 && calcNumber.calcEquals !== true){
        calcNumber.firstNum.push(thing);
        console.log(calcNumber.firstNum)
    }
    else if (calcNumber.calcFunction.length !== 0 && calcNumber.calcEquals !== true){
        calcNumber.secondNum.push(thing);
        console.log(calcNumber.secondNum)
    }
    
    else if (calcNumber.calcFunction.length !== 0 && calcNumber.calcEquals == true){
        doMath();
    }
    else {
        console.log("error");
    }
}

function pushFunction(thing){
    calcNumber.calcFunction.push(thing);
    console.log(calcNumber.calcFunction);
    return calcNumber.calcFunction;
}

function equalChange() {
    calcNumber.calcEquals = true;
    calculateNumber();
}

function extraPick(ting) {
    if(ting == "Math.sqrt(calcNumber.firstNum)" || ting == "calcNumber.firstNum*calcNumber.firstNum"){
        extraMath(ting);
        console.log("extraA");
    }
    else if (ting == "%" || ting == "Number(calcNumber.firstNum + 1/(calcNumber.secondNum))"){
        console.log("extraB");
        extraMathB(ting);
    }
    else {
        console.log("error");
    }
}

function doMath(){
        calcNum1 = Number(calcNumber.firstNum.join(""));
        calcNum2 = Number(calcNumber.secondNum.join(""));
        calcNum3 = calcNumber.calcFunction;
        calcNum4 = eval(calcNum1 + calcNum3 + calcNum2);
        calcNumber.calcedNum.push(calcNum4);
        calcNumber.firstNum.splice(0, 1000, calcNum4);
        console.log(calcNumber.calcedNum);
        console.log(calcNumber.firstNum);
        emptyCalc()
}

function emptyCalc(){
    calcNumber.secondNum.length = 0
    calcNumber.calcFunction.length = 0
    calcNumber.calcEquals = false;
    calcNumber.calcedNum.length = 0
    console.log(calcNumber.calcedNum)
}

function clearCalc(){
    calcNumber.firstNumNum.length = 0
    calcNumber.secondNum.length = 0
    calcNumber.calcFunction.length = 0
    calcNumber.calcEquals = false;
    calcNumber.calcedNum.length = 0
}


function extraMath(ting){
    console.log(ting);
    calcNum1 = Number(calcNumber.firstNum.join(""));
    calcNumber.firstNum.splice(0, 1000, Number(calcNum1));
    calcNumAnswer = eval(ting);
    calcNumber.calcedNum.push(calcNumAnswer);
    calcNumber.firstNum.splice(0, 1000, calcNumAnswer);
    console.log(calcNumber.firstNum);
    emptyCalc()
}

function extraMathB(ting){
    console.log(ting);
    calcNum1 = Number(calcNumber.firstNum.join(""));
    calcNumber.firstNum.splice(0, 1000, Number(calcNum1));
    calcNum2 = Number(calcNumber.secondNum.join(""));
    calcNumber.secondNum.splice(0, 1000, Number(calcNum2));
    calcNumAnswer = eval(ting); 
    console.log(calcNumber.firstNum)
    console.log(calcNumber.secondNum)
    console.log(calcNumAnswer);
    
}