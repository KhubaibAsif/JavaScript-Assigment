


var sec_html = document.getElementById('sec')
var min_html = document.getElementById('minutes')
var millisec_html = document.getElementById('millisec')
var start_btn = document.getElementById('start_btn')



let seconds = 0;
let minutes = 0;
let milliseconds = 0;

var watchInterval;


function start() {

    watchInterval = setInterval(function(){
        milliseconds++
        if(milliseconds >= 99){
            seconds++
            milliseconds = 0
        }
        if(seconds >= 59){
            minutes++
            seconds = 0
        }
        millisec_html.innerText = milliseconds
        sec_html.innerText = seconds < 10 ? '0' + seconds : seconds
        min_html.innerText =  minutes < 10 ? '0' + minutes : minutes

        // disable the buttton
        start_btn.disabled =  true
    },10)

}
function stop() {

    clearInterval(watchInterval)

    // enable the button
    start_btn.disabled =  false
}
function reset() {
    clearInterval(watchInterval)
    milliseconds = 0;
    minutes = 0;
    seconds = 0;
    min_html.innerText = 0;
    sec_html.innerText = 0;
    millisec_html.innerText = 0;
    
    // enable the button
    start_btn.disabled =  false
}