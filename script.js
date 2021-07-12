function cleanSelectItem() {
  const selected = document.querySelector('.selected-item');
  if (selected !== null) {
    let newClass = selected.className.split(' ').filter((array) => array !== 'selected-item');
    newClass = newClass.join(' ');
    selected.className = newClass;
  }
}

function selectedItem(event) {
  const listItem = event.target;
  cleanSelectItem();
  listItem.className += ' selected-item';
}

function completedItem(event) {
  const listItem = event.target;
  if (listItem.className.includes('completed') === true) {
    let newClass = listItem.className.split(' ').filter((array) => array !== 'completed');
    newClass = newClass.join(' ');
    listItem.className = newClass;
  } else {
    listItem.className += ' completed';
  }
}

function addTask() {
  const input = document.getElementById('texto-tarefa');
  if (input.value.length === 0) {
    alert('insira uma terefa.');
  } else {
    const list = document.getElementById('lista-tarefas');
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.innerText = input.value;
    list.appendChild(listItem);
    input.value = '';
    listItem.addEventListener('click', selectedItem);
    listItem.addEventListener('dblclick', completedItem);
  }
}

function cleanList() {
  const list = document.getElementById('lista-tarefas');
  const count = list.children.length;
  for (let index = 0; index < count; index += 1) {
    list.removeChild(list.children[0]);
  }
}

document.getElementById('apaga-tudo').addEventListener('click', cleanList);
document.getElementById('criar-tarefa').addEventListener('click', addTask);
document.getElementById('texto-tarefa').addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    addTask();
  }
});
