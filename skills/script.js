// Simple Form Validation (Sign-Up & Login)
document.getElementById("loginForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        alert("Login successful!");
        // Redirect to the dashboard
        window.location.href = "dashboard.html";
    } else {
        alert("Please fill in all fields.");
    }
});

document.getElementById("signupForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (name && email && password) {
        alert("Account created successfully!");
        // Redirect to login page
        window.location.href = "login.html";
    } else {
        alert("Please fill in all fields.");
    }
});

// Mock Interview Response Handling
function submitResponse() {
    const response = document.getElementById("response").value;
    if (response) {
        alert("Your response has been submitted for review.");
        // Here, you can add the logic to analyze the response with AI or speech recognition.
    } else {
        alert("Please enter a response.");
    }
}

// Progress Bar (for Dashboard)
document.addEventListener("DOMContentLoaded", function () {
    // Simulate a progress bar for soft skills development
    const progress = document.getElementById("progressChart");

    let progressValue = 0;

    const interval = setInterval(function () {
        if (progressValue < 80) {
            progressValue += 1;
            progress.style.background = `linear-gradient(to right, #28a745 ${progressValue}%, #f0f0f0 ${progressValue}%)`;
        } else {
            clearInterval(interval);
        }
    }, 30); // Adjust speed of progress
});