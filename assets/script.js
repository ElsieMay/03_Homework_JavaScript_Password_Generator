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
var pwd = [];
var passLen;
var password;
var passwordText = "";

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText1 = document.querySelector("#password");
	passwordText1.value = password;
}

function generatePassword() {
	const Cletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	const Lletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	const Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	const SpcChar = ["!", "@", "#", "$", "%", "^", "&", "*"];

	do {
		passLen = prompt("Please enter the password length required");
	} while (passLen < 8 || passLen > 128);

	do {
		Cletterscfm = confirm("Would you like to include capital letters?");
		Lletterscfm = confirm("Would you like to include lowercase letters?");
		Numbrscfm = confirm("Would you like to include numbers?");
		SpcCharcfm = confirm("Would you like to include special characters?");
	} while (Cletterscfm === false && Lletterscfm === false && Numbrscfm === false && SpcCharcfm === false);

	if (Cletterscfm) {
		pwd = pwd.concat(Cletters);
	}
	if (Lletterscfm) {
		pwd = pwd.concat(Lletters);
	}
	if (Numbrscfm) {
		pwd = pwd.concat(Numbers);
	}
	if (SpcCharcfm) {
		pwd = pwd.concat(SpcChar);
	}
	for (var i = 0; i < passLen; i++) {
		passwordText = passwordText + pwd[Math.floor(Math.random() * pwd.length)];
	}
	return passwordText;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
