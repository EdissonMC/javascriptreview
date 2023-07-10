# CS472-07-Homework09 - NodeJS modules
## Create a Todo List application using Node.js. The application should allow users to manage their tasks by adding, viewing, updating, and deleting items from the list.

1. The application should have the following functionality
* Add a task to the list with a title and description.
* Get all tasks in the list, including their titles and statuses (completed or incomplete).
* Mark a task as completed or incomplete.
* Update the title or description of a task.
* Delete a task from the list.

2. Use a modular approach by separating the application logic into multiple modules. For example, you could have separate modules for task management,
user input handling, and data storage.

3. Implement proper error handling to handle invalid input or unexpected errors gracefully.

4. Store the tasks in a file or a database to persist the data between application runs. You can choose a simple storage mechanism like a JSON file or Database like MongoDB

## Optional
1. Implement sorting and filtering functionality to allow users to sort the tasks by title, status, or creation date.
2. Add the ability to set due dates for tasks and implement reminders for upcoming or overdue tasks.

## Task structure
```JavaScript
{
    id: String, //should be unique
    title: String,
    description: String,
    date: String,
    status: String, //created, postponed, completed
}
```
