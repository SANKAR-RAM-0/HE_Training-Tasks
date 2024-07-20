
let stopwatchDisplay = document.getElementById('stopwatchDisplay');
let startTime, currentTime, elapsedTime = 0;
let interval;
let isRunning = false;

function updateStopwatch() {
    currentTime = new Date();
    let deltaTime = currentTime.getTime() - startTime.getTime() + elapsedTime;

    let hours = Math.floor(deltaTime / (1000 * 60 * 60));
    let minutes = Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((deltaTime % (1000 * 60)) / 1000);
    let milliseconds = deltaTime % 1000;

    let formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;

    stopwatchDisplay.textContent = formattedTime;
}

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        startTime = new Date();
        interval = setInterval(updateStopwatch, 10); // Update every 10 milliseconds
    }
}

function stopStopwatch() {
    if (isRunning) {
        isRunning = false;
        clearInterval(interval);
        elapsedTime += currentTime.getTime() - startTime.getTime();
    }
}

function resetStopwatch() {
    isRunning = false;
    clearInterval(interval);
    elapsedTime = 0;
    stopwatchDisplay.textContent = '00:00:00.000';
}

document.getElementById('startButton').addEventListener('click', startStopwatch);
document.getElementById('stopButton').addEventListener('click', stopStopwatch);
document.getElementById('resetButton').addEventListener('click', resetStopwatch);


// Another concept without using SetTimeout and SetInterval

// // Selecting the buttons 
// let startbtn = document.getElementById('start')
// let stoptbtn = document.getElementById('stop')
// let resetbtn = document.getElementById('reset')

// //Initializing the variables
// let hour = 0;
// let min = 0;
// let sec = 0;
// let count = 0;

// // Start function
// function start() {
//     timer = true;
//     stopwatch();
// }

// // Stop function
// function stop(){
//     timer = false;
// }

// // Reset Function
// function reset() {
//     timer = false;
//     hour = 0;
//     min = 0;
//     sec = 0;
//     count = 0;
//     // Updating the value to 0
//     document.getElementById('hour').innerHTML = "00";
//     document.getElementById('min').innerHTML = "00";
//     document.getElementById('sec').innerHTML = "00";
//     document.getElementById('count').innerHTML = "00";
// }

// // Main function
// function stopwatch() {
//     if(timer) {
//         count++
        
//         if(count == 100){
//             sec++
//             count = 0;
//         }

//         if(sec == 60){
//             min++
//             sec = 0;
//         }

//         if(min == 60){
//             hour++
//             min = 0;
//             sec = 0;
//         }
//         // variable to hold the string representation as ("01")
//         let hourstr = hour;
//         let minstr = min;
//         let secstr = sec;
//         let countstr = count;

//         if(hour < 10){
//             hourstr = "0" + hourstr;
//         }

//         if(min < 10){
//             minstr = "0" + minstr;
//         }

//         if(sec < 10){
//             secstr = "0" + secstr;
//         }

//         if(count < 10){
//             countstr = "0" + countstr;
//         }

//         document.getElementById('hour').innerHTML = hourstr;
//         document.getElementById('min').innerHTML = minstr;
//         document.getElementById('sec').innerHTML = secstr;
//         document.getElementById('count').innerHTML = countstr;
//         setTimeout(stopwatch, 8); // Used to call the stopwatch function for every 8 sec
//     }
// }
