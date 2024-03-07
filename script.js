// Question 1: Odd or even
function oddEven() {
  let number = prompt('Please enter the value to be checked');
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
  let number1 = prompt('Enter the first number');
  let number2 = prompt('Enter the second number');
  let number3 = prompt('Enter the third number');
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
  let replaceChar = prompt('Please enter the character to be replaced');
  let newChar = prompt('Enter the new character');

  newString = inputString.replaceAll(replaceChar, newChar);
  document.getElementById('answer4').innerHTML = newString;
}
document.querySelector('#question4').addEventListener('click', replaceChars);
