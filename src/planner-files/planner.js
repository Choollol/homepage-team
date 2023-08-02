// Function to generate the calendar for a specific month
function generateCalendar(displayedMonth) {
    // Get the calendar element from the page
    var calendar = document.getElementById('calendar');

    // Clear the previous calendar
    calendar.innerHTML = '';

    // Create a new Date object for the current date
    var date = new Date();

    // Array of month names for display
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Subtract 1 from the input to get the correct index (0-11)
    displayedMonth = displayedMonth - 1;

    // Only generate the calendar for the selected month
    var m = displayedMonth;

    // Create a new div for the month
    var month = document.createElement('div');
    month.className = 'month';

    // Create a new div for the month name and add it to the month div
    var monthName = document.createElement('div');
    monthName.className = 'month-name';
    monthName.innerText = monthNames[m];
    month.appendChild(monthName);

    // Calculate the number of days in the current month
    var daysInMonth = new Date(date.getFullYear(), m+1, 0).getDate();

    // Calculate the day of the week the first day of the month falls on
    var startDay = new Date(date.getFullYear(), m, 1).getDay();

    // Add empty days at the beginning of the month until the first day of the month
    for (var i = 0; i < startDay; i++) {
        var emptyDay = document.createElement('div');
        emptyDay.className = 'empty-day';
        month.appendChild(emptyDay);
    }

    // Add all the days of the month
    for (var i = 1; i <= daysInMonth; i++) {
        var day = document.createElement('div');
        day.id = 'dayButton' + i; 
        day.dataset.day = i; 

        // Boolean for whether or not a day has a task scheduled
        var isTask = tasks.some(task => task.day == i && task.month == displayedMonth+1);

        // If a task is scheduled, the day is rendered with color
        if (isTask){
            day.className = 'dayWithTask';
        } else {
            day.className = 'day';
        }

        // Create a span element for the day number
        var dayNumber = document.createElement('span');
        dayNumber.innerText = i;
        day.onclick = dayPopup;

        // Add the day number to the day div
        day.appendChild(dayNumber);

        // Add the day to the month
        month.appendChild(day);
    }

    // // Create the change month button
    // var changeButton = document.createElement('div');
    // changeButton.id = 'changeMonth';
    // changeButton.className = 'day';

    // // Create a span element for the button text
    // var buttonText = document.createElement('span');
    // buttonText.innerText = 'Change Month';
    // buttonText.onclick = changeMonth;

    // // Add the button text to the button
    // changeButton.appendChild(buttonText);

    // // Add the button to the month
    // month.appendChild(changeButton);

    // Add the month to the calendar
    calendar.appendChild(month);
}

// Global variables
let tasks = [];
let displayedMonth;

// Function to change the month
function changeMonth() {
    displayedMonth = prompt("Which month do you want to display? (Enter a number from 1-12)");
    while (!(displayedMonth >= 1 && displayedMonth < 13)) {
        if (displayedMonth == null) {
            break;
        }
        displayedMonth = prompt("Month is not valid, please enter a number between 1-12!");
    } 
    if (displayedMonth != null) {
        var monthInt = Math.trunc(displayedMonth);
        displayedMonth = monthInt;
        generateCalendar(displayedMonth);
    }
}

// When the page loads, ask the user which month to display and generate the calendar
window.onload = function() {
    loadTasksFromLocalStorage();
    changeMonth();
    // displayedMonth = prompt("Which month do you want to display? (Enter a number from 1-12)");
    // while (displayedMonth <= 0 || displayedMonth >= 13) {
    //     // alert("Month is out of bounds, please enter a number between 1-12!");
    //     displayedMonth = prompt("Month is not valid, please enter a number between 1-12!");
    // } 
    // generateCalendar(displayedMonth);
}

function loadTasksFromLocalStorage() {
    let tasksData = localStorage.getItem('tasks');
    if (tasksData) {
        tasks = JSON.parse(tasksData);
    }
}

function dayPopup() {
    let width = 600;
    let height = 400;
    let left = (screen.width - width) / 2;
    let top = (screen.height - height) / 2;
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=${width},height=${height},left=${left},top=${top}`;

    let newWin = window.open('', 'test', params);

    let title = newWin.document.createElement('title');
    title.textContent = `Edit tasks`;
    newWin.document.head.appendChild(title);

    loadTasksFromLocalStorage();

    // Check if the button already exists
    if (!newWin.document.getElementById('taskButton')) {
        let button = newWin.document.createElement('button');
        button.id = 'taskButton';
        button.textContent = 'Add a task';
        button.onclick = function() {
            let taskText = newWin.prompt("Please enter your task");
            taskText += " ";
            if (taskText !== 'null ') {
                let taskElement = newWin.document.createElement('p');
                taskElement.textContent = taskText;
                newWin.document.body.appendChild(taskElement);
                
                let ID;
                if (tasks.length == 0) {
                    ID = 1;
                }
                else {
                    ID = tasks[tasks.length - 1].taskID + 1
                }
                let task = {day: Number(day), month: displayedMonth, text: taskText, taskID: ID};
                tasks.push(task);
                localStorage.setItem('tasks', JSON.stringify(tasks));
                generateCalendar(displayedMonth);

                // Delete button
                let deleteButton = newWin.document.createElement('button');
                deleteButton.id = 'deleteButton';
                deleteButton.textContent = 'Delete'
                newWin.document.body.appendChild(deleteButton);

                taskElement.append(deleteButton);

                deleteButton.addEventListener("click", deleteTask);
            }
        }
        newWin.document.body.appendChild(button);
    }

    // Display existing tasks
    let day = this.dataset.day;
    let dayTasks = tasks.filter(task => task.day == day && task.month == displayedMonth);
    for (let task of dayTasks) {
        let currentDay = task.day;
        let currentMonth = task.month;
        let currentID = task.taskID;
        displayTask(newWin, task.text, currentDay, currentMonth, currentID);
    }
}

function displayTask(newWin, taskText, currDay, currMonth, currID) {
    let taskElement = newWin.document.createElement('p');
    taskElement.textContent = taskText;
    newWin.document.body.appendChild(taskElement);

    // Delete button
    let deleteButton = newWin.document.createElement('button');
    deleteButton.id = 'deleteButton';
    deleteButton.textContent = 'Delete'
    deleteButton.onclick = function() {
        let index = tasks.findIndex(task => task.day === currDay && task.month === currMonth && task.taskID === currID);
        if (index !== -1) {
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            taskElement.remove();
            
            let daysTasks = tasks.filter(task => task.day == currDay && task.month == currMonth);
            if (daysTasks.length == 0) {
                generateCalendar(displayedMonth)
            }
        }
    }
    taskElement.append(deleteButton);
}

// Delete a task, linked to the delete button when clicked
function deleteTask(e) { 
    let item = e.target.parentNode;
  
    item.addEventListener("click", () => {
      item.remove();
    })
}
