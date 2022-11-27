var generateBtn = document.querySelector("#generate");



function generatePassword() {

    let passLen = prompt("Choose length between 8 and 128 characters");
    //change to where null will not force the repeat of the prompt so that the ccancel button actually works
    while ( passLen === null ||isNaN(passLen) || passLen < 8 || passLen > 128) {
        window.alert("Please enter a valid response");
        passLen = prompt("Please enter a numeric value between 8 and 128.");  
    };

    let includeLower = prompt("Include lowercase? y/n").toLowerCase().split('', 1).toString();
    while (includeLower != "y" || includeLower != "n") {
        window.alert("Please enter  valid response.\n yes or no");
        includeLower = prompt("Include lowercase? y/n").toLowerCase().split('', 1).toString();
        // console.log(includeLower); conole.log shows it being y or n
    };   

    let includeUpper = prompt("Include uppercase? y/n").toLowerCase().split('', 1).toString();
    console.log(includeUpper);
    while (includeUpper != "y" || includeUpper != "n") {
        window.alert("Please enter  valid response.\n yes or no");
        includeLower = prompt("Include lowercase? y/n").toLowerCase().split('', 1).toString();
        console.log(includeUpper);
    }; 

    let includeNumberic = prompt("Include numbers? y/n").toLowerCase().split('', 1).toString();
    while (includeUpper != "y" || includeUpper != "n") {
        window.alert("Please enter  valid response.\n yes or no");
        includeLower = prompt("Include lowercase? y/n").toLowerCase().split('', 1).toString();
        console.log(includeUpper);
    }; 

    let includeSpecial = prompt("Include special characters? y/n").toLowerCase().split('', 1).toString();
    while (includeUpper != "y" || includeUpper != "n") {
        window.alert("Please enter  valid response.\n yes or no");
        includeLower = prompt("Include lowercase? y/n").toLowerCase().split('', 1).toString();
        console.log(includeUpper);
    }; 

    // function checkLen() {
        
    // }

        


};

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");


    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
