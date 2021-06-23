//CountDown

function countDown() {
  const today = new Date(Date.now() + 86400 * 1000 * 1.2);

  var x = setInterval(function () {
    let countDownDate = new Date(today).getTime();
    let now = new Date().getTime();
    let distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var daysID = document.getElementById("days");
    var hoursID = document.getElementById("hours");
    var minutesID = document.getElementById("minutes");
    var secondsId = document.getElementById("seconds");

    if (daysID !== null) {
      daysID.innerHTML = days;
    }
    if (hoursID !== null) {
      hoursID.innerHTML = hours;
    }
    if (minutesID !== null) {
      minutesID.innerHTML = minutes;
    }
    if (secondsId !== null) {
      secondsId.innerHTML = seconds;
    }

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
}

export default countDown;
