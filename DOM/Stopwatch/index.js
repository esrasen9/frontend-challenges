const timer = document.getElementById("timer");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");

let interval;
let lastStartTime = 0;
let millisecondsBeforeLastStart = 0;

const updateTimer = () => {
    let milliseconds = Date.now() - lastStartTime + millisecondsBeforeLastStart;
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    milliseconds = formatMs(milliseconds % 1000);
    if (seconds < 10) seconds = `0${seconds}`
    if (minutes < 10) minutes = `0${minutes}`
    const updatedText = `${minutes}:${seconds}:${milliseconds}`;
    timer.textContent = updatedText;
}


const formatMs = (ms) => {
    if (ms < 10) ms = `00${ms}`;
    else if (ms < 100) ms = `0${ms}`;
    return ms;
}

const startTimer = () => {
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = true;
    lastStartTime = Date.now();
    interval = setInterval(updateTimer, (1000 / 60))
}

const stopTimer = () => {
    startButton.disabled = false;
    resetButton.disabled = false;
    stopButton.disabled = true;
    millisecondsBeforeLastStart += Date.now() - lastStartTime;
    clearInterval(interval);
}

const resetTimer = () => {
    resetButton.disabled = true;
    timer.textContent = "00:00:000";
    millisecondsBeforeLastStart = 0;
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);