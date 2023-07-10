
const list = require("./data").data

let todoApp = {
    addTask(task) {
        this.list.push(task)
    },
    updateTask(id, newTask) {

        this.list = this.list.map((task) => {
            if (task.id === id) {
                console.log("updating")
                return newTask
            }
            return task
        })

    },
    removeTaskBy(id) {
        let index = this.list.findIndex(task => task.id === id)
        this.list.splice(index, 1)
    },
    getTaskById(id) {
        return this.list.filter((task) => task.id === id)
    },
    getList() {
        return this.list
    }
    , createTask(id, title, description, date, status) {
        return {
            id, // String, //should be unique
            title, //String,
            description,  //: String,
            date,  //String,
            status // String, //created, postponed, completed
        }
    }
    ,
    list
}

module.exports = {
    todoApp
}