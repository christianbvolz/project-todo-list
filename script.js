/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable no-restricted-syntax */

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

function removeCompleted() {
  const list = document.getElementById('lista-tarefas').children;
  for (let index = 0; index < list.length; index += 1) {
    if (list[index].className.includes('completed') === true) {
      list[index].remove();
      index -= 1;
    }
  }
}

function saveImputList() {
  const list = document.getElementsByClassName('list-item');
  const inputList = [];
  for (const item of list) {
    const input = item.innerHTML;
    inputList.push(input);
  }
  localStorage.setItem('input', JSON.stringify(inputList));
}

function saveClassesList() {
  const list = document.getElementsByClassName('list-item');
  const classesList = [];
  for (const item of list) {
    const classes = item.className;
    classesList.push(classes);
  }
  localStorage.setItem('classes', JSON.stringify(classesList));
}

window.onload = function savedList() {
  if (localStorage.getItem('input') !== null) {
    const list = document.getElementById('lista-tarefas');
    const input = JSON.parse(localStorage.getItem('input'));
    const classes = JSON.parse(localStorage.getItem('classes'));
    const listLength = input.length;
    for (let index = 0; index < listLength; index += 1) {
      const listItem = document.createElement('li');
      listItem.innerText = input[index];
      listItem.className = classes[index];
      list.appendChild(listItem);
    }
  }
};
function saveList() {
  saveImputList();
  saveClassesList();
}

function moveUp() {
  const selected = document.querySelector('.selected-item');
  if (selected !== null && selected.previousElementSibling !== null) {
    const previous = selected.previousElementSibling;
    const selectedInput = selected.innerHTML;
    const selectedClass = selected.className;
    selected.innerHTML = previous.innerHTML;
    selected.className = previous.className;
    previous.innerHTML = selectedInput;
    previous.className = selectedClass;
  }
}

function moveDown() {
  const selected = document.querySelector('.selected-item');
  if (selected !== null && selected.nextElementSibling !== null) {
    const next = selected.nextElementSibling;
    const selectedInput = selected.innerHTML;
    const selectedClass = selected.className;
    selected.innerHTML = next.innerHTML;
    selected.className = next.className;
    next.innerHTML = selectedInput;
    next.className = selectedClass;
  }
}

document.getElementById('mover-cima').addEventListener('click', moveUp);
document.getElementById('mover-baixo').addEventListener('click', moveDown);
document.getElementById('salvar-tarefas').addEventListener('click', saveList);
document.getElementById('remover-finalizados').addEventListener('click', removeCompleted);
document.getElementById('apaga-tudo').addEventListener('click', cleanList);
document.getElementById('criar-tarefa').addEventListener('click', addTask);
document.getElementById('texto-tarefa').addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    addTask();
  }
});
