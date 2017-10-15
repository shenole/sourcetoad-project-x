// Audio plays when window is loaded
window.onload = function greet(){
  const audioGreet = document.getElementById('greeting');
  audioGreet.pause();
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
  footer.style.display = 'block';
})

food.addEventListener('click', function(){
  msn.textContent = "These are the cuisines for the evening. Select a meal to find out more."
  homePage.style.display = 'none';
  toDo.classList.add('hide');
  food.classList.add('hide');
  amenit.classList.add('hide');
  document.querySelector('.cuisine-view').style.display = "block";
  footer.style.display = 'block';
})

amenit.addEventListener('click', function(){
  msn.textContent = "These accomodations are all here for you to enjoy. Select one to find out more."
  homePage.style.display = 'none';
  toDo.classList.add('hide');
  food.classList.add('hide');
  amenit.classList.add('hide');
  document.querySelector('.amenities-view').style.display = "block";
  footer.style.display = 'block';
})

// Event selection
document.querySelector('#gc').addEventListener('click', function(){
  msn.textContent = "Your reservations have been made. See you there!";
  document.querySelector('#pa').style.display = 'none';
  document.querySelector('#vic-one').style.display = 'block';
})

document.querySelector('#pa').addEventListener('click', function(){
  msn.textContent = "Your reservations have been made. See you there!";
  document.querySelector('#gc').style.display = 'none';
  document.querySelector('#vic-one').style.display = 'block';
})

// Cuisine selection
document.querySelector('#dk').addEventListener('click', function(){
  msn.textContent = "This meal has been composed by...";
  document.querySelector('#dk').style.display = "none";
  document.querySelector('#fh').style.display = "none";
  document.querySelector('#chef1-page').style.display = 'block';
})

document.querySelector('#fh').addEventListener('click', function(){
  msn.textContent = "The creator of this meal is...";
  document.querySelector('#dk').style.display = "none";
  document.querySelector('#fh').style.display = "none";
  document.querySelector('#chef2-page').style.display = 'block';
})

// Amenity selection
document.querySelector('#pool').addEventListener('click', function(){
  msn.textContent = "Here is more information about our pool.";
  document.querySelector('.amenities-view').style.display = "none";
  document.querySelector('.amen-des').style.display = 'block';
  document.querySelector('#pool-page').style.display = 'block';
})

document.querySelector('#spa').addEventListener('click', function(){
  msn.textContent = "Here is more information about our spa.";
  document.querySelector('.amenities-view').style.display = "none";
  document.querySelector('.amen-des').style.display = 'block';
  document.querySelector('#spa-page').style.display = 'block';
})

document.querySelector('#gym').addEventListener('click', function(){
  msn.textContent = "Here is more information about our gym.";
  document.querySelector('.amenities-view').style.display = "none";
  document.querySelector('.amen-des').style.display = 'block';
  document.querySelector('#gym-page').style.display = 'block';
})

document.querySelector('#service').addEventListener('click', function(){
  msn.textContent = "Here is more information about our service.";
  document.querySelector('.amenities-view').style.display = "none";
  document.querySelector('.amen-des').style.display = 'block';
  document.querySelector('#service-page').style.display = 'block';
})

/*
// Home icon functionality
home.addEventListener('click', function(){
  if(footer.style.display == 'block'){
    //document.querySelector('.to-do-view').classList.remove('hide');
    document.querySelector('.to-do-view').style.display = 'none';
    //document.querySelector('.cuisine-view').classList.remove('hide');
    document.querySelector('.cuisine-view').style.display = 'none';
    //document.querySelector('.amenities-view').classList.remove('hide');
    document.querySelector('.amenities-view').style.display = 'none';
    homePage.style.display = 'block';
    msn.textContent = "Good day. How can I serve you? Please select from..."
    toDo.classList.remove('hide');
    food.classList.remove('hide');
    amenit.classList.remove('hide');
  }
  if(document.querySelector('#vic-one').style.display == 'block'){
    document.querySelector('#vic-one').style.display == 'none';
  }
  if(document.querySelector('#gc').style.display == 'block'){
    document.querySelector('#gc').style.display == 'none';
  }
  if(document.querySelector('#pa').style.display == 'block'){
    document.querySelector('#pa').style.display == 'none';
  }
  if(document.querySelector('#vic-one').style.display == 'block'){
    document.querySelector('#vic-one').style.display == 'none';
  }
})
*/
