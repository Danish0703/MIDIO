document.getElementById("quiz-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const correctAnswers = {
        q1: "C",
        q2: "B",
        q3: "C",
        q4: "D",
        q5: "B",
        q6: "C",
        q7: "C",
        q8: "B",
        q9: "A",
        q10: "B",
        q11: "A",
        q12: "A",
        q13: "B",
        q14: "B",
        q15: "B",
        q16: "B",
        q17: "B",
        q18: "A",
        q19: "B",
        q20: "B",
        q21: "B",
        q22: "C",
        q23: "B",
        q24: "B",
        q25: "C"
    };

    let score = 0;

    for (let question in correctAnswers) {
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (userAnswer && userAnswer.value === correctAnswers[question]) {
            score++;
        }
    }

    const totalQuestions = Object.keys(correctAnswers).length;
    const result = `You scored ${score} out of ${totalQuestions}.`;
    document.getElementById("result").innerHTML = result;
});