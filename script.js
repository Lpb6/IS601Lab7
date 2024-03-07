// Question 1: Odd or even
function oddEven() {
  const number = document.querySelector('#oddEven').value;
  let msg;
  if (number % 2 === 0) {
    msg = `${number} is even`;
  } else {
    msg = `${number} is odd`;
  }
  document.getElementById('answer1').innerHTML = msg;
}
document.querySelector('#question1').addEventListener('click', oddEven);

// Question 2: largest of 3 numbers
function maxofthree() {
  const number1 = document.querySelector('#num1').value;
  const number2 = document.querySelector('#num2').value;
  const number3 = document.querySelector('#num3').value;
  const max = Math.max(Number(number1), Number(number2), Number(number3));
  console.log(max);
  msg = `The largest of the three numbers is ${max}`;
  document.getElementById('answer2').innerHTML = msg;
}
document.querySelector('#question2').addEventListener('click', maxofthree);
// const gratuityRate = document.querySelector('#gratuity-rate').value;

// Question 3: fibonacci series
function fibonacci() {
  let fibonacciSeq = [0, 1];
  const totalvalues = document.querySelector('#termcount').value;
  console.log(totalvalues);
  for (let i = 2; i < totalvalues; i++) {
    fibonacciSeq[i] = fibonacciSeq[i - 1] + fibonacciSeq[i - 2];
  }
  msg = fibonacciSeq;
  document.getElementById('answer3').innerHTML = msg;
}
document.querySelector('#question3').addEventListener('click', fibonacci);

// Question 4: Replace characters
function replaceChars() {
  const inputString = document.querySelector('#string').value;
  const replaceChar = document.querySelector('#replaceChar').value;
  const newChar = document.querySelector('#newChar').value;

  newString = inputString.replaceAll(replaceChar, newChar);
  document.getElementById('answer4').innerHTML = newString;
}
document.querySelector('#question4').addEventListener('click', replaceChars);
