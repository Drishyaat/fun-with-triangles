const areaInput=document.querySelectorAll('.area-input');
//const Height=document.querySelector('height-input');
const areaBtn= document.querySelector("#area-btn");
const outputE1=document.querySelector('#output');

function product(b,h)
{
  const pro= b*h;
}

function findArea()
{   
    const pro=product(Number(areaInput[0].value), Number(areaInput[1].value))
    const area=1/2*pro;
     //return area;
     outputE1.innerText="The area is-" + area;
     //console.log(Number(base.value), Number(Height.value));
}
areaBtn.addEventListener("click",findArea)