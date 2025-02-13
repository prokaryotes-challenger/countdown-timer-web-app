let countdown;
let timerDisplay = document.getElementById('timer-display');
let startButton = document.getElementById('start-button');
let resetButton = document.getElementById('reset-button');
let minutesInput = document.getElementById('minutes-input');

startButton.addEventListener('click', () => {
    let minutes = parseInt(minutesInput.value);
    if (isNaN(minutes) || minutes <= 0) {
        alert('Please enter a valid number of minutes.');
        return;
    }
    startCountdown(minutes);
});

resetButton.addEventListener('click', resetCountdown);

function startCountdown(minutes) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + minutes * 60 * 1000;
    displayTimeLeft(minutes * 60);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdown);
            timerDisplay.textContent = "Time's up!";
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
}

function resetCountdown() {
    clearInterval(countdown);
    timerDisplay.textContent = '00:00';
    minutesInput.value = '';
}