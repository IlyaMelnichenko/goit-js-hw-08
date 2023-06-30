import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
    src: "https://player.vimeo.com/video/236203659",
    width: 640
});

player.on('timeupdate', function(data){
    localStorage.setItem("videoplayer-current-time",JSON.stringify(data.seconds));
    console.log(data)
});
const startTime = JSON.parse(localStorage.getItem("videoplayer-current-time")) ?? 0;
console.log(startTime);
player.setCurrentTime(startTime);

