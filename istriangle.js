const inputs=document.querySelectorAll('.angle-input'); 
const isTriangleBtn= document.querySelector('#is-triangle-btn');
const outputE1=document.querySelector('#output');

function calculateSumOfAngles(angle1, angle2, angle3)
{
    const sumOfAngles= angle1+angle2+angle3;
    //console.log(sumOfAngles);
    return sumOfAngles;
}  

function isTriangle() {
   if(Number(inputs[0].value)>0 && Number(inputs[1].value)>0 && Number(inputs[2].value)>0 ) {
   const sumOfAngles= calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
   if(sumOfAngles===180)
   { 
    //console.log(sumOfAngles);
   outputE1.innerText="The angles form a triangle";
   }
   else{ //console.log("no");
    outputE1.innerText="Sorry, the angles dont form a triangle";
   } }
else {
    outputE1.innerText="Enter valid length of sides."
}}
   
isTriangleBtn.addEventListener("click" ,isTriangle);