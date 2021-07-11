function cleanSelectItem() {
  document.querySelectorAll('.list-item').forEach((element) => {
    const ele = element;
    ele.className = 'list-item';
  });
}

function setListItem() {
  document.querySelectorAll('.list-item').forEach((element) => {
    element.addEventListener('click', () => {
      const ele = element;
      cleanSelectItem();
      ele.className = 'list-item selected-item';
    });
  });
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
    setListItem();
  }
}

document.getElementById('criar-tarefa').addEventListener('click', addTask);
document.getElementById('texto-tarefa').addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    addTask();
  }
});

// document.querySelectorAll('.color').forEach((color) => {
//   const selectedColor = color;
//   selectedColor.addEventListener('click', () => {
//     const allColors = document.querySelectorAll('.color');
//     allColors.forEach((colors) => {
//       const unselectedColor = colors;
//       unselectedColor.className = 'color';
//     });
//     selectedColor.className = 'color selected';
//   });
// });
