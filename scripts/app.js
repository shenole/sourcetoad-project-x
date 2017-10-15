// Audio plays when window is loaded
window.onload = function greet(){
  const audioGreet = document.getElementById('greeting');
  audioGreet.pause();
}

// "Home" icon is armed



// ===== Navi-bar selction actions
const toDo = document.querySelector('#to-do-bar');
const food = document.querySelector('#cuisine-bar');
const amenit = document.querySelector('#amen-bar');

const msn = document.querySelector('.message-text');

const homePage = document.querySelector('.home-view');
var footer = document.querySelector('.footer');

toDo.addEventListener('click', function(){
  msn.textContent = "Here is a listing of the evening’s events. Which would you like to attend?"
  homePage.style.display = 'none';
  toDo.classList.add('hide');
  food.classList.add('hide');
  amenit.classList.add('hide');
  document.querySelector('.to-do-view').classList.add('display');
  footer.style.display = 'block';
})

amenit.addEventListener('click', function(){
  msn.textContent = "These accomodations are all here for you to enjoy. Select one to find out more."
  homePage.style.display = 'none';
  toDo.classList.add('hide');
  food.classList.add('hide');
  amenit.classList.add('hide');
  document.querySelector('.amenities-view').classList.add('display');
  footer.style.display = 'block';
})
