let imgBox = document.getElementById('imgBox');
let QRimg = document.getElementById('Qrimg');
let QrText = document.getElementById('QrText');
function generateQR() {
	if (QrText.value.length > 0) {
		QRimg.src =
			'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' +
			QrText.value;
	}
}
