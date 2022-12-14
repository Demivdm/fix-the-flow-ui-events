let interaction = document.querySelector('a:nth-of-type(12)')
//variabelen

var kleur = document.getElementById('kleur')
var draaien = document.getElementById('draaien')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

//interactie1

kleur.addEventListener('mouseover', function handleMouseOver() {
  kleur.classList.add('achtergrond');
});

kleur.addEventListener('mouseout', function handleMouseOut() {
  kleur.classList.remove('achtergrond');
});




