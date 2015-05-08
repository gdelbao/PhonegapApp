var pictureSource;
var destinationType;

document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {
	pictureSource = navigator.camera.PictureSourceType;
	destinationType = navigator.camera.DestinationType;
}

function onPhotoDataSuccess(imageData) {
	var smallImage=document.getElementById('smallImage');
	
	smallImage.style.display = 'block';
	
	smallImage.src = "data:image/jpeg;base64," + imageData;
}

