const daysText = document.getElementById("days");
const hoursText = document.getElementById("hours");
const minutesText = document.getElementById("minutes");
const secondsText = document.getElementById("seconds");

const countDown = setInterval(() => {
  const now = new Date().getTime();
  const targetDate = new Date("2024-04-29T23:59:59").getTime();
  const remainingTime = targetDate - now;

  const seconds = Math.floor((remainingTime / 1000) % 60);
  const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
  const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

  daysText.innerText = days;
  hoursText.innerText = hours;
  minutesText.innerText = minutes;
  secondsText.innerText = seconds;

  if (remainingTime <= 0) {
    clearInterval(countDown);
    daysText.innerText = "00";
    hoursText.innerText = "00";
    minutesText.innerText = "00";
    secondsText.innerText = "00";
  }
}, 1000);
