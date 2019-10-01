let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

let div = document.createElement('div');
div.classList.add('tree');
document.body.append(div);

function createTree(container, data) {
  container.innerHTML = innerText(data);
}

function innerText(data) {
  let li = '';
  let ul;

  for (let value in data) {
    li += '<li>' + value + innerText(data[value]) + '</li>';
  }

  if (li) {
    ul = '<ul>' + li + '</ul>';
  }

  return ul || '';
}

createTree(document.querySelector('.tree'), data);