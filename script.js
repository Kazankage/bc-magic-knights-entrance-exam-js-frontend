const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const resultsButton = document.getElementById('results-btn');
const questionContainerElement = document.getElementById('question-container');
const resultsContainerElement = document.getElementById('results')
const magicKnightSquad = document.querySelector(".squad");
startButton.addEventListener('click', startExam)
nextButton.addEventListener('click', ()=> {
    currentQuestionIndex++
    setNextQuestion()
})
resultsButton.addEventListener('click', showResults)


const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
let squad=[ 'been chosen by the captain of the Golden Dawn! Congratulations',
            'been chosen by the captain of the Silver Eagle! Congratulations',
            'been chosen by the captain of the Crimson Lion! Congratulations',
            'been chosen by the captain of the Blue Rose! Congratulations',
            'been chosen by the captain of the Green Mantis! Congratulations',
            'been chosen by the captain of the Coral Peacock! Congratulations',
            'been chosen by the captain of the Purple Orca! Congratulations',
            'been chosen by the captain of the Azure Deer! Congratulations',
            'been chosen by the captain the Black Bull! Congratulations',
            'not been given an offer to join the Magic Knights. Try again'
 ];

function startExam() { 
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    resultsContainerElement.classList.add('hide')
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
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    // const selectedButton = e.target
    // element.classList.add('selected')
    if (shuffledQuestions.length > currentQuestionIndex +1){
    nextButton.classList.remove('hide')
    } else{
         resultsButton.classList.remove('hide')
    }
}

function clearStatusClass(element){
    element.classList.remove()  
}

function showResults(){
    let results=(Math.floor(Math.random() * 10));
    resultsContainerElement.classList.remove('hide')
    questionContainerElement.classList.add('hide')
    resultsButton.classList.add('hide')
    magicKnightSquad.innerHTML=squad[results];
}


const questions = [
    {
        question: 'What squad do you want to be on?',
        answers: [
            { text: 'Golden Dawn'},
            { text: 'Silver Eagle'},
            { text: 'Crimson Lion'},
            { text: 'Blue Rose'},
            { text: 'Green Mantis'},
            { text: 'Coral Peacock'},
            { text: 'Purple Orca'},
            { text: 'Azure Deer'},
            { text: 'Black Bull'}
        ]

    },
    {
        question: 'How do you best describe yourself?',
        answers: [
            { text: 'Focused' },
            { text: 'Prideful' },
            { text: 'Entitled' },
            { text: 'Beautiful' },
            { text: 'Cunning' },
            { text: 'Stoic' },
            { text: 'Tired' },
            { text: 'Innocent' },
            { text: 'Rebellious' }
        ]

    }, 
    {
        question: 'How do you best describe yourself?',
        answers: [
            { text: 'Focused' },
            { text: 'Prideful' },
            { text: 'Entitled' },
            { text: 'Beautiful' },
            { text: 'Cunning' },
            { text: 'Stoic' },
            { text: 'Tired' },
            { text: 'Innocent' },
            { text: 'Rebellious' }
        ]

    },
    {
        question: 'What magic do you weild?',
        answers: [
            { text: 'Light' },
            { text: 'Steel' },
            { text: 'Plant' },
            { text: 'Fire' },
            { text: 'Earth' },
            { text: 'Wind' },
            { text: 'Water' },
            { text: 'Anti-Magic' },
            { text: 'Darkness' }
        ]

    }
    
]