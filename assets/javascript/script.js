
var generateBtn = document.querySelector("#generate");

let passlen = '';
let password = ''
let userChoices = [];
let finalOptions = [];

let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
let numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let specialChar = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '/', ':', ';', "'", '"', '<', '>', ',', '.', '?'];

let possibleOptions = [lowerCase, upperCase, numeric, specialChar];

//determines the password length
function passwordLength() {

    while (true) {
        passlen = prompt("Enter desired password length (8 - 128)");

        if (!passlen || isNaN(passlen) || passlen < 8 || passlen > 128) {
            window.alert("Please enter a valid input betwen 8 - 128.");
        } else {
            console.log(passlen);
            return;
            //if the cancel button is hit it re prompts the question instead of quitting out like the charChoices function would
        }
    }
}

//builds array of user responses to the prompt questions
function charChoices() {
    let questions = [["Include lowercase letters? Please answer yes or no"], ["Include uppercase letters? Please answer yes or no"], ["Include numbers? Please answer yes or no"], ["Include special characters? Please answer yes or no"]];
    // while (true) {
        for (let i =0; i < questions.length; i++) {
            let yesOrNo = prompt(questions[i]).toLowerCase();
            if (yesOrNo !== 'yes' && yesOrNo !== 'no') {
                window.alert('Please enter a valid respons of yes or no.')
            } else {
                userChoices.push(yesOrNo);
                console.log(userChoices);
            }
        }
    // }
    //without the while statemnet, even if the answer isnt valid and it re prompts it goes to the next question, with while statement, it just keeps asking the questions over and over non stop
}

//builds he array of the final options of characters for the generated password based on prompt responses
function optionsIncluded() {
    for (let i = 0; i < userChoices.length; i++){
        if (userChoices[i] == 'yes') {
            finalOptions += possibleOptions[i];
            console.log(finalOptions);
            //the last character from each option set isnt seperated from the first character of the next set when it gets added to the final options array
        }
    }
}

//builds the new password
function generatePassword() {
    for (i = 0; i < passlen; i++) {
        let charToAdd = finalOptions[Math.floor(Math.random() * finalOptions.length)];
        password += charToAdd;
    }
};

function resetValues() {
    passlen = '';
    password = ''
    userChoices = [];
    finalOptions = [];
}
// Write password to the #password input
function writePassword() {
    var passwordText = document.querySelector("#password");

    passwordLength();
    charChoices()
    optionsIncluded();
    generatePassword();

    passwordText.value = password;

    resetValues();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);