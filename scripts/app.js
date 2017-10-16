// Audio plays when window is loaded
window.onload = function greet(){
  const audioGreet = document.getElementById('greeting');
  audioGreet.play();
}

// Variables
const toDo = document.querySelector('#to-do-bar');
const food = document.querySelector('#cuisine-bar');
const amenit = document.querySelector('#amen-bar');
const msn = document.querySelector('.message-text');
const homePage = document.querySelector('.home-view');
const footer = document.querySelector('.footer');
const home = document.querySelector('.home');
const view = document.querySelectorAll('.view');

// Navi-bar actions
toDo.addEventListener('click', function(){
  msn.textContent = "Here is a listing of the evening’s events. Which would you like to attend?"
  homePage.style.display = 'none';
  toDo.classList.add('hide');
  food.classList.add('hide');
  amenit.classList.add('hide');
  document.querySelector('.to-do-view').style.display = "block";
  document.querySelector('#gc').style.display = 'block';
  document.querySelector('#pa').style.display = 'block';
  footer.style.display = 'block';

  if(document.querySelector('.to-do-view').style.display == "block"){
    const audio20 = document.getElementById('audio20');
    audio20.play();
  }
})

food.addEventListener('click', function(){
  msn.textContent = "These are the cuisines for the evening. Select a meal to find out more."
  homePage.style.display = 'none';
  toDo.classList.add('hide');
  food.classList.add('hide');
  amenit.classList.add('hide');
  document.querySelector('.cuisine-view').style.display = "block";
  document.querySelector('#dk').style.display = 'block';
  document.querySelector('#fh').style.display = 'block';
  footer.style.display = 'block';

  if(document.querySelector('.cuisine-view').style.display == "block"){
    const audio22 = document.getElementById('audio22');
    audio22.play();
  }
})

amenit.addEventListener('click', function(){
  msn.textContent = "These accomodations are all here for you to enjoy. Select one to find out more."
  homePage.style.display = 'none';
  toDo.classList.add('hide');
  food.classList.add('hide');
  amenit.classList.add('hide');
  document.querySelector('.amenities-view').style.display = "block";
  footer.style.display = 'block';

  if(document.querySelector('.amenities-view').style.display == "block"){
    const audio26 = document.getElementById('audio26');
    audio26.play();
  }
})

// Event selection
document.querySelector('#gc').addEventListener('click', function(){
  msn.textContent = "Your reservations have been made. See you there!";
  document.querySelector('#pa').style.display = 'none';
  document.querySelector('#vic-one').style.display = 'block';
  if(document.querySelector('#vic-one').style.display = "block"){
    const audio21 = document.getElementById('audio21');
    audio21.play();
    audio20.load();
  }
})

document.querySelector('#pa').addEventListener('click', function(){
  msn.textContent = "Your reservations have been made. See you there!";
  document.querySelector('#gc').style.display = 'none';
  document.querySelector('#vic-one').style.display = 'block';
  if(document.querySelector('#vic-one').style.display = "block"){
    const audio21 = document.getElementById('audio21');
    audio21.play();
    audio20.load();
  }
})

// Cuisine selection
document.querySelector('#dk').addEventListener('click', function(){
  msn.textContent = "This meal has been composed by...";
  document.querySelector('#dk').style.display = "none";
  document.querySelector('#fh').style.display = "none";
  document.querySelector('#chef1-page').style.display = 'block';
  if(document.querySelector('#chef1-page').style.display == "block"){
    const audio23 = document.getElementById('audio23');
    audio23.play();
    audio22.load();
  }
})

document.querySelector('#fh').addEventListener('click', function(){
  msn.textContent = "The creator of this meal is...";
  document.querySelector('#dk').style.display = "none";
  document.querySelector('#fh').style.display = "none";
  document.querySelector('#chef2-page').style.display = 'block';
  if(document.querySelector('#chef2-page').style.display == "block"){
    const audio25 = document.getElementById('audio25');
    audio25.play();
    audio22.load();
  }
})

// Amenity selection
document.querySelector('#pool').addEventListener('click', function(){
  msn.textContent = "Here is more information about our pool.";
  document.querySelector('.amenities-view').style.display = "none";
  document.querySelector('.amen-des').style.display = 'block';
  document.querySelector('#pool-page').style.display = 'block';
  if(document.querySelector('#pool-page').style.display == "block"){
    const audio27 = document.getElementById('audio27');
    audio27.play();
    audio26.load();
  }
})

document.querySelector('#spa').addEventListener('click', function(){
  msn.textContent = "Here is more information about our spa.";
  document.querySelector('.amenities-view').style.display = "none";
  document.querySelector('.amen-des').style.display = 'block';
  document.querySelector('#spa-page').style.display = 'block';
  if(document.querySelector('#spa-page').style.display == "block"){
    const audio28 = document.getElementById('audio28');
    audio28.play();
    audio26.load();
  }
})

document.querySelector('#gym').addEventListener('click', function(){
  msn.textContent = "Here is more information about our gym.";
  document.querySelector('.amenities-view').style.display = "none";
  document.querySelector('.amen-des').style.display = 'block';
  document.querySelector('#gym-page').style.display = 'block';
  if(document.querySelector('#gym-page').style.display == "block"){
    const audio29 = document.getElementById('audio29');
    audio29.play();
    audio26.load();
  }
})

document.querySelector('#service').addEventListener('click', function(){
  msn.textContent = "Here is more information about our service.";
  document.querySelector('.amenities-view').style.display = "none";
  document.querySelector('.amen-des').style.display = 'block';
  document.querySelector('#service-page').style.display = 'block';
  if(document.querySelector('#service-page').style.display == "block"){
    const audio30 = document.getElementById('audio30');
    audio30.play();
    audio26.load();
  }
})

// Home icon functionality
home.addEventListener('click', function(){
  if(footer.style.display == 'block'){
    footer.style.display = 'none';
    document.querySelector('.to-do-view').style.display = 'none';
    document.querySelector('.cuisine-view').style.display = 'none';
    document.querySelector('.amenities-view').style.display = 'none';
    homePage.style.display = 'block';
    msn.textContent = "Good day. How can I serve you? Please select from..."
    toDo.classList.remove('hide');
    toDo.style.animation = 'none';
    toDo.style.width = '375px';
    food.classList.remove('hide');
    food.style.animation = 'none';
    food.style.width = '375px';
    amenit.classList.remove('hide');
    amenit.style.animation = 'none';
    amenit.style.width = '375px';
    document.querySelector('#vic-one').style.display = 'none';
    document.querySelector('#chef1-page').style.display = 'none';
    document.querySelector('#chef2-page').style.display = 'none';
    document.querySelector('#pool-page').style.display = 'none';
    document.querySelector('#spa-page').style.display = 'none';
    document.querySelector('#gym-page').style.display = 'none';
    document.querySelector('#service-page').style.display = 'none';
    audio20.load();
    audio21.load();
    audio22.load();
    audio23.load();
    audio25.load();
    audio26.load();
    audio27.load();
    audio28.load();
    audio29.load();
    audio30.load();
  }
})
