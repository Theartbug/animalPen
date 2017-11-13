'use strict'

function Animal(animal) {
  this.animal = animal;
} // Animal

Animal.prototype.visibility = function() { // Changes visibility and alters button
  let animal = document.querySelector("." + this.animal + "Visibility");
  let animalImg = document.querySelector("." + this.animal + "Img")
  animal.addEventListener('click', function() {
    if(!animalImg.classList.contains('hidden')) {
      animalImg.classList.add('hidden');
      animal.textContent = "Show";
    } else {
      animalImg.classList.remove('hidden');
      animal.textContent = "Hide";
    }
  }); // Event listener
} // visibility

Animal.prototype.flip = function() { // flips animal image
  let animal = document.querySelector("." + this.animal + "Flip");
  let animalImg = document.querySelector("." + this.animal + "Img")
  animal.addEventListener('click', function() {
    if(!animalImg.classList.contains('flipped')) {
      animalImg.classList.toggle('flipped');
    }  else {
      animalImg.classList.toggle('flipped');
    }
  }); // Event listener
} // flip

Animal.prototype.rotate = function() { // rotates animal image
  let animal = document.querySelector("." + this.animal + "Rotate");
  let animalImg = document.querySelector("." + this.animal + "Img")
  animal.addEventListener('click', function() {
    if(!animalImg.classList.contains('rotate') && !animalImg.classList.contains('flipped')) {
      animalImg.classList.toggle('rotate');
      setTimeout(function() {
        animalImg.classList.toggle('rotate')
      }, 2100);
    } else {
      animalImg.classList.toggle('flippedRotate');
      setTimeout(function() {
        animalImg.classList.toggle('flippedRotate')
      }, 2100); // rotates a flipped image properly
    }
  }); // Event listener
} // flip

//create the animal objects

let elephant = new Animal('elephant');
elephant.visibility();
elephant.flip();
elephant.rotate();

let dolphin = new Animal('dolphin');
dolphin.visibility();
dolphin.flip();
dolphin.rotate();

let lizard = new Animal('lizard');
lizard.visibility();
lizard.flip();
lizard.rotate();

let mouse = new Animal('mouse');
mouse.visibility();
mouse.flip();
mouse.rotate();
