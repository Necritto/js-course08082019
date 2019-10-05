'use strict';

document.addEventListener('mouseover', showTooltip);
document.addEventListener('mouseout', hideTooltip);

let tooltipElem;

function showTooltip(event) {
  let elem = event.target;
  let tooltipData = elem.dataset.tooltip;

  if (!tooltipData) return;

  tooltipElem = document.createElement('div');
  tooltipElem.classList.add('tooltip');
  tooltipElem.innerHTML = tooltipData;
  document.body.append(tooltipElem);

  let coords = elem.getBoundingClientRect();

  let left = coords.left + (elem.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) {
    left = 10;
  }

  let top = coords.top - tooltipElem.offsetHeight - 10;
  if (top < 0) {
    top = coords.top + tooltipElem.offsetHeight + 5;
  }

  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';
}

function hideTooltip() {
  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }
}