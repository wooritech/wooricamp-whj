let boxEl = document.querySelector('.box');

console.log(boxEl);

boxEl.addEventListener('click', function() {
  console.log('Click!!');
  boxEl.classList.add('active');
  console.log(boxEl.classList.contains('active')
  );
  boxEl.classList.remove('active');
  console.log(
    boxEl.classList.contains('active')
  );
});