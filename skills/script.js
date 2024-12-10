// Fetch user data
async function fetchUser() {
    const response = await fetch("http://localhost:5000/api/user");
    const user = await response.json();

    document.getElementById("userName").textContent = user.name;
    document.getElementById("userEmail").textContent = user.email;
}

// Update user data
document.getElementById("profileForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:5000/api/user", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
        alert("Profile updated successfully!");
        fetchUser();
    }
});

// Load user data on page load
fetchUser();
