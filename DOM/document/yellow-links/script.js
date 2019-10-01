'use strict';

const link = document.querySelectorAll('a[href*="://"]:not([href*="://internal.com"])');

for( let a of link ) {
	a.style.color = 'orange';
}
