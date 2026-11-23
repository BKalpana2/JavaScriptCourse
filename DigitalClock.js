function showTime() {

    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let time = hours + ":" + minutes + ":" + seconds;

    document.getElementById("clock").innerHTML = time;
}

setInterval(showTime, 1000);

showTime();