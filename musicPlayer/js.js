let rangeID = document.getElementById("rangeID");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("controlPlayPU");
let audioSource = document.getElementById("audioSource");
let songTitle = document.getElementById("songTitle");
let intervalId;

let playlist = [
	{
		src: "./songs/Ballade No. 1 in G Minor, Op. 23 Arranged by Eugene Ysaye.mp3",
		title: "Ballade No. 1 in G Minor",
	},
	{
		src: "./songs/Liebesleid Love's Sorrow .mp3",
		title: "Liebesleid Love's Sorrow",
	},
	{ src: "./songs/The voice in my heart.mp3", title: "The Voice in My Heart" },
];

let currentSongIndex = 0;

function loadSong(index) {
	audioSource.src = playlist[index].src;
	songTitle.innerText = playlist[index].title;
	song.load();
}

function playPause() {
	if (ctrlIcon.classList.contains("fa-pause")) {
		song.pause();
		ctrlIcon.classList.remove("fa-pause");
		ctrlIcon.classList.add("fa-play");
		clearInterval(intervalId);
	} else {
		song.play();
		ctrlIcon.classList.add("fa-pause");
		ctrlIcon.classList.remove("fa-play");
		intervalId = setInterval(() => {
			rangeID.value = song.currentTime;
		}, 500);
	}
}

rangeID.addEventListener("input", function () {
	song.currentTime = rangeID.value;
});

song.onloadedmetadata = function () {
	rangeID.max = song.duration;
	rangeID.value = song.currentTime;
};

song.ontimeupdate = function () {
	rangeID.value = song.currentTime;
};

function nextSong() {
	currentSongIndex = (currentSongIndex + 1) % playlist.length;
	loadSong(currentSongIndex);
	playPause();
}

function prevSong() {
	currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
	loadSong(currentSongIndex);
	playPause();
}

loadSong(currentSongIndex);
