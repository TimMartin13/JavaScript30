const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    // Change seconds to degrees
    const offset = 90;
    const secondsDegrees = ((seconds / 60) * 360) + offset;
    secondHand.style.transform = `rotate(${ secondsDegrees }deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + offset;
    minuteHand.style.transform = `rotate(${ minutesDegrees }deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + offset;
    hourHand.style.transform = `rotate(${ hoursDegrees }deg)`;

    console.log(seconds);
}

setInterval(setDate, 1000);
