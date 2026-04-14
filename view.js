mainView()

function mainView(){
    
    main.innerHTML = /*HTML*/ `
        <p id="screen">${calcNumber.firstNum.join("") ??''}${calcNumber.calcFunction.join("") ??''}${calcNumber.secondNum.join("") ??''} </p>
        <div class="buttons"></div>
    `
    drawButtons();
}


function drawButtons(){
        const buttonPrint = document.getElementsByClassName("buttons")[0];

        let valStart =  Object.values(calcButtons.calcNumbers);
        let valCalc = Object.values(calcButtons.calcFunctions);
        let valExtra = Object.values(calcButtons.calcExtras);
        let val = 0;
        let val2 = 0;    
        let val3 = 0; 

        Object.values(calcButtons.calcNumbers).forEach(noe => { 
            valNext = valStart.at(val);
            const calcButton = document.createElement("button");
            calcButton.setAttribute("onclick", "calculateNumber(this.innerHTML)",);
            calcButton.innerHTML = valNext;
            calcButton.className = "btn"+val;
            buttonPrint.appendChild(calcButton);  
            val += 1;
        }); 
        
        Object.values(calcButtons.calcFunctions).forEach(noe => { 
            valFunction = valCalc.at(val2);

            const calcButton = document.createElement("button");
            calcButton.setAttribute("onclick", "pushFunction(this.innerHTML)");
            calcButton.innerHTML = valFunction;
            calcButton.className = "btnfnc"+val2;
            buttonPrint.appendChild(calcButton);  
            val2 += 1;
        }); 

        Object.values(calcButtons.calcExtras).forEach(noe => { 
            valExtras = valExtra.at(val3).visual;
            valExtraFunction = valExtra.at(val3).function;
            const calcButton = document.createElement("button");
            calcButton.setAttribute("onclick", "extraPick(this.value)");
            calcButton.innerHTML = valExtras;
            calcButton.className = "btnxtra"+val3;
            calcButton.value = valExtraFunction;
            buttonPrint.appendChild(calcButton);  
            val3 += 1;
        }); 
    
    }