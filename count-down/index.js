var days_html = document.getElementById('days');
var hours_html = document.getElementById('hours');
var min_html = document.getElementById('minutes');
var sec_html = document.getElementById('seconds');  


var now = new Date();
var baqraEid = new Date('6/17/2024');

var diff = baqraEid.getTime() - now.getTime();


var intereval = setInterval(function(){

    var currentDate = new Date();
    diff = diff-1000

 var days = diff/1000/60/60/24;

//  var hours= diff/1000/60/60;
var hours = 24 -  currentDate.getHours();

//  var minutes = diff/1000/60;
var minutes = 60 - currentDate.getMinutes();

//  var seconds = diff/1000;
var seconds = 60 - currentDate.getSeconds();





days_html.innerText = Math.floor(days) 
hours_html.innerText = Math.floor(hours) 
min_html.innerText = Math.floor(minutes) 
sec_html.innerText = Math.floor(seconds) 




},1000)