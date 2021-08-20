const startButton=document.getElementById("start-btn");
const nextButton=document.getElementById("next-btn");
const questionContainerElement=document.getElementById("question-container");
let  shuffledQuestions, curentQuestionIndex;

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
})

function startGame(){
    // console.log("start button clicked ...");
    startButton.classList.add("hide");
    shuffledQuestions= questions.sort(() => Math.random() - .5);
    currentQuestionIndex=0;
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);

}

function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if(answer.correct)
        {
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button);
    })

}

function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > curentQuestionIndex +1){
        nextButton.classList.remove("hide");
    }else{
        startButton.innerText ="Restart";
        startButton.classList.remove("hide");       
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add("correct");
    } else{
        element.classList.add("wrong");
    }
}

function clearStatusClass(element){
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

const questions= [
    {
        question: "Calculate 2 + 2 = ?",
        answers: [{text: "4", correct:true},
            {text: "2", correct:false},
            {text: "22", correct:false},
            {text: "0", correct:false}]
    },
    {
        question: "Why Kattappa Killed Bahubali?",
        answers: [{text: "Its was RajMaatha Shivagami's Order", correct:true},
            {text: "Just for Fun", correct:false},
            {text: "Kattappa wants become Senathipathi", correct:false},
            {text: "Its was RajaMauli's Order", correct:false}]
    },
    {
        question: "What is KGF ?",
        answers: [{text: "Kolar Gold Factory", correct:false},
        {text: "Kolar Gold Field", correct:true},
        {text: "Its a Movie name", correct:false},
        {text: "Karnataka Gold Field", correct:false}]
    },
    {
        question: "Who is villain for KGF chap- II ?",
        answers: [{text: "Yash", correct:false},
        {text: "Ramachandra Raju (Garuda)", correct:false},
        {text: "Sanjay Dutt", correct:true},
        {text: "Raveena Tandon", correct:false}]
    },

    {
        question: "Who is Chitti in Robo 1.O movie ?",
        answers: [{text: "Artificial Intelligence", correct:false},
        {text: "Computer", correct:false},
        {text: " It's \"Humanoid\" Dr Vasi's dream project", correct:true},
        {text: "Raveena Tandon", correct:false}]
    },

    {
        question: "What is H-2-O?",
        answers: [{text: "Chemical formula", correct:false},
        {text: "Secreate Code", correct:false},
        {text: "Water in chemistry", correct:true},
        {text: "1 Hydrogen & 2 Oxygen molecule", correct:false}]
    },
    {
        question: "What is Oasis?",
        answers: [{text: "Spyware", correct:false},
        {text: "Computer Sofware", correct:false},
        {text: "Might be Hotel name", correct:false},
        {text: "it's water resources in desert", correct:true}]
    },
    {
        question: "What is Pegasus?",
        answers: [{text: "Spyware", correct:true},
        {text: "OS", correct:false},
        {text: "Harware", correct:false},
        {text: "Anti-vrus", correct:false}]
    },
    // duplicated-------------------------
    {
        question: "Calculate 2 + 2 = ?",
        answers: [{text: "4", correct:true},
            {text: "2", correct:false},
            {text: "22", correct:false},
            {text: "0", correct:false}]
    },
    {
        question: "Why Kattappa Killed Bahubali?",
        answers: [{text: "Its was RajMaatha Shivagami's Order", correct:true},
            {text: "Just for Fun", correct:false},
            {text: "Kattappa wants become Senathipathi", correct:false},
            {text: "Its was RajaMauli's Order", correct:false}]
    },
    {
        question: "What is KGF ?",
        answers: [{text: "Kolar Gold Factory", correct:false},
        {text: "Kolar Gold Field", correct:true},
        {text: "Its a Movie name", correct:false},
        {text: "Karnataka Gold Field", correct:false}]
    },
    {
        question: "Who is villain for KGF chap- II ?",
        answers: [{text: "Yash", correct:false},
        {text: "Ramachandra Raju (Garuda)", correct:false},
        {text: "Sanjay Dutt", correct:true},
        {text: "Raveena Tandon", correct:false}]
    },

    {
        question: "Who is Chitti in Robo 1.O movie ?",
        answers: [{text: "Artificial Intelligence", correct:false},
        {text: "Computer", correct:false},
        {text: " It's \"Humanoid\" Dr Vasi's dream project", correct:true},
        {text: "Raveena Tandon", correct:false}]
    },

    {
        question: "What is H-2-O?",
        answers: [{text: "Chemical formula", correct:false},
        {text: "Secreate Code", correct:false},
        {text: "Water in chemistry", correct:true},
        {text: "1 Hydrogen & 2 Oxygen molecule", correct:false}]
    },
    {
        question: "What is Oasis?",
        answers: [{text: "Spyware", correct:false},
        {text: "Computer Sofware", correct:false},
        {text: "Might be Hotel name", correct:false},
        {text: "it's water resources in desert", correct:true}]
    },
    {
        question: "What is Pegasus?",
        answers: [{text: "Spyware", correct:true},
        {text: "OS", correct:false},
        {text: "Harware", correct:false},
        {text: "Anti-vrus", correct:false}]
    }
]