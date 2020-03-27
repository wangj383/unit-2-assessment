const todos = [
];
  
module.exports = {
    getAll,
    create,
    delete: deleteTodo
};

function getAll (){
return todos
}

function create(todo) {
    todos.push(todo);
}

function deleteTodo(id) {
    todos.splice(id,1)
}