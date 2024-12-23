const arrow1 = document.getElementById('select1');
const arrow2 = document.getElementById('select2');

arrow1.addEventListener('click', () => {
  if (arrow1.classList.contains('bg-rotated')) {
    arrow1.classList.remove('bg-rotated');
  } else {
    arrow1.classList.add('bg-rotated');
  }
})

arrow2.addEventListener('click', () => {
  if (arrow2.classList.contains('bg-rotated')) {
    arrow2.classList.remove('bg-rotated');
  } else {
    arrow2.classList.add('bg-rotated');
  }
})

