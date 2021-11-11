const calculatorMathLine = document.getElementById("calculator-math-line");
const calculatorResult = document.getElementById("calculator-result");
const calculatorActions = document.getElementById("calculator-actions");
const the_seer1 = document.querySelector('.the_seer1');
const the_seer2 = document.querySelector('.the_seer2');
const calc_res = document.querySelector('.calculator_result');
const star1 = document.querySelector('.star1');
const star2 = document.querySelector('.star2');

let firstNumber = "";
let secondNumber = "";
let operation = "";

// line cleanup function
function clearVariables() {
    firstNumber = "";
    secondNumber = "";
    operation = "";
}

// click event
calculatorActions.addEventListener('click', function(e) {
  the_seer1.classList.remove('the_seer_on');
  the_seer2.classList.remove('the_seer_on');
  calc_res.classList.remove('calculator_result_red');
  calc_res.classList.remove('rotation');
  star1.classList.add('star_hide');
  star2.classList.add('star_hide');
  const button = e.target;
  const buttonValue = button.textContent;
  // clear when pressing C
  if (buttonValue === "C") {
    calculatorMathLine.textContent = "";
    calculatorResult.textContent = "";
    clearVariables();
    // is there a number in the class?
  } else if (button.classList.contains("number")) {
    // second or first number?
    if (operation.length > 0) {
    calculatorResult.textContent = "";
    secondNumber += buttonValue;
    } else {
      calculatorResult.textContent = "";
      firstNumber += buttonValue;
    }
    // is there a operation in the class?
  } else if (button.classList.contains("operation")) {
    if (firstNumber.length === 0) {
    calculatorResult.textContent = "";
    }
    else {operation = buttonValue;
         }
  }
  // operation equals
   else if (buttonValue === "=") {
    // a number, not a string
    firstNumber = +firstNumber;
    secondNumber = +secondNumber;
    calc_res.classList.add('rotation');
    if (operation === "*") {
      calculatorResult.textContent = "Recommendation\n\rof the day:\n\rAdderall";
      calculatorResult.classList.add('calc_result3');
    } else if (operation === "+") {
      calculatorResult.textContent = ("Valentina\n\r(Lena)");
      calculatorResult.classList.remove('calc_result3');
    } else if (operation === "-") {
      calculatorResult.textContent = ".DS_Store\n\rsuccessfully\n\rcreated!";
      calculatorResult.classList.add('calc_result3');
    } else if (operation === "/") {
      calculatorResult.textContent = "Congratulations!\n\rYou have\n\rmerge conflict!";
      calculatorResult.classList.add('calc_result3');
    }
    if (operation.length === 0) {
      calculatorResult.textContent = firstNumber;
    }
    // clearing the line after"="
    clearVariables();

  }
  // fractional numbers
  else if (buttonValue ===".") {
    // new variable for"."
    // let number;
    // if (operation.length > 0) {
    //   number = secondNumber;
    // } else {
    //   number = firstNumber;
    // }
    const number = operation.length > 0 ? secondNumber : firstNumber;
    // if the number contains"." do nothing; Number cannot start with "."
    if ( number.length === 0 || number.match(/\./)) {
    return
    } else {
      if (operation.length > 0) {
    secondNumber += buttonValue;
    } else {
      firstNumber += buttonValue;
    }
    }
  }

  else if (buttonValue ==="%") {
    firstNumber = +firstNumber;
    secondNumber = +secondNumber;
    the_seer1.classList.add('the_seer_on');
    the_seer2.classList.add('the_seer_on');
    calc_res.classList.add('rotation');
    calc_res.classList.add('calculator_result_red');
    if (operation === "*") {
      calculatorResult.textContent = "A-CA-DEM\n\rA-CA-DEM";
      calculatorResult.classList.remove('calc_result3');
    } else if (operation === "+") {
      calculatorResult.textContent = "A-CA-DEM\n\rA-CA-DEM";
      calculatorResult.classList.remove('calc_result3');
    } else if (operation === "-") {
      calculatorResult.textContent = "A-CA-DEM\n\rA-CA-DEM";
      calculatorResult.classList.remove('calc_result3');
    } else if (operation === "/") {
      calculatorResult.textContent = "A-CA-DEM\n\rA-CA-DEM";
      calculatorResult.classList.remove('calc_result3');
    } else if (operation.length === 0) {
      calculatorResult.textContent = "A-CA-DEM\n\rA-CA-DEM";
      calculatorResult.classList.remove('calc_result3');
    }

 clearVariables();

// Or task was to calculate the percentage of the number of 100??? Then:

//     else if (buttonValue ==="%") {
//     if (operation.length > 0) {
//     calculatorResult.textContent = "";
//     } else {
//     calculatorResult.textContent = "";
//     } if ( firstNumber.length === 0) {
//         calculatorResult.textContent = "";
//     }
//       clearVariables();

  }

  // concatenation
  calculatorMathLine.textContent = `${firstNumber} ${operation} ${secondNumber}`;

});
