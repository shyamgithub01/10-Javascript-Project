const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+";

// Select DOM elements
const checkboxLowercase = document.getElementById("lowercase");
const checkboxUppercase = document.getElementById("uppercase");
const checkboxNumber = document.getElementById("number");
const checkboxSymbol = document.getElementById("symbol");
const inputText = document.getElementById("passinput");
const generatebtn = document.getElementById("btn");
const lengthOfPassword = document.getElementById("length");

// Add event listener to the "Generate Password" button
generatebtn.addEventListener("click", () => {
    // Get the selected password length from the input
    const length = parseInt(lengthOfPassword.value);

    // Initialize the character pool and the final password
    let characters = "";
    let password = "";

    // Add characters based on the selected checkboxes
    if (checkboxLowercase.checked) {
        characters += lowercase;
    }
    if (checkboxUppercase.checked) {
        characters += uppercase;
    }
    if (checkboxNumber.checked) {
        characters += numbers;
    }
    if (checkboxSymbol.checked) {
        characters += symbols;
    }

    // Ensure there's at least one type of character selected
    if (characters.length === 0) {
        alert("Please select at least one character type!");
        return;
    }

    // Generate the password
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    // Output the generated password to the input field
    inputText.value = password;
});