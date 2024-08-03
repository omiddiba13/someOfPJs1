const passwordBox = document.getElementById('password');
const lengtht = 10;
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabetSmall = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=<>?[]{}|;:,.';
const allpass = alphabet + alphabetSmall + numbers + symbols;

function createPassword() {
	let password = '';
	password += alphabet[Math.floor(Math.random() * alphabet.length)];
	password += alphabetSmall[Math.floor(Math.random() * alphabetSmall.length)];
	password += numbers[Math.floor(Math.random() * numbers.length)];
	password += symbols[Math.floor(Math.random() * symbols.length)];
	while (lengtht > password.length) {
		password += allpass[Math.floor(Math.random() * allpass.length)];
	}

	passwordBox.value = password;
}
function copy() {
	passwordBox.select();
	passwordBox.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(passwordBox.value);
	alert('Copied the text: ' + passwordBox.value);
}
