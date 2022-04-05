
const quizData = [
    {
        question: "what is the definition of a smart home?",
        a: "A home that turns off something when you leave it",
        b: "A home that has a lot of electronic devices inn it",
        c: "A home that has been built inn a smart way",
        d: "A home with electronic devices that can be controlled remotely by a smartphone or computer",
        correct: "d",
    },
    {
        question: "Is a smart home completely secure?",
        a: "No because it can be hacked/breached",
        b: "Yes because the user can see everything that is happening",
        c: "Depends on the user",
        d: "Yes because it is created to create security in the home",
        correct: "a",
    },
    {
        question: "What is one way someone can get into your smart home security?",
        a: "They can get trough just by hacking from home",
        b: "They get access to the internet that the smart home techonology is connected too",
        c: "Someone can get access trough knowing where the device is located",
        d: "There is no way someone can get access",
        correct: "b",
    },
    {
        question: "Is there a way to make sure your home security is more secure",
        a: "No its already completely secure",
        b: "Yes the user can stay updated about potential bugs or leaks with the devices",
        c: "No the user cannot do anything about security",
        d: "Yes by making sure to not let anyone get access to your internet",
        correct: "b",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
        }
    }
})