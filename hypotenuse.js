const sides=document.querySelectorAll('.side-input');
const hypotenuseBtn= document.querySelector('#henuseypot-btn');
const outputE1=document.querySelector('#output');

function CalculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b;
   // console.log(sumOfSquares);
   return sumOfSquares; 
}
function caculateHypotenuse()
{
   const sumOfSquares= CalculateSumOfSquares(Number(sides[0].value) , Number(sides[1].value));
   const lengthOfHypotenuse= Math.sqrt(sumOfSquares);
    outputE1.innerText="The value of Hypotenuse is-"+ lengthOfHypotenuse;

hypotenuseBtn.addEventListener("click",  caculateHypotenuse)