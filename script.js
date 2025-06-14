// 1️⃣ Setup Event Listener for Page Load
document.addEventListener("DOMContentLoaded", function() {
    // 2️⃣ Select DOM Elements
    const addButton = document.getElementById("add-button");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // 3️⃣ Load existing tasks from Local Storage
    loadTasks();

    // 4️⃣ Define addTask function
    function addTask(taskText, save = true) {
        const li = document.createElement("li");
        li.textContent = taskText;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        removeButton.onclick = function() {
            li.remove();
            removeTaskFromStorage(taskText);
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);

        if (save) {
            saveTaskToStorage(taskText);
        }
    }

    // 5️⃣ Save a task to Local Storage
    function saveTaskToStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        storedTasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }

    // 6️⃣ Remove a task from Local Storage
    function removeTaskFromStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }

    // 7️⃣ Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    // 8️⃣ Handle click on add button
    addButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task");
            return;
        }
        addTask(taskText);
        taskInput.value = "";
    });

    // 9️⃣ Handle Enter key press in input
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            const taskText = taskInput.value.trim();
            if (taskText === "") {
                alert("Please enter a task");
                return;
            }
            addTask(taskText);
            taskInput.value = "";
        }
    });
});
