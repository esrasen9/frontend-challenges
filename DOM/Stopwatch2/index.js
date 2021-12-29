const timer = document.getElementById('timer');
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let seconds = 0;
let intervalId;
let beforeLastStart = 0;

const updateTimer = () => {
    seconds++;
    let hours = Math.floor(seconds / ( 60 * 60)).toString();
    let minutes = Math.floor((seconds - (hours * seconds)) / 60).toString();
    let secs = (seconds % 60).toString();

    hours = hours.padStart(2,"0");
    minutes = minutes.padStart(2,"0");
    secs = secs.padStart(2,"0");

    let newTime = `${hours}:${minutes}:${secs}`;
    timer.textContent = newTime;
    beforeLastStart = seconds;
}

startButton.addEventListener("click",()=>{
   intervalId = setInterval(updateTimer, 1000);
});

resetButton.addEventListener("click",()=>{
    timer.textContent = "00:00:00";
    beforeLastStart= 0;
    seconds = 0;
})

stopButton.addEventListener("click",()=>{
    clearInterval(intervalId);
    seconds = beforeLastStart;
})