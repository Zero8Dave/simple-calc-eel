function roundToTwo(num) { // rounding I found it in = https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary    
  return +(Math.round(num + "e+2")  + "e-2");
}

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {

  const numA = parseInt(document.getElementById("firstNum").value);
  const numB = parseInt(document.getElementById("secondNum").value);
  async function added(){
    let res = await eel.add_py(numA, numB)();

    line1.innerHTML = "Sum = " + res;
  }
  async function substracted(){
    let res = await eel.substract(numA, numB)();

    line2.innerHTML = "Difference = " + res;
  }
  async function divised(){
    let res = await eel.divise(numA, numB)();
    res = roundToTwo(res)
    line3.innerHTML = "Quotient = " + res;
  }
  async function multiplied(){
    let res = await eel.multiply(numA, numB)();
    line4.innerHTML = "Product = " + res;
  }
  added()
  substracted()
  divised()
  multiplied()
});