document.getElementById('criar-tarefa').addEventListener('click', function addTask() {
  const input = document.getElementById('texto-tarefa');
  const list = document.getElementById('lista-tarefas');
  let itemList = document.createElement('li');
  itemList.innerText = input.value;
  list.appendChild(itemList);
  input.value = '';
});
