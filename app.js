var totalMarks = document.getElementById('tm');
var obtMarks = document.getElementById('om');
var result = document.getElementById('result');

function check(){
    var percentage = parseFloat((obtMarks.value / totalMarks.value) * 100);
    if(percentage >= 80 && percentage <= 100){
        result.innerHTML = "Your Grade Is A+ " +"and You Got " + percentage + "%";
    }
    else if(percentage >= 70 && percentage <= 80){
        result.innerHTML = "Your Grade Is A " +"and You Got " + percentage + "%";
    }
    else if(percentage >= 60 && percentage <= 70){
        result.innerHTML = "Your Grade Is B " +"and You Got " + percentage + "%";
    }
    else{
        result.innerHTML = "You Are Fail";
    }
}