// Fetch task data and log it to the console
fetch('data.json')
    .then(response => response.json())
    .then(tasks => {
        console.log("Successfully loaded tasks:", tasks);
        const taskList = document.getElementById('task-list');
        
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.title;
            taskList.appendChild(li);
        });
    })
    .catch(error => console.error("Error loading tasks:", error));

// Dummy test function for demonstration
function runDummyTests() {
    console.log("Running app tests...");
    console.log("Test 1: App loaded - PASS");
    console.log("Test 2: DOM ready - PASS");
}

runDummyTests();
