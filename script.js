console.log("Spotify is working");

let songList = [

    {songName: "Cheques", filePath: "C:\Coding\Web Development\SpotifyClone\SpotifyClone\Cheques.mp3", coverPath: "C:\Coding\Web Development\SpotifyClone\SpotifyClone\cheques.jpg"},

    {songName: "Cheques", filePath: "C:\Coding\Web Development\SpotifyClone\SpotifyClone\Wake Up.mp3", coverPath: "C:\Coding\Web Development\SpotifyClone\SpotifyClone\wakeUp.jpg"},

    {songName: "Cheques", filePath: "C:\Coding\Web Development\SpotifyClone\SpotifyClone\OG.mp3", coverPath: "C:\Coding\Web Development\SpotifyClone\SpotifyClone\Og.jpg"},

    {songName: "Cheques", filePath: "C:\Coding\Web Development\SpotifyClone\SpotifyClone\Pind Da Riwaaz.mp3", coverPath: "C:\Coding\Web Development\SpotifyClone\SpotifyClone\pindDaRiwaaz.jpg"},

    {songName: "Cheques", filePath: "C:\Coding\Web Development\SpotifyClone\SpotifyClone\Levels (MrJatt.Im).mp3", coverPath: "C:\Coding\Web Development\SpotifyClone\SpotifyClone\levels.jpg"},

    {songName: "Cheques", filePath: "C:\Coding\Web Development\SpotifyClone\SpotifyClone\Obsessed - 320Kbps-(Mr-Jat.in).mp3", coverPath: "C:\Coding\Web Development\SpotifyClone\SpotifyClone\obsessed.jpg"}

]

let music = new Audio('Cheques.mp3');
let playBtn = document.getElementById('playBtn');
let audioProgress = document.getElementById('bar');
// music.play();
// let chequeSong = new Audio('Cheques.mp3');
let og = document.getElementById('og');
let wakeUp = document.getElementById('wakeUp');
let pind = document.getElementById('pind');
let levels = document.getElementById('levels');
let obsessed = document.getElementById('obsessed');


//Playing and pausing the song
playBtn.addEventListener('click', ()=>{
    if( music.paused || music.currentTime==0 ){
        music.play();
        document.getElementById('play').src = 'pause.png';  
    }
    else{
        music.pause();
        document.getElementById('play').src = 'play.png';
    }
})

og.addEventListener('click', ()=> {

    music.src = 'OG.mp3';
    music.play();
    document.getElementById('play').src = 'pause.png'; 

})

wakeUp.addEventListener('click', ()=> {

    music.src = 'Wake Up.mp3';
    music.play();
    document.getElementById('play').src = 'pause.png'; 

})

pind.addEventListener('click', ()=> {

    music.src = 'Pind Da Riwaaz.mp3';
    music.play();
    document.getElementById('play').src = 'pause.png'; 

})

levels.addEventListener('click', ()=> {

    music.src = 'Levels (MrJatt.Im).mp3';
    music.play();
    document.getElementById('play').src = 'pause.png'; 

})

obsessed.addEventListener('click', ()=> {

    music.src = 'Obsessed - 320Kbps-(Mr-Jat.in).mp3';
    music.play();
    document.getElementById('play').src = 'pause.png'; 

})

music.addEventListener('timeupdate', ()=> {
    
    console.log("time is updating");

    //updating the audio bar;

    musicTime = parseInt((music.currentTime/music.duration)*100);
    document.getElementById('bar').value = musicTime;

})

audioProgress.addEventListener('change', ()=> {

    music.currentTime = (bar.value*music.duration)/100;

})
