function Time() {

    document.getElementById('sound').play()

    let time = new Date();

    let hour = time.getHours();

    let minute = time.getMinutes();

    let secound = time.getSeconds();

    // rotateDegree
    let hr = hour * (360 / 12);
    let min = minute * (360 / 60);
    let sec = secound * (360 / 60);

    document.getElementById("h").style.transform = "rotate(" + hr + "deg)";
    document.getElementById("m").style.transform = "rotate(" + min + "deg)";
    document.getElementById("s").style.transform = "rotate(" + sec + "deg)";


    
}

setInterval(Time, 1000) 