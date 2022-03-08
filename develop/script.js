// Assignment Codes
var generateBtn = document.querySelector("#generate");
var SpcCharcfm;
var Numbrscfm;
var Lletterscfm;
var Cletterscfm;
var Cletters;
var Lletters;
var Numbers;
var SpcChar;
var pwd;
var passLen;
var password;
var passwordText;

// Write password to the #password input
function writePassword() {
	var Password = generatePassword();

	var passwordText = document.querySelector("#password");
}
// passwordText.value = password;

function generatePassword() {
	const Cletters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
	const Lletters = ["abcdefghijklmnopqrstuvwxyz"];
	const Numbers = ["0123456789"];
	const SpcChar = ["!@#$%^&*"];
	var pwd = [];

	do {
		var passLen = prompt("Please enter the password length required");
	} while (passLen < 8 || passLen > 128);

	var Cletterscfm = confirm("Would you like to include capital letters?");

	var Lletterscfm = confirm("Would you like to include lowercase letters?");

	var Numbrscfm = confirm("Would you like to include numebrs?");

	var SpcCharcfm = confirm("Would you like to include special characters?");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
