// Import Bootstrap UI
import Row from 'react-bootstrap/Row';


// Import componets

import Task from './Task';

const TaskList = ({setTodos, todos, handleToggleComplete, handleDelete }) => {
  return (
    <Row>
        {
            todos.map((todo)=>(
                <Task  
                key={todo.id} 
                id={todo.id}
                name={todo.name} 
                completed={todo.completed} 
                // handleShow={handleShow}
                handleDelete = {handleDelete}
                todos={todos}
                setTodos={setTodos}
                handleToggleComplete={handleToggleComplete}
                />
            ))
        }
       
      </Row>
  )
}

export default TaskList
