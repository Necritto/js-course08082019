'use strict';

let voter = new Voter({
  elem: document.querySelector('.voter')
});

voter.setVote(1);

function Voter(options) {
  let elem = options.elem;

  function changeDown() {
    let down = elem.querySelector('.down'),
      vote = elem.querySelector('.vote');

    down.addEventListener('click', () => {
      vote.data.innerHTML -= (vote.data - 1);
    });
  }
  

  function setVote(vote) {
    elem.querySelector('.vote').innerHTML = vote;
  }

  this.setVote = setVote;
}