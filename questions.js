let question_1 = 'Wie nennt man ein mit gebratenem Hackfleich belegtes Brötchen?';
let question_1_answer_1 = 'Frankfurter';
let question_1_answer_2 = 'Bremer';
let question_1_answer_3 = 'Berliner';
let question_1_answer_4 = 'Hamburger';

let question_2 = 'Was ist ein Pharisäer?';
let question_2_answer_1 = 'Kaffee mit Rum';
let question_2_answer_2 = 'Kakao mit Rum';
let question_2_answer_3 = 'Tee mit Rum';
let question_2_answer_4 = 'Fruchtsaft mit Rum';


let right_answer = 0;
let new_question = 0;
let progress = 0;


function nextQuestion() {
    hideElements();

    new_question = new_question + 1;
    progress = new_question * 10;
    document.getElementById('progress-bar').innerHTML = progress + '%';
    document.getElementById('progress-bar').style.width = progress + '%';

    if (new_question == 1) {
        loadQuestion1();

    }

    if (new_question == 2) {
        loadQuestion2();
        
}

}

function loadQuestion1() {

    document.getElementById('question').innerHTML = question_1;

    document.getElementById('answer1').innerHTML = question_1_answer_1;
    document.getElementById('answer2').innerHTML = question_1_answer_2;
    document.getElementById('answer3').innerHTML = question_1_answer_3;
    document.getElementById('answer4').innerHTML = question_1_answer_4;
    right_answer = 4;
}

function loadQuestion2() {
    document.getElementById('question').innerHTML = question_2;

    document.getElementById('answer1').innerHTML = question_2_answer_1;
    document.getElementById('answer2').innerHTML = question_2_answer_2;
    document.getElementById('answer3').innerHTML = question_2_answer_3;
    document.getElementById('answer4').innerHTML = question_2_answer_4;
    right_answer = 1;

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