let number1, number2, answer;
let score = 0;

function generateQuestion() {
    number1 = Math.floor(Math.random() * 10) + 1;
    number2 = Math.floor(Math.random() * 10) + 1;
    answer = number1 * number2;
    document.getElementById("question").textContent = `Сколько будет ${number1} * ${number2}?`;
}

function checkAnswer() {
    let user_answer = document.getElementById("answer").value;
    let result = document.querySelector(".result");
    if (parseInt(user_answer) === answer) {
        score++;
    } else {
        score--;
    }
    result.textContent = "Результат: " + score;
    document.getElementById("answer").value = '';
    document.getElementById("check_btn").style.display = 'none';
    generateQuestion();
}

document.getElementById("answer").addEventListener("input", function () {
    let user_answer = this.value;
    let check_btn = document.getElementById("check_btn");
    if (user_answer.length > 0) {
        check_btn.style.display = "block";
    } else {
        check_btn.style.display = "none";
    }
});

document.getElementById("check_btn").addEventListener("click", checkAnswer);

generateQuestion();
