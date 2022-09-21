const areaInput=document.querySelectorAll('.area-input');
//const Height=document.querySelector('height-input');
const areaBtn= document.querySelector('#area-btn');
const outputE1=document.querySelector('#output');

// function clickHandler()
// {
//   findArea()
// }
function product(b, h)
{
  const pro = b*h; ;
  return pro; 
  
}

function findArea()
{   
  if(Number(areaInput[0].value)>0 && Number(areaInput[1].value)>0 ){
    const pro=product(Number(areaInput[0].value), Number(areaInput[1].value))
    const area= pro/2;
    outputE1.innerText="The area is: " + area;
  }
  else 
  {
    outputE1.innerText="Enter valid length of sides."
  }
     
}
     
areaBtn.addEventListener("click",findArea)
