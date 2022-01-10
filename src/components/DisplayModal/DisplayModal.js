import React from 'react';
import { Form } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const DisplayModal = ({ onInputTitleChange, onInputUrlChange, showModal, handleShow, handleClose, onButtonSubmit }) => {   
    return (
        <div>
            <div className='mb-4'>
                <Button onClick={handleShow}>Add API</Button>
            </div>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new API</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div id="modal-alert" role="alert"></div>
                    <Form>     
                        <Form.Group className="mb-3" controlId="validationTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                onChange={onInputTitleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="validationUrl">
                            <Form.Label>URL</Form.Label>
                            <Form.Control
                                required
                                type="url"
                                onChange={onInputUrlChange}
                            />
                            <Form.Text className="text-muted mt-1">
                                URL examples:<br />
                                <b>https://jsonplaceholder.typicode.com/todos</b><br />
                                <b>https://jsonplaceholder.typicode.com/comments</b>
                            </Form.Text>                
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type='submit' onClick={onButtonSubmit}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
        
    )
}

export default DisplayModal;