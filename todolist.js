var config = {
    databaseURL: "https://project1-todo-list.firebaseio.com",
};
firebase.initializeApp(config);

// Variable set to Firebase
var Todos = firebase.database().ref('/todos');

//Watcher
Todos.on('value', function(snapshot) {
  todoList.todos = snapshot.val();
})


var todoList = new Vue({
  el: '#todo',
  data: {
    todos: []
  },
  methods: {
    //Add Todo
    addTodo: function() {
      Todos.push(this.newTodo)
      this.newTodo.text = ''
    },
    //RemoveTodo by Key
    removeTodo: function(key) {
      Todos.child(key).remove()
    },
    //Remove All
    removeAllTodo: function(key){
      Todos.remove()
    }
  }
})