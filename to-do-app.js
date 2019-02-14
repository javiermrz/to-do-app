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

var command = process.argv[2];
var task = argsToString();
var task_list = readFromJason();

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
  } else if (taskDoesExist()) {
    handleAlreadyExistingTask();
  } else {
    addTaskToList();
    printTasksList(task_list);
    writeToJason(task_list);
  }
}

///// DONE
function executeDoneCommand() {
  var index = findAMatch(task, task_list);
  let taskNotFound = index == -1;
  if (taskNotFound) {
    handleTaskNotFound();
  } else {
    removeTask(index);
    writeToJason(task_list);
  }
  printTasksList(task_list);
}

///// RETRIEVE
function executeRetrieveCommand() {
  printTasksList(task_list);
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

function printTasksList(list) {
  console.log("\nPending tasks\n------------- ");
  list.forEach(element => {
    console.log("- " + element.task);
  });
  console.log();
}

function writeToJason(task_list) {
  var json = JSON.stringify(task_list);
  fs.writeFileSync("./task-list.json", json, "utf8");
}

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

function findAMatch(task, task_list) {
  for (let i = 0; i < task_list.length; i++) {
    if (task === task_list[i].task) {
      return i;
    } else if (i == task_list.length - 1) return -1;
  }
}

function taskDoesExist() {
  return findAMatch(task, task_list) != -1;
}

function addTaskToList() {
  task_list.push({ task: task });
  console.log("Task has been added");
}

function removeTask(index) {
  console.log(`Task has been removed: ${task_list[index].task}`);
  task_list.splice(index, 1);
}
