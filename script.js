const quizDB=[

{
   question: "Q1: WHAT IS FULLFORM OF HTML? ",
   a:"Hello to my land",
   b:"Hey Text Markup Language",
   c:"HyperText Makeup Language",
   d:"HyperText Markup Language",
   ans:"ans4"
},

{
    question: "Q2: WHAT IS FULLFORM OF CSS? ",
    a:"Cascading Style Sheets",
    b:"Cascading Style Sheep",
    c:"Cartoon Style Sheets",
    d:"Cascading Super Sheets",
    ans:"ans1"
 },
 {
    question: "Q3: WHAT IS FULLFORM OF HTTP? ",
    a:"Hello to my land",
    b:"Hey Text Markup Language",
    c:"HyperText Transfer Protocol",
    d:"HyperText Markup Language",
    ans:"ans3"
 },

 {
    question: "Q4: WHAT IS FULLFORM OF JS? ",
    a:"JAVASCRIPT",
    b:"JAVASAVE",
    c:"JORDENSHOES",
    d:"JUSTSCRIPT",
    ans:"ans1"
 },
 {
   question: "Q5: Which of the following is NOT a client-side scripting language?",
   a:"JAVASCRIPT",
   b:"Python",
   c:"HTML",
   d:"CSS",
   ans:"ans2"
},
{
   question: "Q6: Which of the following is NOT a server-side scripting language?",
   a:"JAVASCRIPT",
   b:"PHP",
   c:"PYTHON",
   d:"RUBY",
   ans:"ans1"
},
{
   question: "Q7: Which tag is used to define an HTML table? ",
   a:"break",
   b:"table",
   c:"ul",
   d:"html",
   ans:"ans2"
},
{
   question: "Q8: Which of the following is used for version control in software development? ",
   a:"PHP",
   b:"VISUAL STUDIO",
   c:"GIT",
   d:"RUBY",
   ans:"ans3"
}

];

const question= document.querySelector('.question');
const option1= document.querySelector('#option1');
const option2= document.querySelector('#option2');
const option3= document.querySelector('#option3');
const option4= document.querySelector('#option4');
const submit=document.querySelector('#submit');

const answers= document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount=0;
let score=0;

const loadQuestion= ( ) =>{
    const questionList = quizDB[questionCount];

    question.innerText= questionList.question;

    option1.innerText= questionList.a;
    option2.innerText= questionList.b;
    option3.innerText= questionList.c;
    option4.innerText= questionList.d;

}
loadQuestion();
const getCheckAnswer=() =>{
let answer;

answers.forEach((curAnsElem)=> {
  if(curAnsElem.checked){
    answer=curAnsElem.id;
  }

});
return answer;
};

const deselectAll=()=>{
    answers.forEach((curAnsElem) => curAnsElem.checked=false);
}

submit.addEventListener('click',( )=>{
   const checkedAnswer= getCheckAnswer();
   console.log(checkedAnswer);

   if(checkedAnswer == quizDB[questionCount].ans ){
    score++;
   };

   questionCount++;

deselectAll();

 if(questionCount<quizDB.length){
    loadQuestion();
}
else{
 showScore.innerHTML=`
 <h3> You Scored ${score}/${quizDB.length} ✌️ </h3>
 <button class="btn" onclick="location.reload()"> Play Again </button>

 `
}
showScore.classList.remove('scoreArea');

});
