let question_1 = 'Wie nennt man ein mit gebratenem Hackfleich belegtes Brötchen?';
let question_2 = 'Zweite Frage';
let answer_1 = 'Frankfurter';
let answer_2 = 'Bremer';
let answer_3 = 'Berliner';
let answer_4 = 'Hamburger';
let new_question = 0; 
let progress = 0;

function nextQuestion() {
    new_question = new_question + 1;
    progress = new_question * 10;
    document.getElementById('progress-bar').innerHTML = progress + '%';
    document.getElementById('progress-bar').style.width = progress + '%';
    if (document.getElementById('question').innerHTML == question_1) {
        document.getElementById('question').innerHTML = question_2;
    }

    else {
        document.getElementById('question').innerHTML = question_1;
        document.getElementById('answer1').innerHTML = answer_1;
        document.getElementById('answer2').innerHTML = answer_2;
        document.getElementById('answer3').innerHTML = answer_3;
        document.getElementById('answer4').innerHTML = answer_4;

    }

}

function answer(a) {

    if (a == 1) {
        selected_answer = answer_1;
    }

    else if (a == 2) {
        selected_answer = answer_2

    }
    else if (a == 3) {
        selected_answer = answer_3

    }

    else {
        selected_answer = answer_4;
    }

    if (selected_answer == answer_4) { // Right answer
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
