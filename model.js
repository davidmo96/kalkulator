const main = document.getElementById("main");

const viewstate = {

}

const calcNumber = {
    firstNum: [],
    secondNum: [],
    calcFunction: [],
    calcEquals: false,
    calcedNum: []
}

const calcButtons = {
    calcNumbers:
          {
            calcButton0: 0,
            calcButton1: 1,
            calcButton2: 2,
            calcButton3: 3,
            calcButton4: 4,
            calcButton5: 5,
            calcButton6: 6,
            calcButton7: 7,
            calcButton8: 8,
            calcButton9: 9,
             },
    calcFunctions: {
            calcButtonDivision: "/",
            calcButtonMultiplication: "*",
            calcButtonAdd: "+",
            calcButtonSubtract:"-",
    },
    calcExtras: {
            calcButtonDot:{
            visual:".",
            function: null ,
        },
            calcButtonSQRoot: "√",
            calcButtonPercentage: "%",
            calcButtonFlip: "±",
            calcButtonEquals: "=",
            calcButtonSQ: "×²",
            calcButtonDividebyX: "¹∕×", 
            calcButtonCE: "CE", 
            calcButtonC: "C",
            calcButtonBack: "←",
        },

}