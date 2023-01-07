let interaction = document.querySelector('a:nth-of-type(12)')
//variabelen

var kleur = document.getElementById('kleur')
var draaien = document.getElementById('draaien')
var geschud = document.getElementById('schud')

let interface = document.querySelector('a:nth-of-type(10)')
let feedback = document.querySelector('a:nth-of-type(15)')
let feedforward = document.querySelector('a:nth-of-type(16)')
let and = document.querySelector('a:nth-of-type(3)')
let dev = document.querySelector('a:nth-of-type(4)')
let events = document.querySelector('a:nth-of-type(11)')
let states = document.querySelector('a:nth-of-type(18)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

// interactie 1

  kleur.addEventListener('mouseover', function handleMouseOver() {
  kleur.classList.add('achtergrond');
});

  kleur.addEventListener('mouseout', function handleMouseOut() {
  kleur.classList.remove('achtergrond');
});



// interactie 2

draaien.addEventListener('click', turnHandler)
draaien.addEventListener('animationend', turnHandler)

function turnHandler() {
  draaien.classList.toggle('gedraaid')
}

// interactie 3

geschud.addEventListener('click', shakeHandler)
geschud.addEventListener('animationend', shakeHandler)

function shakeHandler() {
  geschud.classList.toggle('schudden')
}

// interactie 4

interface.addEventListener('click', stretchHandler)
interface.addEventListener('animationend', stretchHandler)

function stretchHandler(){
  interface.classList.toggle('stretch')
}

// interactie 5

feedback.addEventListener('click', upHandler)
feedback.addEventListener('animated', upHandler)

function upHandler(){
  feedback.classList.toggle('up')
}

// interactie 6

feedforward.addEventListener('click', tiltHandler)
feedforward.addEventListener('animated', tiltHandler)

function tiltHandler(){
  feedforward.classList.toggle('tilt')
}

//interactie 7

and.addEventListener('click', skinnyHandler)
and.addEventListener('animated', skinnyHandler)

function skinnyHandler(){
  and.classList.toggle('skinny')
}

//interactie 8

dev.addEventListener('click', colorHandler)
dev.addEventListener('animated', colorHandler)

function colorHandler(){
  dev.classList.toggle('color')
}

//interactie 9

events.addEventListener('click', shadowHandler)
events.addEventListener('animated', shadowHandler)

function shadowHandler(){
  events.classList.toggle('shadow')
}

//interactie 10

states.addEventListener('click', boxHandler)
states.addEventListener('animated', boxHandler)

function boxHandler(){
  states.classList.toggle('box')
}
