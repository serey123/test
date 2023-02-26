let words = ["мороженое", "пингвин", "крокодил", "бегемот", "телевизор", "человек", "насекомое", "коробка", "динозавр", "бутылка", "автомобиль", "изумруд", "осьминог"];
let ra_index = getRandomInt(0, words.length-1);
let word = words[ra_index];

let letters = [];
let attempts = 5;
document.querySelector(".word").disabled = true;
document.querySelector(".check").onclick = function(){
    let letter = document.querySelector(".letter").value;
    letters.push(letter)
    let out = "";
    for(let i = 0; i < word.length ; i++){
        if (letters.indexOf(word[i]) != -1){
            out = out + word[i];            
        }
        else{
            out += "*";
        }
    }
    if (word.indexOf(letter) == -1){
        attempts -= 1;
        document.querySelector("span").innerHTML = attempts;
    }
    if (attempts <= 0){
        document.querySelector(".check").disabled = true;
        document.querySelector(".letter").disabled = true;
    }
    if (word == out){
        document.querySelector(".check").disabled = true;
        document.querySelector(".letter").disabled = true;
        alert("вы Угадайка");
    }
    document.querySelector(".word").value = out;
    document.querySelector(".letter").value = "";
    document.querySelector(".letter").focus();
    document.querySelector(".examen").innerHTML = word;
}
document.querySelector(".start").onclick = function(){
    letters = [];
    document.querySelector(".check").disabled = false;
    document.querySelector(".letter").disabled = false;
    attempts = 5;
    document.querySelector("span").innerHTML = attempts;
    ra_index = getRandomInt(0, words.length-1);
    word = words[ra_index];
    let out = "";
    for(let i = 0; i < word.length; i++){
        out = out + "*";
    }
    document.querySelector(".word").value = out;
} 
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
