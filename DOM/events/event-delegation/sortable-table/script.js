'use strict';

class Table {
  constructor(elem) {
    this._elem = elem;
    elem.addEventListener('click', this.click.bind(this));
  }

  click(event) {
    let type = event.target.dataset.type;
    if(type) {
      this[type]();
    }
  }

  number() {
    this._elem.tBodies[0].append(...[...this._elem.rows]
      .slice(1)
      .sort((rowA, rowB) => (rowA.cells[0].innerHTML - 1) > (rowB.cells[0].innerHTML - 1) ? 1 : -1));
  }

  string() {
    this._elem.tBodies[0].append(...[...this._elem.rows]
      .slice(1)
      .sort((rowA, rowB) => rowA.cells[1].innerHTML > rowB.cells[1].innerHTML ? 1 : -1));
  }
}

new Table(document.querySelector('.grid'));