const songs = [
    {
        path: "./music/song1.mp3",
        image: "./images/ishq.jpg",
        title: "Ishq Hai"
    },
    {
        path: "./music/song2.mp3",
        image: "./images/pehle.webp",
        title: "Pehle Bhi"
    },
    {
        path: "./music/song3.mp3",
        image: "./images/soulmate.jpg",
        title: "Soulmate"
    },
];

let index = 0;
let audio = document.getElementById("audio");
let progress = document.getElementById("progress");
let songImg = document.getElementById("songImg");
let title = document.getElementById("title");

function loadSong() {
    audio.src = songs[index].path;
    songImg.src = songs[index].image;
    title.innerHTML = songs[index].title;
}
loadSong();

function aplay() {
    audio.play();
    songImg.style.animationPlayState = "running";
    document.querySelector('.fa-play').style.display = 'none';
    document.querySelector('.fa-pause').style.display = 'block';
}

function apause() {
    audio.pause();
    document.querySelector('.fa-pause').style.display = 'none';
    document.querySelector('.fa-play').style.display = 'block';
}

audio.addEventListener("timeupdate", () => {
    progress.value = audio.currentTime * 100 / audio.duration;
});

progress.addEventListener("input", () => {
    audio.currentTime = progress.value * audio.duration / 100;
});

function nextSong() {
    index = (index + 1) % songs.length;
    loadSong();
    aplay();
}

function prevSong() {
    index = (index - 1 + songs.length) % songs.length;
    loadSong();
    aplay();
}
audio.addEventListener("ended", () => {
    nextSong();
});

/*let i = 0;
function nxt(){
    i=i+1;
    audio.src=ar[i].path
    audio.play();
    document.querySelector('.btn,.fa-play').style.display = 'none';
    document.querySelector('.btn,.fa-pause').style.display = 'block';
}
   

setInterval(() => {
    let a = Math.floor(audio.currentTime * 100 / audio.duration);
    console.log(a);
    document.querySelector('.progress .progress-bar').style.width = a + "%";
}, 1000);
 */