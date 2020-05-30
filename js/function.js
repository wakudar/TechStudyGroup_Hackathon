'use strict';

var singleBtn = document.getElementById('single-btn');
var multiBtn = document.getElementById('multi-btn');

singleBtn.addEventListener('click', () => {
    singleBtn.classList.add('current');
    multiBtn.classList.remove('current');
});

multiBtn.addEventListener('click', () => {
    multiBtn.classList.add('current');
    singleBtn.classList.remove('current');
});
