const directionsItem1 = document.getElementById('directions1');
const directionsItem2 = document.getElementById('directions2');
const directionsItem3 = document.getElementById('directions3');

const directionListContent1 = document.querySelector('#directions1 .directions-list-content');
const directionListContent2 = document.querySelector('#directions2 .directions-list-content');
const directionListContent3 = document.querySelector('#directions3 .directions-list-content');

directionsItem1.addEventListener('click', () => {
  if (directionListContent1.classList.contains('directions-list-mobile-active')) {
    directionListContent1.classList.remove('directions-list-mobile-active');
  } else {
    directionListContent1.classList.add('directions-list-mobile-active');
  }
});

directionsItem2.addEventListener('click', () => {
  if (directionListContent2.classList.contains('directions-list-mobile-active')) {
    directionListContent2.classList.remove('directions-list-mobile-active');
  } else {
    directionListContent2.classList.add('directions-list-mobile-active');
  }
});

directionsItem3.addEventListener('click', () => {
  if (directionListContent3.classList.contains('directions-list-mobile-active')) {
    directionListContent3.classList.remove('directions-list-mobile-active');
  } else {
    directionListContent3.classList.add('directions-list-mobile-active');
  }
});
