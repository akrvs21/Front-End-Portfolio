const upperEl = document.getElementById("upper");
const lengthEl = document.getElementById("length");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const outputEL = document.getElementById("output");
const genEl = document.getElementById("generatePsw");
const smallBtnEl = document.getElementById("small-btn");

const getRandomUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getRandomLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getRandomNumber = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

function getRandomSymbol() {
  var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
  return symbol[Math.floor(Math.random() * symbol.length)];
}
const randomFunc = {
  upper: getRandomUpperCase,
  lower: getRandomLowerCase,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};
//generate event
genEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasUpper = upperEl.checked;
  const hasLower = lowerEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;

  outputEL.value = generatePassword(
    hasUpper,
    hasLower,
    hasNumber,
    hasSymbol,
    length
  );
});
//Generate Password Function
function generatePassword(upper, lower, number, symbol, length) {
  console.log(lengthEl.value.length);
  if (lengthEl.value < 6) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "The minimum password length should be 8",
      footer:
        "<a target='_blank' rel='noopener noreferrer' href='//www.sciencedirect.com/topics/computer-science/character-password#:~:text=6.1.&text=Passwords%20should%20be%20a%20minimum,%2C%20numbers%2C%20and%20special%20characters.&text=As%20the%20key%20space%20increases,attack%20on%20a%20password%20increases.'>Why do I have this issue?</a>",
    });
    return "";
  } else {
    let generatedPassword = "";

    const typesCount = upper + lower + number + symbol;

    //console.log(typesCount);

    const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(
      (item) => Object.values(item)[0]
    );

    if (typesCount === 0) {
      return "";
    }

    for (let i = 0; i < length; i += typesCount) {
      typesArr.forEach((type) => {
        const funcName = Object.keys(type)[0];
        generatedPassword += randomFunc[funcName]();
      });
    }

    const finalPassword = generatedPassword.slice(0, length);
    //   console.log(finalPassword);
    return finalPassword;
  }
}

smallBtnEl.addEventListener("click", function () {
  console.log("selected");
  outputEL.select();
  outputEL.setSelectionRange(0, 99999);

  document.execCommand("copy");
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Copied successfully",
    showConfirmButton: false,
    timer: 1300,
  });
});

// console.log(getRandomUpperCase());
// console.log(getRandomLowerCase());
