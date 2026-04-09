const main = document.getElementById("main");

const viewstate = {

}

const calcNumber = {
    firstNum: [],
    secondNum: [],
    calcFunction: [],
    calcExtraFunction:[],
    calcEquals: false,
    calcExtras: false,
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
            calcButtonDot: ".",
             },
    calcFunctions: {
            calcButtonDivision: "/",
            calcButtonMultiplication: "*",
            calcButtonAdd: "+",
            calcButtonSubtract:"-",
    },
    calcExtras: {
            calcButtonSQRoot:{
            visual:"√",
            function: "Math.sqrt(calcNumber.firstNum)"

        },
            calcButtonPercentage:{
            visual:"%",
            function: null ,
        },
            calcButtonFlip: "±",
            calcButtonEquals: "=",
            calcButtonSQ:{
            visual:"×²",
            function: "calcNumber.firstNum*calcNumber.firstNum",
        },
            calcButtonDividebyX:{
            visual:"¹∕×",
            function: "(Number(calcNumber.firstNum + 1/(calcNumber.secondNum))",
        }, 
            calcButtonCE: "CE", 
            calcButtonC: "C",
            calcButtonBack: "←",
        },

}