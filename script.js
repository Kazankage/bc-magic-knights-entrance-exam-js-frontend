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
let squad=['Golden Dawn',
            'Silver Eagle',
            'Crimson Lion',
            'Blue Rose',
            'Green Mantis',
            'Coral Peacock',
            'Purple Orca',
            'Azure Deer',
            'Black Bull'
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
            // if (answer.correct){
            //     button.dataset.correct = answer.correct
            // }
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
    const selectedButton = e.target
    // const correct = selectedButton.dataset.correct
    // setStatusClass(document.body, correct)
    // Array.from(answerButtonsElement.children).forEach(button =>{
    //     setStatusClass(button, button.dataset.correct)
    // })
    if (shuffledQuestions.length > currentQuestionIndex +1){
    nextButton.classList.remove('hide')
    } else{
         resultsButton.classList.remove('hide')
    }
}

function setStatusClass (element, correct) {
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')  
    element.classList.remove('wrong')
}

function showResults(){
    let results=(Math.floor(Math.random() * 9));
    resultsContainerElement.classList.remove('hide')
    questionContainerElement.classList.add('hide')
    magicKnightSquad.innerHTML=squad[results];
    resultsButton.classList.add('hide')
    startButton.innerText = "Restart"
    startButton.classList.remove('hide')
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
        question: 'How do you describe yourself?',
        answers: [
            { text: 'Focused and Prideful' },
            { text: 'Vain and Awesome' },
            { text: 'Rich and Entitled' },
            { text: 'Beautiful and Dangerous' },
            { text: 'Evil and Cunning' },
            { text: 'Stoic' },
            { text: 'Quiet and Tired' },
            { text: 'Innocent and Deadly' },
            { text: 'Odd and Rebel' }
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