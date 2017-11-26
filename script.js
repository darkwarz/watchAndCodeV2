//customizing functions//
makeTureySandwich _______
    Get one slice of bread.
    Add _____.
    Put a slice of bread on top. 


function makeSandwichWith (filling) {
    Get one slice of bread; 
    Add filling;
    Put a slice of bread on top;
}

makeSandwichWith _ham_
makeSandwichWith('ham')

console.log('My Todos', todos)
//customizing functions 
// end//

//more on customizing functions//

function sayHiTo (person) {
    console.log('hi', person);
}
sayHiTo('gordon') //person = 'gordon'
// more on customizing functions 
// end //

//v2 Requirements 
    //it should have a function to display todos ./
    //it should have a function to add todos ./
    //it should have a function to change todo ./
    //it should have a function to delete a todo
    
    
//It should have a functon to display todos.
var todos = ['item 1', 'item 2', 'item 3']
function displayTodos() {
    console.log('My todos:', todos);
}
displaysTodos()
//My Todos:["item1", "item2", "item3"]                              display

//It should have a function to add todos.
function addTodo() {
    todos.push('new todo');
}
displayTodos()
//My Todos:["item1","item2","item3","new todo"]                     display
addTodo()
//My Todos:["item1","item2","item3","new todo", "new todo"]         display

function changeTodo(position, newValue) {
    todos[position] = newValue;
}

displayTodos()
////My Todos:["item1","item2","item3","new todo", "new todo"]       display
changeTodo(0,'changed')
displayTodos()
// My Todos:["changed","item2","item3","new todo", "new todo"]      display

//It should have a function to change todos.
function changeTodo(position, newValue) {
    todos[position] = newValue;
    displaysTodos();
}
//it should delete todo
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}
deleteTodo(0)
displayTodos()
//My Todos:["item2","item3","new todo", "new todo"]                 display
deleteTodo(2)
//My Todos:["item2","item3","new todo"]                             display
