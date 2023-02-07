const taskHistory = [];

function add() {
  let inputText = document.getElementById("inputText");

  let container = document.getElementById("containerTodo");
  let taskList = document.createElement("div");
  taskList.innerHTML = `
  <div class="span-div" >
  <span>${inputText.value}</span>
  <button class="complete"><i class="fa fa-check"></i></button>
  </div>
  
  `;
  container.appendChild(taskList);
  taskList.addEventListener("dblclick", function () {
    container.removeChild(taskList);
  });
  let striker = 1;
  let completed = document.querySelectorAll(".complete");
  console.log(completed);
  for (let i = 0; i < completed.length; i++) {
    completed[i].addEventListener("click", function () {
      completed[i].parentNode.style.color = "white";
      if (completed[i].parentNode.style.color == "white") {
        completed[i].parentNode.style.color = "rgb(1, 1, 1,0.5)";
        completed[i].parentNode.firstElementChild.style.textDecoration =
          "line-through";
      } else {
        completed[i].parentNode.style.color = "white";
        completed[i].parentNode.firstElementChild.style.textDecoration = "none";
      }
    });
  }
  taskHistory.push(inputText.value);
  console.log(taskHistory);
  inputText.value = "";
}

const addTask = document.querySelector(".add");
console.log(addTask);
addTask.onclick = function () {
  add();
};

document.getElementById("completed").addEventListener("click", function () {
  let completed = document.querySelectorAll(".complete");

  for (let i = 0; i < completed.length; i++) {
    if (completed[i].parentNode.firstElementChild.style.textDecoration) {
      completed[i].parentNode.style.display = "flex";
    } else {
      completed[i].parentNode.style.display = "none";
    }
  }
});

const resetAll = document.querySelector(".reset-all");

resetAll.onclick = function () {
  let completed = document.querySelectorAll(".complete");
  for (let i = 0; i < completed.length; i++) {
    completed[i].parentNode.remove();
  }
};

const viewAllTask = document.querySelector(".view-all-task");

viewAllTask.onclick = function () {
  let completed = document.querySelectorAll(".complete");

  for (let i = 0; i < completed.length; i++) {
    // if (completed[i].parentNode.firstElementChild.style.textDecoration) {
    completed[i].parentNode.style.display = "flex";
  }
};

document.querySelector("#inputText").addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    add();
  }
});
