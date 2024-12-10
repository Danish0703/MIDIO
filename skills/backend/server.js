const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// File path for users
const usersFilePath = "./data/users.json";

// Helper functions to read/write JSON
const readUsers = () => {
    return JSON.parse(fs.readFileSync(usersFilePath, "utf8"));
};

const writeUsers = (users) => {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

// Routes

// Get User Profile
app.get("/api/user", (req, res) => {
    const users = readUsers();
    res.json(users[0]); // Return the first user
});

// Update User Profile
app.put("/api/user", (req, res) => {
    const { name, email, password } = req.body;
    const users = readUsers();

    const user = users[0]; // Update the first user for simplicity

    if (name) user.name = name;
    if (email) user.email = email;
    if (password) user.password = password;

    writeUsers(users);

    res.json({ message: "User updated successfully", user });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
