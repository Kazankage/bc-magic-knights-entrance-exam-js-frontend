const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
startButton.addEventListener('click', startExam)
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

function startExam() {
    console.log('Started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
            button.innerText = answer.text
            button.classList.add('btn')
            button.addEventListener('click', selectAnswer)
            answerButtonsElement.appendChild(button) 
    })
}    

function resetState(){
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }

}
function selectAnswer(e){

}
const questions = [
    {
        question: 'What squad do you want to be on?',
        answers: [
            { text: 'Golden Dawn' },
            { text: 'Silver Eagle' },
            { text: 'Blue Rose' },
            { text: 'Crimson Lion' },
            { text: 'Green Mantis' },
            { text: 'Coral Peacock' },
            { text: 'Purple Orca' },
            { text: 'Azure Deer' },
            { text: 'Black Bull' }
        ]
    }
]