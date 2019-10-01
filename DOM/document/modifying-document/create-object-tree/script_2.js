let obj = {
  "Животные": {
    "Коровы": {},
    "Ослы": {}
  },

  "Рыбы": {
    "Аквариумные": {
      "Гуппи": {},
      "Скалярии": {}
    },
    "Морские": {
      "Морская форель": {},
      "Тунец": {}
    }
  }
};

let hr = document.createElement('hr');
document.body.append(hr);

let div1 = document.createElement('div');
div1.classList.add('alive');
document.body.append(div1);

function createDomTree(container, obj) {
  container.append(createDomText(obj));
}

function createDomText(obj) {
  let ul = document.createElement('ul');

  for( let key in obj ) {
    let li = document.createElement('li');
    li.innerHTML = '<li>' + key + '</li>';

    let childUl = createDomText(obj[key]);
    li.append(childUl);
    ul.append(li);
  }

  return ul;
}

createDomTree(document.querySelector('.alive'), obj);