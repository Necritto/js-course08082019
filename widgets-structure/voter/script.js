'use strict';

let voter = new Voter({
  elem: document.querySelector('.voter')
});

voter.setVote(1);

function Voter(options) {
  let elem = options.elem;

  let down = elem.querySelector('.down'),
    up = elem.querySelector('.up'),
    vote = elem.querySelector('.vote');

  down.addEventListener('click', () => {
    vote.innerHTML -= parseInt(vote.textContent);
  });

  up.addEventListener('click', () => {
    vote.innerHTML += parseInt(vote.textContent);
  });

  function setVote(vote) {
    elem.querySelector('.vote').innerHTML = vote;
  }

  this.setVote = setVote;
}