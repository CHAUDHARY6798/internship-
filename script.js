// const questions=[
//     {
//         question:"what is HTML stand for?",
//         answers: [
            
//               {text: "Hyper type markup limited",correct :false},
//               {text:  "Hyper text markup limited",correct :false},
//               {text: "Hyper text markup language",correct :true},
//               {text: "High type  markup language",correct :false},
//         ] 
//     },
//         {
//             question:"what is Css stand for?",
//             answers: [
                
//                   {text:  "Cute style sheet",correct :false},
//                   {text: "Cascading  style sheet",correct :true},
//                   {text: "Codeup style sheet",correct :false},
//                   {text: "Computer style sheet",correct :false},
//             ] 
//         },
//         {
//             question:"what is SQL stand for?",
//             answers: [
                
//                   {text: " Sequel query language",correct :true},
//                   {text: " Size quest limited",correct :false},
//                   {text:  " Serially quiz light",correct :false},
//                 {text: " Sequel queen limited",correct :false},
//             ] 
//         },
//         {
//             question:"choose the correct HTML  tag for the largest heading ?",
//             answers: [
                
//                   {text:" heading",correct :false},
//                   {text: "h6",correct :false},
//                   {text: "head",correct :false},
//                   {text:  "h1",correct :true},
//             ] 
//         }
    
// ];



// let users = [];

// function register() {
//   const username = document.getElementById("register-username").value;
//   const password = document.getElementById("register-password").value;
//   const user = { username, password };
//   users.push(user);
//   alert(`User ${username} created successfully!`);
//   showLoginForm();
// }

// function login() {
//   const username = document.getElementById("login-username").value;
//   const password = document.getElementById("login-password").value;
//   const user = users.find((user) => user.username === username && user.password === password);
//   if (user) {
//     alert(`Welcome, ${username}!`);
//     startQuiz();
//   } else {
//     alert("Invalid username or password");
//   }
// }

// function showLoginForm() {
//   document.getElementById("login-form").style.display = "block";
//   document.getElementById("register-form").style.display = "none";
// }

// function showRegisterForm() {
//   document.getElementById("login-form").style.display = "none";
//   document.getElementById("register-form").style.display = "block";
// }
// function startGame() {
//     // Hide the auth container and show the game container
//     document.getElementById("auth-container").style.display = "none";
//     document.getElementById("game-container").style.display = "block";
    
//     // Start the quiz
//     startQuiz();
//   }
//     // Add event listeners to login and register forms
//     document.getElementById("login-btn").addEventListener("click", login);
//     document.getElementById("register-btn").addEventListener("click", register);
//      document.getElementById("login-username").addEventListener("keypress", (e) => {
//       if (e.key === "Enter") {
//         login();
//       }
//     });
//     document.getElementById("register-username").addEventListener("keypress", (e) => {
//       if (e.key === "Enter") {
//         register();
//     }
// });


// // Add event listeners to login and register forms
// document.addEventListener("DOMContentLoaded", () => {
//   showLoginForm();
// });

//  const questionElement=document.getElementById("question");
//   const answerbutton= document.getElementById("ans-buttons");
//  const nextButton=document.getElementById("next-btn");

//    let currentQuestionIndex=0;
//   let score=0;
 
//   function startQuiz(){
//     currentQuestionIndex=0;
//     score=0;
//     nextButton.innerHTML="Next";
//     showQuestion();

// }
// function showQuestion(){
//   resetState();
//   let currentQuestion=questions[currentQuestionIndex];
//   let questionNo=currentQuestionIndex+1;
//   questionElement.innerHTML=questionNo+"."+ currentQuestion.
//   question;


//   currentQuestion.answers.forEach(answer =>{
//     const button=document.createElement("button");
//     button.innerHTML=answer.text;
//     button.classList.add("btn");
//     answerbutton.appendChild(button);
//     if(answer.correct){
//         button.dataset.correct=answer.correct;

//     }
//     button.addEventListener("click",selectAnswer);




//  });


// }
// function resetState(){
//     nextButton.style.display="none";
//     while(answerbutton.firstChild){
//         answerbutton.removeChild(answerbutton.firstChild);

        
//     }
// }
// function selectAnswer(e){
//     const selectedBtn=e.target;
//     const isCorrect=selectedBtn.dataset.correct==="true";
//     if(isCorrect){
//         selectedBtn.classList.add("correct");
//         score++;
//     }else{
//         selectedBtn.classList.add("incorrect");

//     }
//     Array.from(answerbutton.children).forEach(button=>{
//         if(button.dataset.correct==="true"){
//             button.classList.add("correct");

    
//         }
//         button.disabled="true";

//     });
//     nextButton.style.display="block";

//  }
//  function showScore(){
//     resetState();
//     questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;

//     nextButton.innerHTML="Play Again";
//     nextButton.style.display="block";

//  }
//  function handleNextButton(){
//     currentQuestionIndex++;
//     if(currentQuestionIndex< questions.length){
//         showQuestion();
//     }else{
//         showScore();
//     }


//  }
//  nextButton.addEventListener("click",()=>{
//     if(currentQuestionIndex< questions.length){
//         handleNextButton();

//     }
//     else{
//      startQuiz();
//      }
//  })

// startQuiz();


const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper type markup limited", correct: false },
            { text: "Hyper text markup limited", correct: false },
            { text: "Hyper text markup language", correct: true },
            { text: "High type markup language", correct: false }
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Cute style sheet", correct: false },
            { text: "Cascading style sheet", correct: true },
            { text: "Codeup style sheet", correct: false },
            { text: "Computer style sheet", correct: false }
        ]
    },
    {
        question: "What does SQL stand for?",
        answers: [
            { text: "Sequel query language", correct: true },
            { text: "Size quest limited", correct: false },
            { text: "Serially quiz light", correct: false },
            { text: "Sequel queen limited", correct: false }
        ]
    },
    {
        question: "Choose the correct HTML tag for the largest heading?",
        answers: [
            { text: "heading", correct: false },
            { text: "h6", correct: false },
            { text: "head", correct: false },
            { text: "h1", correct: true }
        ]
    }
];

let users = [];

function register() {
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
    const user = { username, password };
    users.push(user);
    alert(`User ${username} created successfully!`);
    showLoginForm();
}

function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert(`Welcome, ${username}!`);
        startGame();
    } else {
        alert("Invalid username or password");
    }
}

function showLoginForm() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("register-form").style.display = "none";
}

function showRegisterForm() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
}

function startGame() {
    document.getElementById("auth-container").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    startQuiz();
}

document.getElementById("register-btn").addEventListener("click", register);
document.getElementById("login-btn").addEventListener("click", login);

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("ans-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    if (correct) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
