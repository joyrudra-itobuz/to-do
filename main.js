taskSelector = document.querySelector(".task-display");
let container = document.getElementById("containerTodo");

const tasks = [];
let suffix = 1;

function tasksStyler(id) {
  document.querySelector(id).textContent =
    suffix + " ." + document.querySelector(".input-area").value;
}

document.querySelector(".add-button").addEventListener("click", function () {
  let areaInputs = document.querySelector(".input-area").value;
  tasks.push(areaInputs);
  //   taskSelector.textContent += "->" + areaInputs;
  console.log(areaInputs);
  let id = "#box" + suffix;
  //trying method 2 to add div
  // const child = document.p.appendChild(
  //   Object.assign(document.createElement("div"), { id: id })
  // );
  // child.assign = areaInputs;
  //upto this is medthod 2 and It didnt worked.
  const box = document.createElement("p");
  box.id = "box" + suffix;
  // let id = "#box" + suffix;
  console.log(id);
  //   v.className += "col-4 offset-4";
  //   v.classList.add("col-4 offset-4");
  document.body.appendChild(box);
  tasksStyler(id);
  document.querySelector(".input-area").value = "";
  suffix = suffix + 1;
});

document.querySelector("p").addEventListener("dbclick", function () {
  container.removeChild("box");
});

console.log(tasks);
