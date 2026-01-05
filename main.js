
/*
╔══════════════════════════════════════════════════════════════╗
║                    📝 To Do List Application                 ║
╚══════════════════════════════════════════════════════════════╝

┌──────────────────────────────────────────────────────────────┐
│  Developer: 3liaymn                                          │
│  Version: 1.0                                                │
│  Date: 2025                                                  │
│  License: MIT                                                │
└──────────────────────────────────────────────────────────────┘

📋 Project Description:
   A simple and elegant To-Do List application that helps you
   organize your daily tasks efficiently. Built with vanilla
   JavaScript and localStorage for persistent data storage.

✨ Features:
   • Add new tasks with ease
   • Delete completed tasks
   • Data persists across browser sessions
   • Clean and intuitive user interface
   • Responsive design

🛠️ Technologies Used:
   • HTML5
   • CSS3
   • JavaScript (ES6+)
   • localStorage API

🚀 How to Use:
   1. Type your task in the input field
   2. Click "Add" button to create a new task
   3. Click "Delete" button to remove a task
   4. Your tasks are automatically saved!

💡 Future Improvements:
   • Edit existing tasks
   • Mark tasks as complete
   • Filter tasks (All/Active/Completed)
   • Task categories and priorities
   • Dark mode support

📧 Contact:
   GitHub: @3liaymn
   
🌟 If you like this project, don't forget to give it a star!

════════════════════════════════════════════════════════════════
*/

// Your code starts here...

let inputTittle = document.querySelector("#tittle")
let addBtn = document.querySelector(".addBtn")
let box = document.querySelector(".box")

addOldItem()
addBtn.addEventListener("click", addTodo)


function addTodo() {
    const title = inputTittle.value.trim();
    if (title === "") return;

  // 1) هات الداتا القديمة أو Object فاضي
    let todolist = JSON.parse(localStorage.getItem("todolist")) || {};

  // 2) اعمل ID جديد
  let id = Date.now(); // مضمون يكون unique

  // 3) أضف المهمة
    todolist[id] = {
    title: title,
    };

  // 4) خزّن تاني
    localStorage.setItem("todolist", JSON.stringify(todolist));
// 5) ارسال البيانات للانشاء
    createItem(title, id )

  // 5) فضّي الانبوت
    inputTittle.value = "";
}

function createItem (text, remove) {
    // create box to content the tittle and button remove
    let item = document.createElement("div")
    item.className = "item"
    // create span For tittle
    let title = document.createElement("span")
    title.className = "title"
    title.textContent = text
    item.appendChild(title)
    // create remove button to remove tittle
    let removeBtn = document.createElement("button")
    removeBtn.className = "removeBtn"
    removeBtn.textContent = "Delate"
    item.appendChild(removeBtn)
    // Add item to box content
    box.appendChild(item)
    // Remove item from box
    removeBtn.addEventListener("click", () => {
        item.remove()
        deleteTodo(remove)
    })
}

function deleteTodo(id) {
  // 1) هات الداتا
  let todolist = JSON.parse(localStorage.getItem("todolist")) || {};

  // 2) امسح العنصر
  delete todolist[id];

  // 3) خزّن التعديل
  localStorage.setItem("todolist", JSON.stringify(todolist));
}

function addOldItem () {
    let todolist = JSON.parse(localStorage.getItem("todolist")) || {}
    for (let id in todolist) {
        createItem(todolist[id].title, id)
    }
}
