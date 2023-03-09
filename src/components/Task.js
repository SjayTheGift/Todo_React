import { useState } from 'react';

// Import Bootstrap UI
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


import UpdateFormModal from './UpdateFormModal';
const Task = ({setTodos, todos, id, name, completed, handleToggleComplete, handleDelete}) => {

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const handleShow = () => setShowUpdateForm(true);



  return (
    <>
    <UpdateFormModal 
        showUpdateForm={showUpdateForm} 
        setShowUpdateForm={setShowUpdateForm} 
        id={id}
        name={name}
        completed={completed}
        setTodos={setTodos}
        todos={todos}
        />

    <Col xs={12} md={6} lg={4}>
        <Card className="bg-dark text-white mt-4 p-4">

            <Form className="mb-2">
            <Form.Check 
                type="switch"
                id="custom-switch"
                label={completed ? 'Complete': 'Incomplete'}
                value={completed}
                defaultChecked={completed}
                onChange={() => handleToggleComplete(id)}
            />
            </Form>
            <Card.Text>
                {name}
            </Card.Text>
            <Card.Body>
                <Button 
                onClick={handleShow}
                variant="success" 
                style={{marginRight:'20px'}}
                >
                <i className="fas fa-pen"></i>
                </Button>
                <Button variant="danger"
                    onClick={() => handleDelete(id)}
                >
                    <i className="fas fa-trash"></i>
                </Button>
            </Card.Body>
        </Card>
    </Col>
    </>
  )
}

export default Task
