const noteContainer = document.getElementById('noteContainer');
const createBtn = document.getElementById('btn');

function saveOnSystem() {
	localStorage.setItem('notes', noteContainer.innerHTML);
}

function showNote() {
	const savedNotes = localStorage.getItem('notes');
	if (savedNotes) {
		noteContainer.innerHTML = savedNotes;
	}
}

createBtn.addEventListener('click', () => {
	let boxnote = document.createElement('div');
	let p = document.createElement('p');
	let btnDelete = document.createElement('button');

	boxnote.className = 'boxnote';
	p.className = 'boxnote-content';
	p.setAttribute('contenteditable', 'true');
	btnDelete.className = 'delete-btn';
	btnDelete.innerHTML = '<i class="fa-solid fa-trash"></i>';

	boxnote.appendChild(p);
	boxnote.appendChild(btnDelete);
	noteContainer.appendChild(boxnote);
	saveOnSystem(); // Save immediately after creating a new note
});

noteContainer.addEventListener('click', function (e) {
	if (e.target.classList.contains('delete-btn') || e.target.tagName === 'I') {
		e.target.closest('.boxnote').remove();
		saveOnSystem();
	}
});

noteContainer.addEventListener('keyup', function (e) {
	if (e.target.classList.contains('boxnote-content')) {
		saveOnSystem();
	}
});

// Show saved notes on page load
showNote();
