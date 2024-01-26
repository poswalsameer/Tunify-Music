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
let excuses = document.getElementById('excuses');
let yaari = document.getElementById('yaari');

let songImage = document.getElementById('songImage');
let songName = document.getElementById('songName');
let singerName = document.getElementById('singerName');

let up = document.getElementById('up');
let down = document.getElementById('down');

let userIcon = document.getElementById('userIcon');
let userLogin = document.getElementById('userLogin');
let cross = document.getElementById('cross');

let forwardBtn = document.getElementById('forwardBtn');
let backwardBtn = document.getElementById('backwardBtn');

//this is a variable to keep the count of the current song which is playing
let songCount = 0;

// a bool check which is done if we directly play the song with clicking on the play button instead of div
let firstPlay = false;






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


//all the code for the forward button

forwardBtn.addEventListener('click', ()=>{

    console.log("song is running");

    if( songCount === 1 || firstPlay === true ){
        
        music.src = 'Wake up.mp3';
        music.play();
        document.getElementById('playBtn').src = 'pause.png'; 

        songCount = 2;
        
        songImage.src = 'wakeUp.jpg';
        songName.innerText = 'Wake Up';
        singerName.innerText = 'Gurinder Gill';

        firstPlay = false;
    }
    else if( songCount === 2 ){

        music.src = 'OG.mp3';
        music.play();
        songCount = 3;
        
        document.getElementById('playBtn').src = 'pause.png'; 
        
        songImage.src = 'Og.jpg';
        songName.innerText = 'OG';
        singerName.innerText = 'Shubh';

    }
    else if( songCount === 3 ){

        music.src = 'Pind Da Riwaaz.mp3';
        music.play();
        songCount = 4;
        
        document.getElementById('playBtn').src = 'pause.png';
        songImage.src = 'pindDaRiwaaz.jpg';
        songName.innerText = 'Pind Da Riwaaz';
        singerName.innerText = 'Wazir Patar';

    }
    else if( songCount === 4 ){

        music.src = 'Levels (MrJatt.Im).mp3';
        music.play();
        songCount = 5;
        
        document.getElementById('playBtn').src = 'pause.png';
        songImage.src = 'levels.jpg';
        songName.innerText = 'Levels';
        singerName.innerText = 'Sidhu Moose Wala';

    }
    else if( songCount === 5 ){

        music.src = 'Obsessed - 320Kbps-(Mr-Jat.in).mp3';
        music.play();
        songCount = 6;
        
        document.getElementById('playBtn').src = 'pause.png';
        songImage.src = 'obsessed.jpg';
        songName.innerText = 'Obsessed';
        singerName.innerText = 'Riar Saab';

    }
    else if(songCount === 6 ){
        
        music.src = 'Excuses.mp3';
        music.play();
        songCount = 7;
        console.log(songCount);
        document.getElementById('playBtn').src = 'pause.png';
        songImage.src = 'excuses.jpg';
        songName.innerText = 'Excuses';
        singerName.innerText = 'AP Dhillon';
    

    }

    else if(songCount === 7 ){
        
        music.src = 'Yaari Chandigarh Waliye.mp3';
        music.play();
        songCount = 8;
        console.log(songCount);
        document.getElementById('playBtn').src = 'pause.png';
        songImage.src = 'yaari.jpg';
        songName.innerText = 'Yaari Chandigarh Waliye';
        singerName.innerText = 'Ranjit Bawa';
    

    }

    else if(songCount === 8 ){
        
        music.src = 'Cheques.mp3';
        music.play();
        songCount = 1;
        
        document.getElementById('playBtn').src = 'pause.png'; 
        
        //changing the image, song name according to the song
        songImage.src = 'cheques.jpg';
        songName.innerText = 'Cheques';
        singerName.innerText = 'Shubh';
    

    }



})


//adding logic to the move backward button 
backwardBtn.addEventListener('click', ()=>{

    console.log("song is running");

    if( songCount === 1 || firstPlay === true ){
        
        music.src = 'Yaari Chandigarh Waliye.mp3';
        music.play();
        songCount = 8;
        console.log(songCount);
        document.getElementById('playBtn').src = 'pause.png';
        songImage.src = 'yaari.jpg';
        songName.innerText = 'Yaari Chandigarh Waliye';
        singerName.innerText = 'Ranjit Bawa';

        firstPlay = false;
    }
    else if( songCount === 2 ){

        music.src = 'Cheques.mp3';
        music.play();
        songCount = 1;
        
        document.getElementById('playBtn').src = 'pause.png'; 
        
        //changing the image, song name according to the song
        songImage.src = 'cheques.jpg';
        songName.innerText = 'Cheques';
        singerName.innerText = 'Shubh';

    }
    else if( songCount === 3 ){

        music.src = 'Wake up.mp3';
        music.play();
        document.getElementById('playBtn').src = 'pause.png'; 

        songCount = 2;
        
        songImage.src = 'wakeUp.jpg';
        songName.innerText = 'Wake Up';
        singerName.innerText = 'Gurinder Gill';

    }
    else if( songCount === 4 ){

        music.src = 'OG.mp3';
        music.play();
        songCount = 3;
        
        document.getElementById('playBtn').src = 'pause.png'; 
        
        songImage.src = 'Og.jpg';
        songName.innerText = 'OG';
        singerName.innerText = 'Shubh';

    }
    else if( songCount === 5 ){

        music.src = 'Pind Da Riwaaz.mp3';
        music.play();
        songCount = 4;
        
        document.getElementById('playBtn').src = 'pause.png';
        songImage.src = 'pindDaRiwaaz.jpg';
        songName.innerText = 'Pind Da Riwaaz';
        singerName.innerText = 'Wazir Patar';

    }
    else if(songCount === 6 ){
        
        music.src = 'Levels (MrJatt.Im).mp3';
        music.play();
        songCount = 5;
        
        document.getElementById('playBtn').src = 'pause.png';
        songImage.src = 'levels.jpg';
        songName.innerText = 'Levels';
        singerName.innerText = 'Sidhu Moose Wala';
    

    }

    else if(songCount === 7 ){
        
        music.src = 'Obsessed - 320Kbps-(Mr-Jat.in).mp3';
        music.play();
        songCount = 6;
        
        document.getElementById('playBtn').src = 'pause.png';
        songImage.src = 'obsessed.jpg';
        songName.innerText = 'Obsessed';
        singerName.innerText = 'Riar Saab';
    

    }

    else if(songCount === 8 ){
        
        music.src = 'Excuses.mp3';
        music.play();
        songCount = 7;
        console.log(songCount);
        document.getElementById('playBtn').src = 'pause.png';
        songImage.src = 'excuses.jpg';
        songName.innerText = 'Excuses';
        singerName.innerText = 'AP Dhillon';
    

    }

})

//Playing and pausing the song
playBtn.addEventListener('click', ()=>{
    if( music.paused || music.currentTime==0 ){
        music.play();
        document.getElementById('playBtn').src = 'pause.png';
        if( firstPlay === false){
            firstPlay = true;  
        }
       
    }
    else{
        music.pause();
        document.getElementById('playBtn').src = 'play.png';
    }
    
})


cheques.addEventListener('click', ()=> {

    music.src = 'Cheques.mp3';
    music.play();
    songCount = 1;
    console.log(songCount);
    document.getElementById('playBtn').src = 'pause.png'; 
    
    //changing the image, song name according to the song
    songImage.src = 'cheques.jpg';
    songName.innerText = 'Cheques';
    singerName.innerText = 'Shubh';
    

})

og.addEventListener('click', ()=> {

    music.src = 'OG.mp3';
    music.play();
    songCount = 3;
    console.log(songCount);
    document.getElementById('playBtn').src = 'pause.png'; 
    
    songImage.src = 'Og.jpg';
    songName.innerText = 'OG';
    singerName.innerText = 'Shubh';

})

wakeUp.addEventListener('click', ()=> {

    music.src = 'Wake Up.mp3';
    music.play();
    songCount = 2;
    console.log(songCount);
    document.getElementById('playBtn').src = 'pause.png';
   
    songImage.src = 'wakeUp.jpg';
    songName.innerText = 'Wake Up';
    singerName.innerText = 'Gurinder Gill';

})

pind.addEventListener('click', ()=> {

    music.src = 'Pind Da Riwaaz.mp3';
    music.play();
    songCount = 4;
    console.log(songCount);
    document.getElementById('playBtn').src = 'pause.png';
    songImage.src = 'pindDaRiwaaz.jpg';
    songName.innerText = 'Pind Da Riwaaz';
    singerName.innerText = 'Wazir Patar';
    

})

levels.addEventListener('click', ()=> {

    music.src = 'Levels (MrJatt.Im).mp3';
    music.play();
    songCount = 5;
    console.log(songCount);
    document.getElementById('playBtn').src = 'pause.png';
    songImage.src = 'levels.jpg';
    songName.innerText = 'Levels';
    singerName.innerText = 'Sidhu Moose Wala';

})

obsessed.addEventListener('click', ()=> {

    music.src = 'Obsessed - 320Kbps-(Mr-Jat.in).mp3';
    music.play();
    songCount = 6;
    console.log(songCount);
    document.getElementById('playBtn').src = 'pause.png';
    songImage.src = 'obsessed.jpg';
    songName.innerText = 'Obsessed';
    singerName.innerText = 'Riar Saab';

})

excuses.addEventListener('click', ()=> {

    music.src = 'Excuses.mp3';
    music.play();
    songCount = 7;
    console.log(songCount);
    document.getElementById('playBtn').src = 'pause.png';
    songImage.src = 'excuses.jpg';
    songName.innerText = 'Excuses';
    singerName.innerText = 'AP Dhillon';

})

yaari.addEventListener('click', ()=> {

    music.src = 'Yaari Chandigarh Waliye.mp3';
    music.play();
    songCount = 8;
    console.log(songCount);
    document.getElementById('playBtn').src = 'pause.png';
    songImage.src = 'yaari.jpg';
    songName.innerText = 'Yaari Chandigarh Waliye';
    singerName.innerText = 'Ranjit Bawa';

})

music.addEventListener('timeupdate', ()=> {

    console.log("time is updating");
    //updating the audio bar;

    console.log("above musicTime");
    let musicTime = parseInt((music.currentTime/music.duration)*100);

    console.log("above value")
    document.getElementById('bar').value = musicTime;
})
audioProgress.addEventListener('change', ()=> {

    console.log("latest log");
    music.currentTime = (document.getElementById('bar').value * music.duration) / 100;

})

// function logOut(){

//     window.location.href = 'index.html';

// }

const logOutBtn = document.getElementById('userIcon');

logOutBtn.addEventListener('click', ()=>{
    window.location.href = 'index.html';
})