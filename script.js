const redColor = document.getElementById("red");
const blueColor = document.getElementById("blue");
const yellowColor = document.getElementById("yellow");
const greenColor = document.getElementById("green");
const randomColor = document.getElementById("random");
const colorName = document.getElementsByClassName("color")[0];
const boldColor = document.getElementsByClassName("bold-color")[0];

colorsChosen = ["RED", "BLUE", "YELLOW", "GREEN"];
//random colors
randomColors = ["purple", "orange", "aqua", "pink", "paleturquoise", "lavender", "mintcream"];

function getRandomColors(){
    return Math.floor(Math.random() * randomColors.length);
}

/* start chaning the background  based on button pressing */

//RED
redColor.addEventListener("click",function() {
    document.body.style.backgroundColor =colorsChosen[0];
    colorName.innerHTML = `${colorsChosen[0]}`;
    boldColor.style.color ="white";
    colorName.style.color = "white";
});

//BLUE
blueColor.addEventListener("click",function() {
    document.body.style.backgroundColor =colorsChosen[1];
    colorName.innerHTML = `${colorsChosen[1]}`;
    boldColor.style.color ="white";
    colorName.style.color = "white";
});

//YELLOW
yellowColor.addEventListener("click",function() {
    document.body.style.backgroundColor =colorsChosen[2];
    colorName.innerHTML = `${colorsChosen[2]}`;
    boldColor.style.color ="magenta";
    colorName.style.color = "magenta";
});


//GREEN
greenColor.addEventListener("click",function() {
    document.body.style.backgroundColor =colorsChosen[3];
    colorName.innerHTML = `${colorsChosen[3]}`;
    boldColor.style.color ="white";
    colorName.style.color = "white";
});

//RANDOM
randomColor.addEventListener("click",function() {
    randomColour = getRandomColors();
    //put a condition for mint cream as it is not showing properly
    if (randomColors[randomColour] =="mintcream") {
        document.body.style.backgroundColor = randomColors[randomColour];
        colorName.innerHTML = randomColors[randomColour];
        boldColor.style.color ="magenta";
        colorName.style.color = "magenta";
    }
    else{
        document.body.style.backgroundColor = randomColors[randomColour];
        colorName.innerHTML = randomColors[randomColour];
        boldColor.style.color ="white";
        colorName.style.color = "white";
    }
});





