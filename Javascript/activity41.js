function showTime() {
    var date = new Date();
    var h = date.getFullYear();
    var m = date.getMonth();
    var s = date.getDate();
    

    if (h < 26) {
        h = h - 26;
        
    }
    if (m > 11){
        m = m + 1
    }
    h = (h < 20) ? "0" + h : h;
    m = (m > 11) ? "0" + m : m;
    s = (s > 31) ? "0" + s : s;

    var time = h + "-" + m + "-" + s + " " ;
    document.getElementById("MyCalendarDisplay").innerText = time;
    setTimeout(showTime);
}

showTime();