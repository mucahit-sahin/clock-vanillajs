const secondHand = document.querySelector(".secondHand");
const minuteHand = document.querySelector(".minuteHand");
const hourHand = document.querySelector(".hourHand");

const dateTitleText = document.querySelector(".dateTitleText");

function clock() {
  const date = new Date();
  const second = date.getSeconds();
  const minute = date.getMinutes();
  const hour = date.getHours();
  const secondDegree = (second * 360) / 60 + 90;
  const minuteDegree = (minute * 360) / 60 + 90;
  const hourDegree = hour * 30 + (minute / 60) * 30 + 90;

  secondHand.style.transform = `rotate(${secondDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
  const secondText = second < 10 ? "0" + second : second;
  const hoursText = hour < 10 ? "0" + hour : hour;
  const minuteText = minute < 10 ? "0" + minute : minute;
  dateTitleText.innerHTML = `${hoursText}:${minuteText}:${secondText}`;
}
setInterval(clock, 1000);
clock();
