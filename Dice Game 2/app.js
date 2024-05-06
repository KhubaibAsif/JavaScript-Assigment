
var result_num = document.getElementById('result_num');
var user_num = document.getElementById('user_num');
var result_box = document.getElementById('result_box');

function checkNumber(usernumber){

    var RandomNumber = Math.ceil(Math.random() * 6)
    user_num.innerText = usernumber
    result_num.innerText = RandomNumber
    if(usernumber == RandomNumber){
        result_box.innerText  = "Congrats!,You Won"
        result_box.style.color = 'green'
    }
        else{
            result_box.innerText = "Sorry!,You Lose"
            result_box.style.color = 'red'
        }
    
}