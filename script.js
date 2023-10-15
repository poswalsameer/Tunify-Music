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

let cheques = document.getElementById('cheques');
let og = document.getElementById('og');
let wakeUp = document.getElementById('wakeUp');
let pind = document.getElementById('pind');
let levels = document.getElementById('levels');
let obsessed = document.getElementById('obsessed');

let songImage = document.getElementById('songImage');
let songName = document.getElementById('songName');
let singerName = document.getElementById('singerName');

let up = document.getElementById('up');
let down = document.getElementById('down');

let userIcon = document.getElementById('userIcon');
let userLogin = document.getElementById('userLogin');
let cross = document.getElementById('cross');

cross.addEventListener('click', ()=>{

    userLogin.style.transition = 'position 2s ease-in-out';

    // userLogin.style.right = '-30%';

    //changing the opacity of logout bar to 0 on clicking the cross button
    userLogin.style.opacity = '0';

})

userIcon.addEventListener('click', ()=>{

    // userLogin.style.position = 'absolute';
    // userLogin.style.right = '1%';
    userLogin.style.transition = 'position 2s ease-in-out';

    // userLogin.style.right = '1%';

    //changing the opacity of logout bar to 1 on clicking the user Icon
    userLogin.style.opacity = '1';
    console.log("Fired");

})


up.addEventListener('click', ()=>{

    if( !music.paused && music.volume < 1 ){
        music.volume += 0.1;
    }

})

down.addEventListener('click', ()=>{

    if( !music.paused && music.volume > 0 ){
        music.volume -= 0.1;
    }

})

//Playing and pausing the song
playBtn.addEventListener('click', ()=>{
    if( music.paused || music.currentTime==0 ){
        music.play();
        document.getElementById('playBtn').src = 'pause.png';  
    }
    else{
        music.pause();
        document.getElementById('playBtn').src = 'play.png';
    }
})

cheques.addEventListener('click', ()=> {

    music.src = 'Cheques.mp3';
    music.play();
    document.getElementById('playBtn').src = 'pause.png'; 
    
    //changing the image, song name according to the song
    songImage.src = 'cheques.jpg';
    songName.innerText = 'Cheques';
    singerName.innerText = 'Shubh';
    

})

og.addEventListener('click', ()=> {

    music.src = 'OG.mp3';
    music.play();
    document.getElementById('playBtn').src = 'pause.png'; 
    
    songImage.src = 'Og.jpg';
    songName.innerText = 'OG';
    singerName.innerText = 'Shubh';

})

wakeUp.addEventListener('click', ()=> {

    music.src = 'Wake Up.mp3';
    music.play();
    document.getElementById('playBtn').src = 'pause.png';
   
    songImage.src = 'wakeUp.jpg';
    songName.innerText = 'Wake Up';
    singerName.innerText = 'Gurinder Gill';

})

pind.addEventListener('click', ()=> {

    music.src = 'Pind Da Riwaaz.mp3';
    music.play();
    document.getElementById('playBtn').src = 'pause.png';
    songImage.src = 'pindDaRiwaaz.jpg';
    songName.innerText = 'Pind Da Riwaaz';
    singerName.innerText = 'Wazir Patar';
    

})

levels.addEventListener('click', ()=> {

    music.src = 'Levels (MrJatt.Im).mp3';
    music.play();
    document.getElementById('playBtn').src = 'pause.png';
    songImage.src = 'levels.jpg';
    songName.innerText = 'Levels';
    singerName.innerText = 'Sidhu Moose Wala';

})

obsessed.addEventListener('click', ()=> {

    music.src = 'Obsessed - 320Kbps-(Mr-Jat.in).mp3';
    music.play();
    document.getElementById('playBtn').src = 'pause.png';
    songImage.src = 'obsessed.jpg';
    songName.innerText = 'Obsessed';
    singerName.innerText = 'Riar Saab';

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

function logOut(){

    window.location.href = 'login.html';

}

