// Setup Event Listener for Page Load
document.addEventListener("DOMContentLoaded", function () {
    // Select DOM Elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Define addTask function
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        const li = document.createElement("li");
        li.textContent = taskText;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn"); // ✅ FIXED

        removeButton.onclick = function () {
            li.remove();
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);

        taskInput.value = "";
    }

    // Add click event to Add button
    addButton.addEventListener("click", addTask);

    // Add keypress event for Enter key
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask(); // ✅ Correct structure
        }
    });
});
