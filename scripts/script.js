// variables
const btnOpen1 = document.getElementById('btn-open1');
const btnOpen2 = document.getElementById('btn-open2');
const btnOpen3 = document.getElementById('btn-open3');
const modelEl = document.getElementById('modal');
const btnClose = document.getElementById('btn-close');


// function statement for close and show

function closeModel(){
  modelEl.classList.remove('show');
  modelEl.classList.add('close');
}

function showModel() {
  modelEl.classList.remove('close');
  modelEl.classList.add('show');
}

// buttons

btnOpen1.addEventListener('click', function (){
  showModel();
});

btnOpen2.addEventListener('click', function (){
  showModel();
});

btnOpen3.addEventListener('click', function (){
  showModel();
});

btnClose.addEventListener('click', function(){
  closeModel();
});

// keyboard events

window.addEventListener('keydown', function(event){
if(event.key === 'Escape'){
  closeModel();
}
});