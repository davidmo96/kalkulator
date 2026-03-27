mainView()
drawButtons();
function mainView(){
    
    main.innerHTML = /*HTML*/ `
        <p id="screen"> </p>
        <div class="buttons"></div>
        <button  onclick="equalChange()" >=</button>

    `

    
}


function drawButtons(){
        const buttonPrint = document.getElementsByClassName("buttons")[0];

        let valStart =  Object.values(calcButtons.calcNumbers);
        let valCalc = Object.values(calcButtons.calcFunctions);
        let val = 0
        let val2 = 0;     

        Object.values(calcButtons.calcNumbers).forEach(noe => { 
            valNext = valStart.at(val);
            console.log(valNext);
            const calcButton = document.createElement("button");
            calcButton.setAttribute("onclick", "calculateNumber(this.innerHTML)");
            calcButton.innerHTML = valNext;
            buttonPrint.appendChild(calcButton);  
            val += 1;
        }); 
        
        Object.values(calcButtons.calcFunctions).forEach(noe => { 
            valFunction = valCalc.at(val2);
            console.log(valNext);
            const calcButton = document.createElement("button");
            calcButton.setAttribute("onclick", "pushFunction(this.innerHTML)");
            calcButton.innerHTML = valFunction;
            buttonPrint.appendChild(calcButton);  
            val2 += 1;
        }); 
    
    }