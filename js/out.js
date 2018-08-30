/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 4 furry & coin\n\nfunction Furry() {\n    this.x = 0;\n    this.y = 0;\n    this.direction = \"right\";\n}\n\n// new Furry();\n\nfunction Coin() {\n    this.x = Math.floor(Math.random() * 10);\n    this.y = Math.floor(Math.random() * 10);\n}\n\n// new Coin();\n\n\n// 5 konstruktor Game\n\nfunction Game() {\n    //ponizej \"board\" nie jest nazwa id, tylko dowolnie nadaną\n    this.board = document.querySelectorAll('section#board div');\n    this.furry = new Furry();\n    this.coin = new Coin();\n    this.score = 0;\n    //6 obliczanie pozycji\n    var self = this;\n    this.startGame = function () {\n        this.idSetInterval = setInterval(function () {\n            self.moveFurry();\n        }, 300);\n    };\n    //czyszczenie widoku\n    this.hideVisibleFurry = function () {\n        document.querySelector('.furry').classList.remove(\"furry\");\n    };\n    this.index = function (x, y) {\n        return x + y * 10;\n    };\n\n    this.showFurry = function () {\n        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');\n    };\n\n    this.showCoin = function () {\n        this.board[this.index(this.coin.x, this.coin.y)].classList.add(\"coin\");\n    };\n    this.moveFurry = function () {\n        this.hideVisibleFurry();\n        if (this.furry.direction === \"right\") {\n            this.furry.x = this.furry.x + 1;\n        } else if (this.furry.direction === \"left\") {\n            this.furry.x = this.furry.x - 1;\n        } else if (this.furry.direction === \"up\") {\n            this.furry.y = this.furry.y - 1;\n        } else if (this.furry.direction === \"down\") {\n            this.furry.y = this.furry.y + 1;\n        }\n\n        this.gameOver();\n        this.showFurry();\n        this.checkCoinCollision();\n    };\n    //zad 8\n\n    // var self = this;\n    // this.startGame = function(){\n    //  this.idSetInterval= setInterval(function () {\n    //      self.moveFurry()\n    //  },250);\n    //  };\n    // obsluga klawiatury/inny sposob\n\n    this.furryDirection = function (event) {\n        if (event.which === 37) {\n            this.furry.direction = \"left\";\n        } else if (event.which === 39) {\n            this.furry.direction = \"right\";\n        } else if (event.which === 38) {\n            this.furry.direction = \"up\";\n        } else if (event.which === 40) {\n            this.furry.direction = \"down\";\n        }\n    };\n    document.addEventListener('keydown', function (event) {\n        self.furryDirection(event);\n    });\n    this.checkCoinCollision = function () {\n        if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {\n            document.querySelector('.coin').classList.remove('coin');\n            var score = document.querySelector('#score div strong');\n            //parseInt przerabia stringa na liczbe\n            score.textContent = parseInt(score.textContent) + 1;\n            //textContent - nie innerText (sprawdzic)\n            this.coin = new Coin();\n            this.showCoin();\n        }\n    };\n    this.gameOver = function () {\n        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {\n            clearInterval(this.idSetInterval);\n            var over = document.getElementById('over');\n            over.classList.remove('invisible');\n            var score = document.querySelector('.endScore');\n            var strong = document.querySelector('strong');\n            score.textContent = strong.textContent;\n            this.hideVisibleFurry();\n        }\n    };\n}\n\n//first view\n\n$(function () {\n\n    var clickCount = 0;\n    var mySound = new sound('sounds/crash.mp3');\n    var mySound2 = new sound('sounds/knock.wav');\n    var mySound3 = new sound('sounds/Baby-chick-sounds.mp3');\n    var clicks = 20;\n\n    function sound(src) {\n        this.sound = document.createElement(\"audio\");\n        this.sound.src = src;\n        this.sound.setAttribute(\"preload\", \"auto\");\n        this.sound.setAttribute(\"controls\", \"none\");\n        this.sound.style.display = \"none\";\n        document.body.appendChild(this.sound);\n        this.play = function () {\n            this.sound.play();\n        };\n        this.stop = function () {\n            this.sound.pause();\n        };\n    }\n    var pictures = ['pictures/kurczak0.png', 'pictures/kurczak1.png', 'pictures/kurczak2.png', 'pictures/kurczak3.png', 'pictures/kurczak4.png', 'pictures/kurczak5.png'];\n\n    $('#image').on('click', function () {\n        clickCount += 1;\n        console.log(\"Liczba kliknięć\", Number(clickCount));\n        $('#clickCounter').text(--clicks);\n        $('#help').text('keep going!');\n        if (clickCount % 4 === 0) {\n            mySound.play();\n            $('#image').attr('src', pictures[clickCount / 4]);\n        } else if (clickCount > 20) {\n            mySound.stop();\n            mySound2.stop();\n            $('#help').text(\"Wanna play?\");\n        } else {\n            mySound2.play();\n        }\n\n        if (clicks === 0 || clicks < 0) {\n            mySound3.play();\n            $('#gameName').text('A HUNGRY CHICKEN');\n            $('#hello').text('thanks!!!');\n            $('#play').text(\"let's feed them \");\n            $('#here').text(\"I'm huuungry!\");\n            $('#help').text(\"Wanna play?\");\n            $('.play').removeClass('invisible');\n        }\n    });\n    $('.play').on('click', function () {\n        $('.game').removeClass('invisible');\n        $('.gameBeginning').addClass('invisible');\n        //zad7\n        var newGame = new Game();\n        newGame.showFurry();\n        newGame.showCoin();\n\n        //odpalam metode startGame na obiekcie newGame\n        newGame.startGame();\n    });\n\n    $('#restart').click(function () {\n        $('.coin').removeClass('coin');\n        $(\"#over\").addClass('invisible');\n        var newGame = new Game();\n        newGame.showFurry();\n        newGame.showCoin();\n\n        //odpalam metode startGame na obiekcie newGame\n        newGame.startGame();\n    });\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });