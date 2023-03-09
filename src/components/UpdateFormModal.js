import { useState } from 'react';

//Import Bootstrap UI
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const UpdateFormModal = ({setTodos, todos, showUpdateForm, setShowUpdateForm, id, name, completed}) => {

    const handleClose = () => setShowUpdateForm(false);
    const [updateName, setUpdateName] = useState(name)

    // const todo = { name: updateName, completed }

   const handleUpdateTodos = (e) => {
    e.preventDefault();

    let item = {};
    let list = todos.map((task) => {
      if(task.id === id){
        item = {...task, name: updateName}
        fetch(`http://localhost:8000/todos/${id}`, {
          method: 'PUT',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(item)
        }).then((res) => {
          console.log(res.json());
        })

      }else{
        item = {...task}
      }
      return item
    });
  //  setTodos(list)
   handleClose()
  }

  return (
    <>
      <Modal
        show={showUpdateForm}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="floatingInputGrid">
            <FloatingLabel controlId="floatingInputGrid" label="Add task">
            <Form.Control type="text" placeholder="Add task" defaultValue={name} onChange={(e) => setUpdateName(e.target.value)} />
          </FloatingLabel>
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button 
           onClick={handleUpdateTodos}
          variant="success"
          >Update   <i className="fas fa-pen"></i>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UpdateFormModal
