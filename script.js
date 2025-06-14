// 1️⃣ Setup Event Listener for Page Load
document.addEventListener("DOMContentLoaded", function() {
    // 2️⃣ Select DOM Elements
    const addButton = document.getElementById("add-button");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // 3️⃣ Create the addTask Function
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim input

        if (taskText === "") {
            alert("Please enter a task"); // Warn if input is empty
            return;
        }

        // 4️⃣ Task Creation
        const li = document.createElement("li");
        li.textContent = taskText;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // 5️⃣ Removal of task when button clicked
        removeButton.onclick = function() {
            li.remove();
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear input
        taskInput.value = "";
    }

    // 6️⃣ Attach Event Listeners
    addButton.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Optionally call addTask on load if needed (usually no task to add on load)
    // addTask(); // Not needed unless you want to auto-add a default task
});
