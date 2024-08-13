let toastBox = document.getElementById('toastBox');
let successMsg = 'Success';
let errMsg = 'Error';
let invalid = 'Check again';

function showToast(msg, type = 'default') {
	let toast = document.createElement('div');
	toast.classList.add('toast');

	if (type === 'success') {
		toast.classList.add('success');
	} else if (type === 'error') {
		toast.classList.add('error');
	} else if (type === 'invalid') {
		toast.classList.add('invalid');
	}

	toast.innerHTML = msg;
	toastBox.appendChild(toast);

	setTimeout(() => {
		toast.classList.add('show');
	}, 100);

	setTimeout(() => {
		toast.classList.add('fadeout');
		setTimeout(() => {
			toast.remove();
		}, 500);
	}, 3000);
}
