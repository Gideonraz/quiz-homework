const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


function buildQuiz(){}
function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);


const myQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "In what HTML element you put JavaScript?",
      answers: {
        a: "<js>",
        b: "<scripting>",
        c: "<script>",
        d: "<script/js>"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    },
    {
        question: "In the end of the JavaScript, what will appear?",
        answers: {
            a: "The <script>",
            b: "The </script>",
            c: "Href",
            d: "End Statement"
        },
        correctAnswer: "d"
    },
    {
        question: "What JavaScript syntax is correct in writing the (Hello World)?",
        answers: {
            a: "printIn(Hello World)",
            b: "System.out.printIn(Hello World)",
            c: "document.write(Hello World)",
            d: "text.(Hello World)"
        },
        correctAnswer: "c"
    },

  ];