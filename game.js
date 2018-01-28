var correct = 0;
var total= 0;
var random_num;
var myVar;
var flag=1;
var keyFlag=1;
window.onload = function() {
    document.addEventListener('keydown', function(event) {
        var key = String.fromCharCode(event.keyCode);
        if (key == random_num)
            correct++;
         });
}

function start() {
    if(flag==1){
    document.getElementById("number").innerHTML = "Loading";
    myVar = setInterval(function() {
        myTimer()
    }, 1000);
    document.getElementById("number").setAttribute("style", "height:100% ; margin-top:35%;text-align: center; font-size: 100px;color:#e60073");
    document.getElementById("start").disabled = true;
     document.getElementById("end").disabled = false;
}
flag=0;
}

function myTimer() {
    random_num = Math.round(Math.random() * 8) + 1;
    document.getElementById("number").innerHTML = random_num;
    total++;
}

function end() {
    clearInterval(myVar);
    document.getElementById("number").setAttribute("style", "height:100% ; margin-top:40%; text-align: center; font-size: 38px;color:#e60073");
    document.getElementById("number").innerHTML = "  You Got : " + correct+ " Out Of : " + total;
    correct = 0;
    total = 0;


     document.getElementById("end").disabled = true;
    document.getElementById("start").disabled = false;
    flag=1;
}


function HowToPlay() {

     // Get the modal
     var modal = document.getElementById('myModal');

     // Get the <span> element that closes the modal
     var span = document.getElementsByName("close")[0];

     modal.style.display = "block";

     // When the user clicks on <span> (x), close the modal
     span.onclick = function() {
         modal.style.display = "none";
     }

     // When the user clicks anywhere outside of the modal, close it
     window.onclick = function(event) {
         if (event.target == modal) {
             modal.style.display = "none";
         }
     }
     
 
 }