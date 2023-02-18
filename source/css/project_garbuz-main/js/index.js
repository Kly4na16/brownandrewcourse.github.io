const button = document.getElementsByTagName('button');

const consBtn = document.getElementById('application');
const form = document.getElementById('cons-form');

consBtn.addEventListener('click',() => {
   form.style.display = 'flex';
})
document.getElementById('close-btn').addEventListener('click',(e) => {
   e.preventDefault();
   form.style.display = 'none';
})



