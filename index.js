

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg = "dice"+ randomNumber1 + ".png" ;

var randomImageSrc = "images/" + randomDiceImg;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSrc);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSrc2  = "images/" + "dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSrc2 )


function refreshPage() {
    window.location.reload();
}

refreshButton.addEventListener('click', refreshPage);


if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Play 2 Wins!";
} else if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Play 1 Wins!";
} else {
    document.querySelector("h1").innerHtml = "Draw!" ;
}


