import { useState } from 'react';

//Import Bootstrap UI
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const AddFormModal = ({ showAddForm, setShowAddForm, todos, setTodos }) => {


  const str2bool = (value) => {
    if (value && typeof value === "string") {
         if (value.toLowerCase() === "true") return true;
         if (value.toLowerCase() === "false") return false;
    }
    return value;
 }

    const handleClose = () => setShowAddForm(false);
    const handleShow = () => setShowAddForm(true);

    const [name, setName] = useState('')
    const [completed, setCompleted] = useState(false)

    const handleAddTodos = (e) =>{
      e.preventDefault();

      const todo = { name, completed };

      fetch('http://localhost:8000/todos/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo)
      }).then((res) => {
        console.log(res);
      })
      // let id = todos.length + 1
      // setTodos([...todos, {id: id, name: name, completed: completed  }])
      setCompleted(false)
      setName(null)
      handleClose()
    }
 

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      <i className="fas fa-plus"></i>
      </Button>

      <Modal
        show={showAddForm}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="floatingInputGrid">
            <FloatingLabel controlId="floatingInputGrid" label="Add task">
            <Form.Control type="text" placeholder="Add task" value={name}  onChange={(e) => setName(e.target.value)} />
          </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formSelect">
          <Form.Select aria-label="Default" value={completed} onChange={ (e) => setCompleted(str2bool(e.target.value))}>
            <option value={false}>Incomplete</option>
            <option value={true}>Complete</option>
          </Form.Select>
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddTodos}>Add   <i className="fas fa-plus"></i></Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

//console.log(e.target.value)

export default AddFormModal
