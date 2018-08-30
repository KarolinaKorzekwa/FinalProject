// 4 furry & coin

function Furry() {
    this.x = 0;
    this.y = 0;
    this.direction = "right";
}

// new Furry();

function Coin() {
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
}

// new Coin();


// 5 konstruktor Game

function Game() {
    //ponizej "board" nie jest nazwa id, tylko dowolnie nadaną
 this.board = document.querySelectorAll('section#board div');
 this.furry = new Furry();
 this.coin = new Coin();
 this.score = 0;
 //6 obliczanie pozycji
    var self = this;
    this.startGame = function(){
        this.idSetInterval= setInterval(function () {
            self.moveFurry();
            },300);
        };
        //czyszczenie widoku
    this.hideVisibleFurry = function () {
        document.querySelector('.furry').classList.remove("furry")
    };
    this.index = function(x,y) {
         return x + (y * 10);
    };

    this.showFurry = function () {
     this.board[ this.index(this.furry.x,this.furry.y) ].classList.add('furry');
    };


    this.showCoin = function () {
        this.board[ this.index(this.coin.x,this.coin.y) ].classList.add("coin");
    };
    this.moveFurry = function () {
     this.hideVisibleFurry();
     if(this.furry.direction === "right") {
         this.furry.x = this.furry.x + 1;
     } else if ( this.furry.direction === "left") {
         this.furry.x = this.furry.x - 1;
     } else if (this.furry.direction === "up") {
         this.furry.y = this.furry.y - 1;
     } else if (this.furry.direction === "down") {
         this.furry.y = this.furry.y + 1;
     }

     this.gameOver();
     this.showFurry();
     this.checkCoinCollision();


    };
 //zad 8

    // var self = this;
    // this.startGame = function(){
    //  this.idSetInterval= setInterval(function () {
    //      self.moveFurry()
    //  },250);
    //  };
 // obsluga klawiatury/inny sposob

    this.furryDirection = function (event) {
    if (event.which===37){
        this.furry.direction="left";
        } else if (event.which===39){
        this.furry.direction="right";
    } else if (event.which===38) {
        this.furry.direction="up";
    } else if (event.which===40){
        this.furry.direction="down";
    }
    };
    document.addEventListener('keydown', function(event){
        self.furryDirection(event);
    });
    this.checkCoinCollision = function () {
    if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
        document.querySelector('.coin').classList.remove('coin');
        var score = document.querySelector('#score div strong');
        //parseInt przerabia stringa na liczbe
        score.textContent=parseInt(score.textContent)+1;
        //textContent - nie innerText (sprawdzic)
        this.coin = new Coin();
        this.showCoin();
}
    };
    this.gameOver = function () {
    if (this.furry.x < 0 || this.furry.x >9 ||this.furry.y<0 || this.furry.y >9){
    clearInterval(this.idSetInterval);
    var over = document.getElementById('over');
    over.classList.remove('invisible');
    var score = document.querySelector('.endScore');
    var strong = document.querySelector('strong');
    score.textContent=strong.textContent;
    this.hideVisibleFurry();
    }
    }
}


//first view

$(function () {

    let clickCount=0;
    let mySound = new sound('sounds/crash.mp3');
    let mySound2 = new sound('sounds/knock.wav');
    let mySound3 = new sound('sounds/Baby-chick-sounds.mp3');
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
            mySound.stop();
            mySound2.stop();
            $('#help').text("Wanna play?");
        }
        else{
            mySound2.play();
        }

        if (clicks===0 || clicks<0) {
            mySound3.play();
            $('#gameName').text('A HUNGRY CHICKEN');
            $('#hello').text('thanks!!!');
            $('#play').text("let's feed them ");
            $('#here').text("I'm huuungry!");
            $('#help').text("Wanna play?");
            $('.play').removeClass('invisible');
        }

    });
    $('.play').on('click', function () {
        $('.game').removeClass('invisible');
        $('.gameBeginning').addClass('invisible');
        //zad7
        var newGame = new Game();
        newGame.showFurry();
        newGame.showCoin();

//odpalam metode startGame na obiekcie newGame
        newGame.startGame();
    })

    $('#restart').click(function(){
        $('.coin').removeClass('coin');
        $("#over").addClass('invisible');
        var newGame = new Game();
        newGame.showFurry();
        newGame.showCoin();

//odpalam metode startGame na obiekcie newGame
        newGame.startGame();
    })




});



