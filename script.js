'use strict';

function hamburger(){
  document.getElementById('line1').classList.toggle('line-1');
  document.getElementById('line2').classList.toggle('line-2');
  document.getElementById('line3').classList.toggle('line-3');
  document.getElementById('hidenav').classList.toggle('in');
}
document.getElementById('hamburger').addEventListener('click', function(){
  hamburger();
});

document.addEventListener('DOMContentLoaded',function(){
  const link = document.querySelectorAll('hidelink');
  for(let i = 0; i < link.length; i++){
    link[i].addEventListener('click',function(){
      hamburger();
    },false)
  }
},false);


// tab menu

const tabs = document.getElementsByClassName('tab');
for(let i = 0; i < tabs.length; i++){
  tabs[i].addEventListener('click', tabSwitch,false);
}

function tabSwitch(){
  document.getElementsByClassName('active')[0].classList.remove('active');
  this.classList.add('active');
  document.getElementsByClassName('show')[0].classList.remove('show');
  const arrayTabs = Array.prototype.slice.call(tabs);
  const index = arrayTabs.indexOf(this);
  document.getElementsByClassName('panel')[index].classList.add('show')
}