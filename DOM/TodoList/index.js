const todoList = document.getElementById('todo-list');
const addBtn = document.getElementById("add-button");
const todoInput = document.getElementById("todo-input");
const todos = [];

const createListItem = () => {
  const li = document.createElement("li");
  const h2 = document.createElement("h2");
  const deleteBtn = document.createElement("button");
  h2.textContent = todoInput.value;
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete-button");
  li.appendChild(h2);
  li.appendChild(deleteBtn);
  deleteBtn.addEventListener("click",()=>todoList.removeChild(li));
  return li;
}

const addTodo = () => {
  if(!todoInput.value){
      addBtn.disabled = true;
      return;
  }
  const li = createListItem();
  todos.push(li);
  todoList.appendChild(li);
  todoInput.value = "";
}

todoInput.addEventListener("change",(e)=>{
  addBtn.disabled = !(e.target.value);
  todoInput.value = e.target.value;
});

addBtn.addEventListener('click',() => {
  addTodo();
});