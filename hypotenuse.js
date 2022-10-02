const sides=document.querySelectorAll('.side-input');
const hypotenuseBtn= document.querySelector('#hypotenuse-btn');
const outputE1=document.querySelector('#output');

function caculateHypotenuse(lengths)
{
    let hypotenuse=0;
    for(let i=0;i<lengths.length;i++)
    {
        if(lengths[i].value==""|| Number(lengths[i].value)<0){
            hypotenuse=0;
            break;
        }
        else {
            hypotenuse=hypotenuse+ (Number(lengths[i].value)**2);
        }
    }
    hypotenuse=Math.sqrt(hypotenuse);
    return hypotenuse;
}

hypotenuseBtn.addEventListener('click',()=>{
    let hypotenuse=caculateHypotenuse(sides);
    if(hypotenuse==0){
        outputE1.innerText=`Enter valid length of sides.`;
    }
    else {
        outputE1.innerText=`Hypotenuse is ${hypotenuse.toFixed(2)}cm`;
    }
});
 