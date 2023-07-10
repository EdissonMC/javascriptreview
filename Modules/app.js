const {todoApp}= require('./management')

todoApp.addTask(todoApp.createTask("1", "task1", "my task # 1", new Date(), "created"))
todoApp.addTask(todoApp.createTask("2", "task2", "my task # 2", new Date(), "created"))
todoApp.addTask(todoApp.createTask("3", "task3", "my task # 3", new Date(), "created"))

// console.log(data.getList())
// console.log("updating " )
todoApp.updateTask("2", todoApp.createTask("2", "task2", "my task # 2 UPDATED", new Date(), "created"))
console.log( todoApp.getList())

console.log("REMOVING ITEM ")
todoApp.removeTaskBy("2")
console.log( todoApp.getList())