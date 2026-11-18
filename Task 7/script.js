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
    listItem.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";
    deleteButton.className = "delete-button";

    deleteButton.addEventListener("click", function() {
        listItem.remove();
    });

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
    taskInput.value = "";
    taskInput.focus();
}

// Change the main image when a thumbnail is clicked.
const thumbnails = document.querySelectorAll(".thumbnail");
const mainImage = document.getElementById("mainImage");

for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", function() {
        mainImage.src = this.src.replace("w=300", "w=1000");
        mainImage.alt = this.alt;
    });
}
