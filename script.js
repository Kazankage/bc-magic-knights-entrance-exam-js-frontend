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
let squad=[    'been chosen by the captain of the Golden Dawn! Congratulations',
            'been chosen by the captain of the Silver Eagles! Congratulations',
            'been chosen by the captain of the Crimson Lions! Congratulations',
            'been chosen by the captain of the Blue Rose! Congratulations',
            'been chosen by the captain of the Green Mantis! Congratulations',
            'been chosen by the captain of the Coral Peacocks! Congratulations',
            'been chosen by the captain of the Purple Orcas! Congratulations',
            'been chosen by the captain of the Azure Deers! Congratulations',
            'been chosen by the captain of the Black Bulls! Congratulations',
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
        question: 'Do you have a preference on what squad get placed in?',
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
        question: 'How do you best describe personality?',
        answers: [
            { text: 'Confident' },
            { text: 'Crazy' },
            { text: 'Prideful' },
            { text: 'Caring' },
            { text: 'Relaxed' },
            { text: 'Stubborn' },
            { text: 'Protective' },
            { text: 'Hot-headed' },
            { text: 'Rebellious' }
        ]
    }, 
    {
        question: 'What is your preferred colour?',
        answers: [
            { text: 'Gold' },
            { text: 'Black' },
            { text: 'Silver' },
            { text: 'Blue' },
            { text: 'Crimson' },
            { text: 'Green' },
            { text: 'Coral' },
            { text: 'Purple' },
            { text: 'Azure' }
        ]
    },
    {
        question: 'What do you like to do on your down time?',
        answers: [
            { text: 'Relax' },
            { text: 'Go on adventures' },
            { text: 'Eat' },
            { text: 'Read a book' },
            { text: 'Play video games' },
            { text: 'Train' },
            { text: 'Hike' },
            { text: 'Travel' },
            { text: 'Sleep' }
        ]
    },
    {
        question: 'You see a person who seems to be down on his luck asking for change. What do you do?',
        answers: [
            { text: 'Give them money' },
            { text: 'Point them to the nearest shelter' },
            { text: 'Buy them something to eat' },
            { text: 'Ignore them' },
            { text: 'Make fun of them' },
            { text: 'Challenge them for it' },
            { text: 'Give them a lecture as to why you should not help them' },
            { text: 'Stare at them with disgust' },
            { text: 'Wave' }
        ]
    },
    {
        question: 'What is your goal in life?',
        answers: [
            { text: 'To be the best and recognized by others' },
            { text: 'To protect others' },
            { text: 'To help others' },
            { text: 'To become rich' },
            { text: 'To be able to relax' },
            { text: 'To travel all over the world' },
            { text: 'To be better' },
            { text: 'To wake up tomorrow' },
            { text: 'To catch them all' }
        ]
    },
    {
        question: 'Why do you want to be a Magic Knight?',
        answers: [
            { text: 'To be abel to eat all the glorious food' },
            { text: 'To prove to others that I can be just as good, if not better than everyone else' },
            { text: 'For the fame' },
            { text: 'For companions' },
            { text: 'For the power' },
            { text: 'For the fight' },
            { text: 'To be the best' },
            { text: 'To protect others' },
            { text: 'Just to be one' }
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
            { text: 'Creation' }
        ]

    }
    
]