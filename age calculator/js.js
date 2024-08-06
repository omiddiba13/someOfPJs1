let userInput = document.getElementById('date');
userInput.max = new Date().toISOString().split('T')[0];

function calculatorAge() {
	let valueBirth = userInput.value;
	let birthDate = new Date(valueBirth);
	let today = new Date();
	let age = today.getFullYear() - birthDate.getFullYear();
	let monthDifference = today.getMonth() - birthDate.getMonth();
	let ageNU = Number(age);
	if (
		monthDifference < 0 ||
		(monthDifference === 0 && today.getDate() < birthDate.getDate())
	) {
		ageNU--;
	}
	document.getElementById('result').innerText = 'your age is' + ` : ${ageNU}`;
	if (ageNU >= 18) {
		alert('you can use a site or continue');
	} else {
		alert('nop');
	}
}
