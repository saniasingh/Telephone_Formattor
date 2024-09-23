const numberInput = document.querySelector("input");
const displayNum = document.querySelector("p");

let previousValue = "";
let firstThreeNumbers = "";

numberInput.addEventListener("input", (e) => {
  const inputValue = e.target.value;

  // console.log(previousValue, inputValue);

  // regex here

  if (/\d+$/g.test(inputValue)) {
    numberInput.value = inputValue;
  } else {
    numberInput.value = inputValue.substring(0, inputValue.length - 1);
  }

  if (inputValue.length === 4 && previousValue.length < inputValue.length) {
    firstThreeNumbers = inputValue.substring(0, 3);
    const formattedValue = `+(${inputValue.substring(0, 3)}) - ${
      inputValue[inputValue.length - 1]
    }`;
    numberInput.value = formattedValue;
  } else if (
    inputValue.length === 9 &&
    previousValue.length > inputValue.length
  ) {
    numberInput.value = firstThreeNumbers;
  }

  previousValue = inputValue;
});
