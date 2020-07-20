let allQuestions = [
    {
        'question': 'Wie nennt man ein mit gebratenem Hackfleich belegtes Brötchen?',
        'answer_1': 'Frankfurter',
        'answer_2': 'Bremer',
        'answer_3': 'Berliner',
        'answer_4': 'Hamburger',
        'right_answer': 4
    },

    {
        'question': 'Was ist ein Pharisäer?',
        'answer_1': 'Kaffee mit Rum',
        'answer_2': 'Kakao mit Rum',
        'answer_3': 'Tee mit Rum',
        'answer_4': 'Fruchtsaft mit Rum',
        'right_answer': 1
    },

    {
        'question': 'Was ist der Unterschied zwischen Grillen und Barbecue?',
        'answer_1': 'Es gibt keinen. Es ist nur der englischsprachige Begriff fürs Grillen.',
        'answer_2': 'Beim Barbecue gart das Fleisch mehrere Stunden in heißem Rauch und schmort geschlossen wie in einem Backofen, während es beim Grillen direkt über der Glut brutzelt.',
        'answer_3': 'Beim Barbecue wird ein Gas- oder Elektrogrill benutzt.',
        'answer_4': 'Beim Barbecue wird nur Fleisch gegrillt.',
        'right_answer': 2
    }
];

let right_answer = 0;
let new_question = 0;
let progress = 0;

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