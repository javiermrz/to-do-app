const fs = require("fs");
class TaskList {
    constructor() {
      this.tasks = '';
    }
    addTaskToList(task) {
      this.tasks.push({ task: task });
      console.log("Task has been added");
    }
    printTasksList() {
      console.log("\nPending tasks\n------------- ");
      this.tasks.forEach(element => {
        console.log("- " + element.task);
      });
      console.log();
    }
    writeToJason() {
      var json = JSON.stringify(this.tasks);
      fs.writeFileSync("./task-list.json", json, "utf8");
    }
    findAMatch(task) {
      return this.tasks.findIndex(x => x.task == task);
    }
    removeTask(index) {
      console.log(`Task has been removed: ${this.tasks[index].task}`);
      this.tasks.splice(index, 1);
    }
    taskDoesExist(task) {
      return this.findAMatch(task) != -1;
    }
  }

  let taskList = new TaskList();
  module.exports = taskList;