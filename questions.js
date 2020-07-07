
let answer_1 = 'Frankfurter';
let answer_2 = 'Bremer';
let answer_3 = 'Berliner';
let answer_4 = 'Hamburger';

function nextQuestion() {
    document.getElementById('question').innerHTML = 'Wie nennt man ein mit gebratenem Hackfleich belegtes Brötchen?';
    document.getElementById('answer1').innerHTML = answer_1;
    document.getElementById('answer2').innerHTML = answer_2;
    document.getElementById('answer3').innerHTML = answer_3;
    document.getElementById('answer4').innerHTML = answer_4;
}

function answer(a) {

    if(a == 1) {
        selected_answer = answer_1; 
    }

    else if(a == 2) {
        selected_answer = answer_2

    }
    else if(a == 3) {
        selected_answer = answer_3

    }

    else {
        selected_answer = answer_4;
    }
    
    if (selected_answer == answer_4) {
        document.getElementById('not-correct').classList.add('d-none');
        document.getElementById('correct').classList.remove('d-none');
    }

    else {
        document.getElementById('correct').classList.add('d-none');
        document.getElementById('not-correct').classList.remove('d-none');
    }
}
