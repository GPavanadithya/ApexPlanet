//Questions for Quiz
const quizdata = [
    {
        question: "What is the full form of HTML?",
        a: "Hyper Transfer Mail Language",
        b: "HyperText Markup Language",
        c: "Heavy Text Markup Language",
        d: "Hyper Tool Markup Language",
        correct: "b"
    },
    {
        question: "What does CSS stand for?",
        a: "Creative Style Sheets",
        b: "Computer Style Sheets",
        c: "Cascading Style Sheets",
        d: "Colorful Style Sheets",
        correct: "c"
    },
    {
        question: "Which year did the World Wide Web become publicly available?",
        a: "1989",
        b: "1995",
        c: "1993",
        d: "1991",
        correct: "d"
        ["1989", "1991", "1993", "1995"]
    },
    {
        question: "Full form of DOM?",
        a: "Document Object Method",
        b: "Document Object Model",
        c: "Document Oriented Model",
        d: "Data Object Model",
        correct: "b",
    },
    {
        question: "Which of the following is a JavaScript framework?",
        a: "React",
        b: "Angular",
        c: "Vue",
        d: "All of the above",
        correct: "d"
    },
    {
        question: "Which of the following is used to style web pages?",
        a: "<script>",
        b: "<asset>",
        c: "<style>",
        d: "<link>",
        correct: "c"
    },
]
let currentQuiz = 0;
let score = 0;

const quiz = document.getElementById("quiz");
const questions = document.getElementById("questions");
const answers = document.querySelectorAll(".answer");

const a_text = document.getElementById("op_a");
const b_text = document.getElementById("op_b");
const c_text = document.getElementById("op_c");
const d_text = document.getElementById("op_d");

const submit_Btn = document.getElementById("submit");

function loadQuiz() {
    clearselected();

    const currentData = quizdata[currentQuiz];

    questions.innerText = currentData.question;
    a_text.innerText = currentData.a;
    b_text.innerText = currentData.b;
    c_text.innerText = currentData.c;
    d_text.innerText = currentData.d;
}

function clearselected() {
    answers.forEach(input => {
        input.checked = false;
    });
}

function useranswer() {
    for (let input of answers) {
        if (input.checked) {
            return input.id;
        };
    };
    return null;
};

submit_Btn.addEventListener("click", () => {
    const selectedanswer = useranswer();
    if (selectedanswer === null) {
        alert("Please tick the answer before submit..")
        return;
    };

    const iscorrect = selectedanswer === quizdata[currentQuiz].correct
    if (iscorrect) {
        score++;
    } currentQuiz++;

    if (currentQuiz < quizdata.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `
            <h2>you got score of ${score} out of ${quizdata.length} correct ✅<h2>
            <button onclick="location.reload()">Try again...</button>`
    };
});
loadQuiz()

// Joke API
const jokeBut = document.getElementById("joke_But");
const jokeDisplay = document.getElementById("jokeDisplay");
jokeBut.addEventListener("click", async () => {
    try {
        const res = await fetch("https://official-joke-api.appspot.com/jokes/random")

        const data = await res.json()
        jokeDisplay.innerHTML = `<p><strong>${data.setup}</strong><br>${data.punchline}</p>`
    } catch (error) {
        jokeDisplay.innerHTML = `Failed to fetch the joke... Sorry and Try Again..`
    }
})


