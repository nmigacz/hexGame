correctRandomHex = "#" + Math.floor(Math.random() * 16777215).toString(16);
incorrectRandomHex = "#" + Math.floor(Math.random() * 16777215).toString(16);

document.getElementById("hexNum").innerHTML = correctRandomHex;

let correctColor = Math.floor(Math.random() * 2);

if(correctColor === 1){
    document.getElementById("first").style.backgroundColor = correctRandomHex;
    document.getElementById("second").style.backgroundColor = incorrectRandomHex;
    document.getElementById("first").addEventListener("click", function() {alert("Correct!")});
    document.getElementById("second").addEventListener("click", function() {alert("Incorrect!")});
} else{
    document.getElementById("second").style.backgroundColor = correctRandomHex;
    document.getElementById("first").style.backgroundColor = incorrectRandomHex;
    document.getElementById("second").addEventListener("click", function() {alert("Correct!")});
    document.getElementById("first").addEventListener("click", function() {alert("Incorrect!")});
}