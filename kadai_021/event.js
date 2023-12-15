const btn = document.getElementById('btn');

const addBtn = document.getElementById('text');


btn.addEventListener('click', () =>{
  setTimeout(() => {
  addBtn.textContent = 'ボタンをクリックしました';
  }, 2000);
})

