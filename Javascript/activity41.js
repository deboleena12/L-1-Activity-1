function showTime() {
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth();
    var d = date.getDay();
    var a = date.getDate();
    

    if (y < 12) {
        y = y + 12;
    }

    m = (m < 10) ? "0" + m : m;
    d = (d < 2) ? "0" + d : d;
    a = (a < 10) ? "0" + a : a;

    var time = a + "-" + m + "-" + y + " " + d
    document.getElementById("MyCalendarDisplay").innerText = "Month: " + month + ", Year: " + year;
    setTimeout(showTime);
}

showTime();