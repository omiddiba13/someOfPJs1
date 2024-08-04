const noteContainer = document.getElementById('noteContainer');
const createBtn = document.getElementById('btn');
const note = document.getElementById('boxNote');

function saveOnSystem() {
	localStorage.setItem('notes', noteContainer.innerHTML);
}
function showNote() {
	noteContainer.innerHTML = localStorage.getItem('notes');
}
createBtn.addEventListener('click', () => {
	let inputbox = document.createElement('p');
	let btnDelete = document.createElement('button');
	inputbox.className = 'boxnote';
	inputbox.setAttribute('contenteditable', 'true');
	btnDelete.src = '';
	noteContainer.appendChild(inputbox).appendChild(btnDelete);
});
noteContainer.addEventListener('click', function (e) {
	if (e.target.tagName === 'BUTTON') {
		e.target.parentElement.remove();
		saveOnSystem();
	} else if (e.target.tagName === 'P') {
		note.forEach((not) => {
			not.onkeyup = function () {
				saveOnSystem();
			};
		});
	}
});
