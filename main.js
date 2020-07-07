correctRandomHex = "#" + Math.floor(Math.random() * 16777215).toString(16);
incorrectRandomHex = "#" + Math.floor(Math.random() * 16777215).toString(16);

document.getElementById("hexNum").innerHTML = correctRandomHex;

let correctColor = Math.floor(Math.random() * 2);

if(correctColor === 1){
    document.getElementById("first").style.backgroundColor = correctRandomHex;
    document.getElementById("second").style.backgroundColor = incorrectRandomHex;
    document.getElementById("first").addEventListener("click", function() {alert("Correct!"); location.reload();}); //page automatically reloads if answer is correct, same for else statement
    document.getElementById("second").addEventListener("click", function() {alert("Incorrect! Try Again")});
} else{
    document.getElementById("second").style.backgroundColor = correctRandomHex;
    document.getElementById("first").style.backgroundColor = incorrectRandomHex;
    document.getElementById("second").addEventListener("click", function() {alert("Correct!"); location.reload();});
    document.getElementById("first").addEventListener("click", function() {alert("Incorrect! Try Again")});
}