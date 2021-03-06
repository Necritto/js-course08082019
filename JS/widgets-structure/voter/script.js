'use strict';

let voter = new Voter({
  elem: document.querySelector('.voter')
});

voter.setVote(1);

function Voter(options) {
  const elem = options.elem;

  let down = elem.querySelector('.down'),
    up = elem.querySelector('.up'),
    vote = elem.querySelector('.vote');

  down.addEventListener('click', () => {
    vote.innerHTML = parseInt(vote.textContent) - 1;
  });

  up.addEventListener('click', () => {
    vote.innerHTML = parseInt(vote.textContent) + 1;
  });

  function setVote(vote) {
    elem.querySelector('.vote').innerHTML = vote;
  }

  this.setVote = setVote;
}