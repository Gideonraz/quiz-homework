// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question:  "Who invented JavaScript?",
    answer: "Brendan Eich",
    options: [
        "Douglas Crockford",
        "Sheryl Sandberg",
        "Brendan Eich",
        "Charles Babbage"
    ]
  },
    {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 3,
    question: "Which is not considered as a JavaScript operator?",
    answer: "This",
    options: [
        "New",
        "Delete",
        "This",
        "My"
    ]
  },
    {
    numb: 4,
    question: "In the end of the JavaScript, what will appear?",
    answer: "The </script>",
    options:  [
        "The <script>",
        "End Statement",
        "Href",
        "The </script>"
    ]
  },
    {
    numb: 5,
    question: "What JavaScript syntax is correct in writing the ('Hello World')?",
    answer: "document.write('Hello World')",
    options: [
        "document.write('Hello World')",
        "System.out.printIn('Hello World')",
        "printIn('Hello World')",
        "text.(Hello World)"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....
  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];




































































































// (function(){
//   // Functions
//   function buildQuiz(){
//     // variable to store the HTML output
//     const output = [];

//     // for each question...
//     myQuestions.forEach(
//       (currentQuestion, questionNumber) => {

//         // variable to store the list of possible answers
//         const answers = [];

//         // and for each available answer...
//         for(letter in currentQuestion.answers){

//           // ...add an HTML radio button
//           answers.push(
//             `<label>
//               <input type="radio" name="question${questionNumber}" value="${letter}">
//               ${letter} :
//               ${currentQuestion.answers[letter]}
//             </label>`
//           );
//         }

//         // add this question and its answers to the output
//         output.push(
//           `<div class="slide">
//             <div class="question"> ${currentQuestion.question} </div>
//             <div class="answers"> ${answers.join("")} </div>
//           </div>`
//         );
//       }
//     );

//     // finally combine our output list into one string of HTML and put it on the page
//     quizContainer.innerHTML = output.join('');
//   }

//   function showResults(){

//     // gather answer containers from our quiz
//     const answerContainers = quizContainer.querySelectorAll('.answers');

//     // keep track of user's answers
//     let numCorrect = 0;

//     // for each question...
//     myQuestions.forEach( (currentQuestion, questionNumber) => {

//       // find selected answer
//       const answerContainer = answerContainers[questionNumber];
//       const selector = `input[name=question${questionNumber}]:checked`;
//       const userAnswer = (answerContainer.querySelector(selector) || {}).value;

//       // if answer is correct
//       if(userAnswer === currentQuestion.correctAnswer){
//         // add to the number of correct answers
//         numCorrect++;

//         // color the answers green
//         answerContainers[questionNumber].style.color = 'lightgreen';
//       }
//       // if answer is wrong or blank
//       else{
//         // color the answers red
//         answerContainers[questionNumber].style.color = 'red';
//       }
//     });

//     // show number of correct answers out of total
//     resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
//   }

//   function showSlide(n) {
//     slides[currentSlide].classList.remove('active-slide');
//     slides[n].classList.add('active-slide');
//     currentSlide = n;
//     if(currentSlide === 0){
//       previousButton.style.display = 'none';
//     }
//     else{
//       previousButton.style.display = 'inline-block';
//     }
//     if(currentSlide === slides.length-1){
//       nextButton.style.display = 'none';
//       submitButton.style.display = 'inline-block';
//     }
//     else{
//       nextButton.style.display = 'inline-block';
//       submitButton.style.display = 'none';
//     }
//   }

//   function showNextSlide() {
//     showSlide(currentSlide + 1);
//   }

//   function showPreviousSlide() {
//     showSlide(currentSlide - 1);
//   }


//   // Variables
//   const quizContainer = document.getElementById('quiz');
//   const resultsContainer = document.getElementById('results');
//   const submitButton = document.getElementById('submit');
//   const myQuestions = [
//     {
//       question: "Who invented JavaScript?",
//       answers: {
//          "Douglas Crockford",
//          "Sheryl Sandberg",
//          "Brendan Eich",
//          "Charles Babbage"
//       },
//       correctAnswer: "c"
//     },
//     {
//       question: "In what HTML element you put JavaScript?",
//       answers: {
//         a: "<js>",
//         b: "<script>",
//         c: "<scripting>",
//         d: "<script/js>"
//       },
//       correctAnswer: "b"
//     },
//     {
//       question: "Which is not considered as a JavaScript operator?",
//       answers: {
//          "New",
//          "Delete",
//          "This",
//          "My"
//       },
//       correctAnswer: "c"
//     },
//     {
//         question: "In the end of the JavaScript, what will appear?",
//         answers: {
//             a: "The <script>",
//             b: "End Statement",
//             c: "Href",
//             d: "The </script>"
//         },
//         correctAnswer: "d"
//     },
//     {
//         question: "What JavaScript syntax is correct in writing the (Hello World)?",
//         answers: {
//             a: "document.write('Hello World')",
//             b: "System.out.printIn('Hello World')",
//             c: "printIn('Hello World')",
//             d: "text.(Hello World)"
//         },
//         correctAnswer: "a"
//     },
  

//   ];

//   // Kick things off
//   buildQuiz();

//   // Pagination
//   const previousButton = document.getElementById("previous");
//   const nextButton = document.getElementById("next");
//   const slides = document.querySelectorAll(".slide");
//   let currentSlide = 0;

//   // Show the first slide
//   showSlide(currentSlide);

//   // Event listeners
//   submitButton.addEventListener('click', showResults);
//   previousButton.addEventListener("click", showPreviousSlide);
//   nextButton.addEventListener("click", showNextSlide);
// })();
