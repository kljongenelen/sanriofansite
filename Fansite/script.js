

let firstBox = document.querySelector("#firstDiv");
let thridBox = document.querySelector("#thirdDiv");

let fifthBox = document.querySelector("#fifthDiv");
let eighthBox = document.querySelector("#eighthDiv");

let sixthBox = document.querySelector("#sixthDiv");
let fourthBox = document.querySelector("#fourthDiv");

let twelthBox = document.querySelector("#twelvethDiv");
let tenthBox = document.querySelector("#tenthDiv");

let eleventhBox = document.querySelector("#eleventhDiv");
let fourteenthBox = document.querySelector("#fourteenthDiv");

function firstfunction(){
    firstBox.innerHTML = " <br> Don't click on Cinnamoroll, he's flying!";
    firstBox.style.backgroundColor = "red";
    firstBox.style.color = "darkred";
}

thridBox.addEventListener("click", firstfunction);

function secondfunction(){
    fifthBox.innerHTML = " <br> Don't click on Kuromi!!";
    fifthBox.style.backgroundColor = "red";
    fifthBox.style.color = "darkred";
}

eighthBox.addEventListener("click", secondfunction);

function thirdfunction(){
    fourthBox.innerHTML = " <br> Don't click on My Melody, she's swinging!";
    fourthBox.style.backgroundColor = "red";
    fourthBox.style.color = "darkred";
}

sixthBox.addEventListener("click", thirdfunction);

function fourthfunction(){
    tenthBox.innerHTML = " <br> Don't click on Pompompurin, he's eating!";
    tenthBox.style.backgroundColor = "red";
    tenthBox.style.color = "darkred";
}

twelthBox.addEventListener("click", fourthfunction);

function fifthfunction(){
    eleventhBox.innerHTML = " <br> Don't click on Pochacco, he's looking at a butterfly!";
    eleventhBox.style.backgroundColor = "red";
    eleventhBox.style.color = "darkred";
}

fourteenthBox.addEventListener("click", fifthfunction);