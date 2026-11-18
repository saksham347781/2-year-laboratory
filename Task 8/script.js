const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const listItem = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const text = document.createElement("span");
    text.textContent = taskText;
    text.className = "task-text";

    checkbox.addEventListener("change", function() {
        text.classList.toggle("completed", checkbox.checked);
    });

    const upButton = document.createElement("button");
    upButton.textContent = "Up";
    upButton.className = "move-button";
    upButton.addEventListener("click", function() {
        const previousItem = listItem.previousElementSibling;
        if (previousItem) {
            taskList.insertBefore(listItem, previousItem);
        }
    });

    const downButton = document.createElement("button");
    downButton.textContent = "Down";
    downButton.className = "move-button";
    downButton.addEventListener("click", function() {
        const nextItem = listItem.nextElementSibling;
        if (nextItem) {
            taskList.insertBefore(nextItem, listItem);
        }
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", function() {
        listItem.remove();
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(text);
    listItem.appendChild(upButton);
    listItem.appendChild(downButton);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
    taskInput.value = "";
    taskInput.focus();
}

// Create an 8 x 8 chessboard using nested loops.
const chessboard = document.getElementById("chessboard");

for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
        const square = document.createElement("div");
        square.classList.add("square");

        if ((row + column) % 2 === 0) {
            square.classList.add("white");
        } else {
            square.classList.add("black");
        }

        chessboard.appendChild(square);
    }
}
