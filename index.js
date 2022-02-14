//New object for array data
const newTask = function(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    // Print the state of a task to the console in a nice readable way
    logTaskState: function() {
      // const title = taskTitles[taskIndex];
      // const complete = taskComplete[taskIndex];
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
    completeTask: function() {
      this.complete = true;
    }


  };
  return task;
};
//Test Code



// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
// function newTask(title, description) {
//   taskTitles.push(title);
//   taskDescriptions.push(description);
//   taskComplete.push(false);
// }






// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];



// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

task1.logTaskState(); // Clean Cat Litter has not been completed
task1.completeTask();
task1.logTaskState(); // Clean Cat Litter has been completed

// does it work
console.log(tasks);
