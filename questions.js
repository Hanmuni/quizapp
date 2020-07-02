function nextQuestion() {
    document.getElementById('question').innerHTML = 'Wie wird eine "männliche" Primaballerina genannt?';
    document.getElementById('answer1').innerHTML = 'Primoballerinello';
    document.getElementById('answer2').innerHTML = 'Primoballerano';
    document.getElementById('answer3').innerHTML = 'Primoballerini';
    document.getElementById('answer4').innerHTML = 'Primoballerino';
}

function answer(a) {
    if(a == 'Primoballerino') {
        alert('Es stimmt ☺');

    } else {
        alert('Leider falsch!');}
}
