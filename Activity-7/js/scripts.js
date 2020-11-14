//Array to hold tasks
var tasks = [];

//Task status enum
var taskStatus =
{
    active: "active",
    completed: "completed"
}

//task constructor
function Task( id, name, status)
{
    this.id =id;
    this.name = name;
    this.status = status;
}

//Create a ne task element and adds it to the DOM
function addTaskElement(task)
{
    var listEl = document.getElementById("active-list");
    var taskEL = document.createElement("li");
    var textEl = document.createTextNode(task.name);

    //set attributes
    taskEL.setAttribute("id", task.id);
    //add text to task element
    taskEL.appendChild(textEl);
    //add task element  to list
    listEl.appendChild(taskEL);
}

//click handler to add a ne task
function addTask(event)
{
    var inputEl = document.getElementById("input-task");
    if(inputEl.value !== "")
    {
        //create a unique id
        var id = "item-" + tasks.length;
        //create a new task
        var task = new Task(id,inputEl.value, taskStatus.active);
        tasks.push(task);

        //add task to the DOM
        addTaskElement(task);

        //reset input value
        inputEl.value = "";
    }
}

// click handler to complete task
function completeTask(event)
{
    //get the task element
    var taskEl = event.target;
    var id = taskEl.id;

    //find corresponding task in tasks array and update status
    for(var i = 0; i<tasks.length; i++)
    {
        if(tasks[i].id === id)
        {
            tasks[i].status = taskStatus.completed;
            break;
        }
    }

    //move task element from active  list to completed list
    taskEl.remove();
    document.getElementById("completed-list").appendChild(taskEl);
}

//key press handler to automatically add task
function clickButton (event)
{
    if (event.keyCode===13)
    {
        document.getElementById("add-task").click();
    }
}

//initializes the app
function init()
{
    //wire  up the add task button click handler
    document.getElementById("add-task").onclick = addTask;
    //wire up the task completed list item click handler
    document.getElementById("active-list").onclick = completeTask;
    //wire up the task input key press
    document.getElementById("input-task").onkeypress = clickButton;

}

init();