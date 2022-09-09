const quizForm= document.queryCommandValue('.quiz-form');
const submitBtn=document.querySelector("#submit-answers-btn");
const outputE1=document.querySelector("#output");

const rightAnswers=["Right","180°"];

function calculateScore(){ 
    let score=0;
    let index=0; 
    const formResults= new FormData(quizForm);
    //console.log(formResults);
    for( let value of formResults.values()){
          if (value=== rightAnswers[index]){
            score=score+1;
          }
        index =index+1;
        
    }
    outputE1.innerText="Your score is-" + score;
    
}
submitBtn.addEventListener("click", calculateScore) ;