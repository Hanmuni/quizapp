let allQuestions;

let right_answer = 0;
let new_question = 0;
let progress = 0;

function init() {

    fetch('./questions/html.json')
        .then(function (response) {
            allQuestions = response.json();
            nextQuestion();
        });
}


function nextQuestion() {
    hideElements();

    if (new_question == allQuestions.length) {
        finishQuiz();
    }
    else {
        new_question = new_question + 1;
        console.log('Number of questions:',);
        progress = Math.round((new_question / allQuestions.length) * 100);
        document.getElementById('progress-bar').innerHTML = progress + '%';
        document.getElementById('progress-bar').style.width = progress + '%';

        loadQuestion();
    }
}

function loadQuestion() {

    document.getElementById('question').innerHTML = allQuestions[new_question - 1]['question'];

    document.getElementById('answer1').innerHTML = allQuestions[new_question - 1]['answer_1'];
    document.getElementById('answer2').innerHTML = allQuestions[new_question - 1]['answer_2'];
    document.getElementById('answer3').innerHTML = allQuestions[new_question - 1]['answer_3'];
    document.getElementById('answer4').innerHTML = allQuestions[new_question - 1]['answer_4'];
    right_answer = allQuestions[new_question - 1]['right_answer'];
}

function hideElements() {
    document.getElementById('new-question').classList.add('d-none');
    document.getElementById('correct').classList.add('d-none');
}

function answer(a) {

    if (a == right_answer) { // Right answer
        document.getElementById('not-correct').classList.add('d-none');
        document.getElementById('correct').classList.remove('d-none');
        // Show next button
        document.getElementById('new-question').classList.remove('d-none');
    }

    else {
        document.getElementById('correct').classList.add('d-none');
        document.getElementById('not-correct').classList.remove('d-none');
    }
}
function finishQuiz() {
    document.getElementById('quiz-container').classList.add('d-none');
    document.getElementById('quiz-end-container').classList.remove('d-none');
}