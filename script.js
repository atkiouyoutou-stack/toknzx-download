let seconds = 20;

const time = document.getElementById("time");
const bar = document.getElementById("bar");
const btn = document.getElementById("btn");

let timer = setInterval(() => {

    seconds--;

    time.innerHTML = seconds;

    let progress = ((20 - seconds) / 20) * 100;
    bar.style.width = progress + "%";

    if (seconds <= 0) {

        clearInterval(timer);

        time.innerHTML = "✔";

        btn.innerHTML = "Continue";
        btn.disabled = false;

        btn.onclick = function () {
            window.location.href = "subscribe.html";
        };

    }

}, 1000);
