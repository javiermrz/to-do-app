#!/usr/bin/env node

const fs = require("fs");

var argv = require("yargs")
  .usage("$0 <cmd> [args]")
  .command("add", "Adds a new task")
  .command("retrieve", "Shows pending tasks list")
  .command("done", "Marks task as done")
  .example("$0 add Do the shopping")
  .example("$0 retrieve")
  .example("$0 done Do the shopping")
  .help("h")
  .alias("h", "help").argv;

//console.log('Command: ' + process.argv[2]);

////////////////////////////////////////////////////
// CLASS
///////////////////////////////////////////////////

///////////////////////////////////////////////////
var taskList = require("./TaskListClass.js");
taskList.tasks = readFromJason();
var task = argsToString();

var command = process.argv[2];
switch (command) {
  case "add":
    executeAddCommand();
    break;
  case "done":
    executeDoneCommand();
    break;
  case "retrieve":
    executeRetrieveCommand();
    break;
  default:
    handleInvalidCommand();
}

////////////////////////////////////////////////////
// COMMANDS
///////////////////////////////////////////////////

///// ADD
function executeAddCommand() {
  const taskNotIntroduced = task == -1;
  if (taskNotIntroduced) {
    handleInvalidTask();
    return;
  }
  if (taskList.taskDoesExist(task)) {
    handleAlreadyExistingTask();
    return;
  }
  taskList.addTaskToList(task);
  taskList.printTasksList();
  taskList.writeToJason();
}

///// DONE
function executeDoneCommand() {
  var index = taskList.findAMatch(task);
  let taskNotFound = index == -1;
  if (taskNotFound) {
    handleTaskNotFound();
  } else {
    taskList.removeTask(index);
    taskList.writeToJason();
  }
  taskList.printTasksList();
}

///// RETRIEVE
function executeRetrieveCommand() {
  taskList.printTasksList();
}

////////////////////////////////////////////////////
// SOME FUNCTIONS
///////////////////////////////////////////////////

///// HANDLES
function handleInvalidTask() {
  console.log("A valid task was not introduced");
}

function handleInvalidCommand() {
  console.log(
    "A valid command was not introduced\nType --help to see the different commands"
  );
}

function handleTaskNotFound() {
  console.log("The task has not been found");
}

function handleAlreadyExistingTask() {
  console.log("Task already exists");
}
///// OTHERS
function readFromJason() {
  var content = fs.readFileSync("./task-list.json");
  return JSON.parse(content);
}

function argsToString() {
  let task = "";
  let first_word = process.argv[3];
  if (first_word == undefined) return -1;
  for (let i = 3; process.argv[i] != undefined; i++) {
    if (i != 3) task += " ";
    task += process.argv[i];
  }
  return task;
}
