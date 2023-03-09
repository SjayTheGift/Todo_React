
import React, { useState, useEffect } from 'react';

// Import Bootstrap UI
import Container  from "react-bootstrap/Container"



//Import Componets
import AddFormModal from './components/AddFormModal';
import TaskList from './components/TaskList';
import useFetch from './useFetch';



function App() {

  const [showAddForm, setShowAddForm] = useState(false);
  const {data : todos, setData : setTodos, isPending, error} = useFetch('http://localhost:8000/todos')
  
    const handleToggleComplete = (id) => {
      let item = {};
      let list = todos.map((task) => {
        if(task.id === id){
          item = {...task, completed: !task.completed}
            fetch(`http://localhost:8000/todos/${id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item)
          }).then((res) => {
            console.log(res);
          }).then((data) => {
            console.log(data)
          })
        }else{
          item = {...task}
        }
        return item
      });
     setTodos(list)
    }



    const handleDelete = (id) => {
      let item = {};
      todos.map((task) => {
        if(task.id === id){
          item = {...task, completed: !task.completed}
            fetch(`http://localhost:8000/todos/${id}`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item)
          }).then((res) => {
            console.log(res);
          }).then((data) => {
            console.log(data)
          })
        }else{
          item = {...task}
        }
        return item
      });
    }

  return (
    <Container className="mt-2">
      <h1 className="text-center">Add Todo</h1>


      <AddFormModal showAddForm={showAddForm} setShowAddForm={setShowAddForm} todos={todos} setTodos={setTodos}/>
      {error && <div>{error}</div> }
      {isPending && <div>Loading...</div>}
      {todos && <TaskList todos={todos} setTodos={setTodos} handleToggleComplete={handleToggleComplete} handleDelete={handleDelete}/>}

    </Container>
    
  );
}

export default App;
