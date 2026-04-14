


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
    mainView();
}

function pushFunction(thing){
     if(calcNumber.calcFunction.length == 0){
        calcNumber.calcFunction.push(thing);
        console.log(calcNumber.calcFunction);
        mainView();
        return calcNumber.calcFunction;
    }
    else if(calcNumber.calcFunction.length !== 0){
        calcNumber.calcFunction.splice(0, 1,thing);
        mainView();
        return calcNumber.calcFunction;
    }
   
}

function equalChange() {
    calcNumber.calcEquals = true;
    calculateNumber();
    mainView();
}

function extraPick(ting) {
    if(ting == "Math.sqrt(calcNumber.firstNum)" || ting == "calcNumber.firstNum*calcNumber.firstNum"){
        extraMath(ting);
        console.log("extraA");
    }
    else if (ting == "Number(calcNumber.firstNum/calcNumber.secondNum)*100"){
        if(calcNumber.calcFunction.length == 0 && calcNumber.calcEquals !== true){
            return;
        }
        else if(calcNumber.calcFunction.length !== 0 && calcNumber.calcEquals !== true){
        console.log("extraB");
        extraMathB(ting);
        }
    }
    else if (ting == "C"){
            clearCalc();
    }
     else if (ting == "←"){
        backSpace();
    }
     else if ( ting == "="){
        equalChange();
     }
     else if (ting == "±"){
        swapPolarity();
     }

     else if (ting == "Number(1/(calcNumber.firstNum))","Number(Number(calcNumber.firstNum) + 1/(calcNumber.secondNum))" ){
        if (calcNumber.calcFunction.length == 0 && calcNumber.calcEquals !== true){
            extraMath("Number(1/(calcNumber.firstNum))");
        }
        else if (calcNumber.calcFunction.length !== 0 && calcNumber.calcEquals !== true){
            extraMathB("Number(Number(calcNumber.firstNum) + 1/(calcNumber.secondNum))");
        }
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
    mainView();
}

function clearCalc(){
    calcNumber.firstNum.length = 0
    calcNumber.secondNum.length = 0
    calcNumber.calcFunction.length = 0
    calcNumber.calcEquals = false;
    calcNumber.calcedNum.length = 0
    console.log("clear");
    mainView();
}

function backSpace(){
    if(calcNumber.calcFunction.length == 0 && calcNumber.calcEquals !== true){
        calcNumber.firstNum.pop();
        console.log(calcNumber.firstNum);
    }
    else if (calcNumber.calcFunction.length !== 0 && calcNumber.firstNum.length !== 0 && calcNumber.secondNum.length == 0){
         calcNumber.calcFunction.pop()
         console.log(calcNumber.calcFunction)
    }
    else if (calcNumber.calcFunction.length !== 0 && calcNumber.calcEquals !== true){
        calcNumber.secondNum.pop();
        console.log(calcNumber.secondNum)
    }
    else{
        return;
    }
    mainView();
}

function swapPolarity(){
    if(calcNumber.calcFunction.length == 0 && calcNumber.calcEquals !== true){
        if (calcNumber.firstNum[0] !== "-"){
        calcNumber.firstNum.unshift("-");
        console.log(calcNumber.firstNum);
        }
        else if(calcNumber.firstNum[0] == "-"){
            calcNumber.firstNum.splice(0, 1);
            console.log(calcNumber.firstNum);
        }
        else{
            return;
        }
    }
    else if (calcNumber.calcFunction.length !== 0 && calcNumber.calcEquals !== true){
        if (calcNumber.secondNum[0] !== "-"){
        calcNumber.secondNum.unshift("-");
        console.log(calcNumber.secondNum);
        }
        else if(calcNumber.secondNum[0] == "-"){
            calcNumber.secondNum.splice(0, 1);
            console.log(calcNumber.secondNum);
        }
        else{
            return;
        }
    }
    else{
        return;
    }
    mainView();
}
function extraMath(ting){
    console.log(ting);
    calcNum1 = Number(calcNumber.firstNum.join(""));
    calcNumber.firstNum.splice(0, 1000, Number(calcNum1));
    calcNumAnswer = eval(ting);
    calcNumber.calcedNum.push(calcNumAnswer);
    calcNumber.firstNum.splice(0, 1000, calcNumAnswer);
    console.log(calcNumber.firstNum);
    emptyCalc();
    mainView();
}

function extraMathB(ting){
    console.log(ting);
    calcNum1 = Number(calcNumber.firstNum.join(""));
    calcNumber.firstNum.splice(0, 1000, Number(calcNum1));
    calcNum2 = Number(calcNumber.secondNum.join(""));
    calcNumber.secondNum.splice(0, 1000, Number(calcNum2));
    calcNumAnswer = eval(ting); 
    calcNumber.calcedNum.push(calcNumAnswer);
    calcNumber.firstNum.splice(0, 1000, calcNumAnswer);
    console.log(calcNumber.firstNum)
    console.log(calcNumber.secondNum)
    console.log(calcNumAnswer);
    emptyCalc();
}