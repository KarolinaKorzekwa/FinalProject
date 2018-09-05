$(function () {

let clickCount=0;
let mySound = new sound('sounds/crash.mp3');
let mySound2 = new sound('sounds/knock.wav');
let mySound3 = new sound('sounds/Baby-chick-sounds.mp3');
let fireSound = new sound('sounds/fire7s.mp3');
let clicks = 20;

    function sound(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        this.play = function(){
            this.sound.play();
        };
        this.stop = function(){
            this.sound.pause();
        }
    }
const pictures = ['pictures/kurczak0.png','pictures/kurczak1.png','pictures/kurczak2.png','pictures/kurczak3.png','pictures/kurczak4.png','pictures/kurczak5.png'];


$('#image').on('click', function () {
    clickCount += 1;
    console.log("Liczba kliknięć", Number(clickCount));
    $('#clickCounter').text(--clicks);
    $('#help').text('keep going!');
if (clickCount % 4 === 0){
    mySound.play();
    $('#image').attr('src', pictures[clickCount/4]);

} else if (clickCount >20) {
    $('#help').text('Wanna play?');
    mySound.stop();
    mySound2.stop();
}   else{
    mySound2.play();
}

if (clicks===0 && clicks<0) {
    mySound3.play();
$('#gameName').text('A HUNGRY CHICKEN');
$('#hello').text('thanks!!!');
$('#play').text("let's feed them ");
$('#here').text("I'm huuungry!");
$('#help').text("Wanna play?");
$('.play').removeClass('invisible');
}

})

});