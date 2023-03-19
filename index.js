const icon = document.querySelector('.icon');
const menu = document.querySelector('#menu');
const logo = document.getElementById('logo');
const line1 = document.querySelector('#line1');
const line2 = document.querySelector('#line2');
const title = document.querySelector('.title');
const directors = document.querySelector('.directors');
const all = document.querySelector('.all');

let currvalue = window.getComputedStyle(document.getElementById('menu')).getPropertyValue('display');
title.style.display = "flex";
directors.style.display = "flex";

icon.addEventListener('click', () => {
    if (currvalue == 'none') {
        menu.style.display = 'flex';
        logo.style.height = '0px';
 
	        line1.classList.remove("animate1r");
        line2.classList.remove("animate2r");
        line1.classList.toggle("animate1");
        line2.classList.toggle("animate2");


	title.style.display = "none";
	all.style.display = "none";
	directors.style.display = "none";
        currvalue = window.getComputedStyle(document.getElementById('menu')).getPropertyValue('display');
    }
    else {
        menu.style.display = 'none';
        logo.style.height = '150px';
       

	            line1.classList.remove("animate1");
        line2.classList.remove("animate2");
        line1.classList.toggle("animate1r");
        line2.classList.toggle("animate2r");

	
	title.style.display = "flex";
	all.style.display = "block";
	directors.style.display = "flex";
        currvalue = window.getComputedStyle(document.getElementById('menu')).getPropertyValue('display');
    }
});

  
  
