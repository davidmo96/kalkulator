


function calculateNumber(thing){

    if (calcNumber.calcedNum.length !== 0){
        emptyCalc()
    }
    else if (calcNumber.calcFunction.length == 0 && calcNumber.calcEquals !== true){
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

function doMath(){
        calcNum1 = Number(calcNumber.firstNum.join(""));
        calcNum2 = Number(calcNumber.secondNum.join(""));
        calcNum3 = calcNumber.calcFunction;
        calcNum4 = eval(calcNum1 + calcNum3 + calcNum2);
        calcNumber.calcedNum.push(calcNum4);
        console.log(calcNumber.calcedNum);
}

function emptyCalc(){
    calcNumber.firstNum.length = 0
    calcNumber.secondNum.length = 0
    calcNumber.calcFunction.length = 0
    calcNumber.calcEquals = false;
    calcNumber.calcedNum.length = 0
    console.log(calcNumber.calcedNum)
}