let interaction = document.querySelector('a:nth-of-type(12)')

var kleur = document.getElementById('kleur')
var draaien = document.getElementById('draaien')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

function KleurVeranderen(){  
  
  kleur.style.backgroundColor='Red';
   
}

function TurnAround() {

  draaien.classList.add("turnover")
}