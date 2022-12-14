let interaction = document.querySelector('a:nth-of-type(12)')
//variabelen

var kleur = document.getElementById('kleur')
var draaien = document.getElementById('draaien')
var geschud = document.getElementById('schud')


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

