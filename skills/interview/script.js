const QUESTIONS = [
    { question: "Tell me about yourself.", hint: "Provide a brief overview of your background, skills, and goals." },
    { question: "Can you describe a challenging project you worked on?", hint: "Use the STAR method (Situation, Task, Action, Result)." },
    { question: "Where do you see yourself in 5 years?", hint: "Show ambition and alignment with the job you're pursuing." },
    { question: "What are your greatest strengths?", hint: "Highlight qualities that are relevant to the job." },
    { question: "What are your weaknesses?", hint: "Be honest but show how you’re working to improve." },
    { question: "Why do you want to work here?", hint: "Focus on the company’s values and your alignment with them." },
    { question: "Can you describe a time you worked in a team?", hint: "Focus on your role and contributions to the team’s success." },
    { question: "How do you handle conflict in the workplace?", hint: "Provide an example and emphasize resolution." },
    { question: "What’s your proudest professional accomplishment?", hint: "Share a story that showcases your skills and dedication." },
    { question: "How do you prioritize tasks under pressure?", hint: "Provide a specific example with a successful outcome." },
    { question: "Describe a situation where you solved a complex problem.", hint: "Explain the problem, your approach, and the result." },
    { question: "What motivates you to perform well?", hint: "Discuss intrinsic and extrinsic factors that drive you." },
    { question: "Can you give an example of a time you showed leadership?", hint: "Focus on your ability to guide and inspire others." },
    { question: "How do you handle constructive criticism?", hint: "Share a story of how feedback helped you grow." },
    { question: "What steps do you take to improve your skills?", hint: "Discuss your learning strategies and examples." },
    { question: "How do you adapt to changes in the workplace?", hint: "Provide an example of a successful adaptation." },
    { question: "What do you do when you face a tight deadline?", hint: "Focus on prioritization and time management." },
    { question: "How do you measure success?", hint: "Tie your definition to professional and personal growth." },
    { question: "What role do you typically play in a team?", hint: "Discuss your strengths in collaboration." },
    { question: "Can you share an example of a time you failed?", hint: "Highlight what you learned and how you improved." },
    { question: "How do you stay organized?", hint: "Share tools and techniques that help you stay on track." },
    { question: "What do you do to stay updated in your field?", hint: "Discuss resources, courses, or networks you use." }
];

function getRandomQuestion() {
    return QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
}

function generateFeedback(response, hint) {
    if (response.trim() === "") {
        return "You didn't provide an answer. Try responding with more detail next time.";
    } else if (response.split(" ").length < 10) {
        return "Your response is a bit short. Consider elaborating with examples.";
    } else {
        return `Good effort! Here’s a tip: ${hint}`;
    }
}

const questionElement = document.getElementById("question");
const hintElement = document.getElementById("hint");
const responseElement = document.getElementById("response");
const feedbackElement = document.getElementById("feedback");
const submitAnswerButton = document.getElementById("submitAnswer");
const newQuestionButton = document.getElementById("newQuestion");

function loadNewQuestion() {
    const randomQuestion = getRandomQuestion();
    questionElement.textContent = randomQuestion.question;
    hintElement.textContent = randomQuestion.hint;
    responseElement.value = "";
    feedbackElement.style.display = "none";
}

submitAnswerButton.addEventListener("click", () => {
    const userResponse = responseElement.value;
    const currentHint = hintElement.textContent;
    const feedback = generateFeedback(userResponse, currentHint);
    feedbackElement.textContent = feedback;
    feedbackElement.style.display = "block";
});

newQuestionButton.addEventListener("click", loadNewQuestion);

// Load the first question on page load
loadNewQuestion();