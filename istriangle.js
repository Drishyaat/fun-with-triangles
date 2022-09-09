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

   const sumOfAngles= calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
   if(sumOfAngles===180)
   { 
    //console.log(sumOfAngles);
   outputE1.innerText="The angles form a triangle";
   }
   else{ //console.log("no");
    outputE1.innerText="Sorry, the angles dont form a triangle";
   }
   
isTriangleBtn.addEventListener("click" ,isTriangle)