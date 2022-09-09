const base=document.querySelector('.base-input');
const Height=document.querySelector('height-input');
const areaBtn= document.querySelector("#area-btn");
const outputE1=document.querySelector('#output');


function findArea()
{   
    const area=1/2*base*Height;
     return area;
     outputE1.innerText="The area is-" + area;
    //console.log(base, Height);
}
areaBtn.addEventListener("click",findArea)