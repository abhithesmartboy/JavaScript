const songs = [
    { path: "./music/song1.mp3", image: "./images/ishq.jpg", title: "Ishq Hai" },
    { path: "./music/song2.mp3", image: "./images/pehle.webp", title: "Pehle Bhi" },
    { path: "./music/song3.mp3", image: "./images/soulmate.jpg", title: "Soulmate" }
];

let index = 0;
let shuffle = false;
let loopSong = false;

const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const songImg = document.getElementById("songImg");
const title = document.getElementById("title");
const playlist = document.getElementById("playlist");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

function loadSong() {
    audio.src = songs[index].path;
    songImg.src = songs[index].image;
    title.innerText = songs[index].title;

    document.querySelectorAll("#playlist li").forEach((item, i) => {
        item.classList.toggle("active-song", i === index);
    });
}

function renderPlaylist() {
    playlist.innerHTML = "";
    songs.forEach((song, i) => {
        let li = document.createElement("li");
        li.innerText = song.title;
        li.onclick = () => {
            index = i;
            loadSong();
            aplay();
        };
        playlist.appendChild(li);
    });
}
renderPlaylist();
loadSong();

function aplay() {
    audio.play();
    songImg.style.animationPlayState = "running";
    document.querySelector('.fa-play').style.display = 'none';
    document.querySelector('.fa-pause').style.display = 'block';
}

function apause() {
    audio.pause();
    songImg.style.animationPlayState = "paused";
    document.querySelector('.fa-pause').style.display = 'none';
    document.querySelector('.fa-play').style.display = 'block';
}

progress.addEventListener("input", () => {
    audio.currentTime = progress.value * audio.duration / 100;
});

audio.addEventListener("timeupdate", () => {
    progress.value = audio.currentTime * 100 / audio.duration;

    currentTimeEl.innerText = formatTime(audio.currentTime);
    durationEl.innerText = formatTime(audio.duration);
});

volume.addEventListener("input", () => {
    audio.volume = volume.value;
});

audio.addEventListener("ended", () => {
    if (loopSong) {
        audio.currentTime = 0;
        aplay();
    } else {
        nextSong();
    }
});

function nextSong() {
    index = shuffle ? Math.floor(Math.random() * songs.length) : (index + 1) % songs.length;
    loadSong();
    aplay();
}

function prevSong() {
    index = (index - 1 + songs.length) % songs.length;
    loadSong();
    aplay();
}

function toggleShuffle() {
    shuffle = !shuffle;
    document.getElementById("shuffleBtn").style.color = shuffle ? "#11825c" : "black";
}

function toggleLoop() {
    loopSong = !loopSong;
    document.getElementById("loopBtn").style.color = loopSong ? "#11825c" : "black";
}

function formatTime(sec) {
    let mins = Math.floor(sec / 60) || 0;
    let secs = Math.floor(sec % 60) || 0;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}
