// sidebar toggle
const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {

  document.getElementById('sidebar').classList.toggle('active');
  document.querySelector('.toggle-btn').classList.toggle('active');
  document.querySelector('.contenido').classList.toggle('active');

});
