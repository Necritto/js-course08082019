'use strict';

function Voter(options) {
  const elem = options.elem;
  this._voteElem = elem.querySelector('.vote');

  elem.addEventListener('click', this._click.bind(this));
}

Voter.prototype._click = function(event) {
  if (event.target.closest('.down')) {
    this._voteDecrease();
  } else if (event.target.closest('.up')) {
    this._voteIncrease();
  }
};

Voter.prototype._voteDecrease = function () {
  this.vote.innerHTML = parseInt(this.vote.textContent) - 1;
};

Voter.prototype._voteIncrease = function () {
  this.vote.innerHTML = parseInt(this.vote.textContent) + 1;
};

Voter.prototype.setVote = function (vote) {
  this.elem.querySelector('.vote').textContent = +vote;
};
