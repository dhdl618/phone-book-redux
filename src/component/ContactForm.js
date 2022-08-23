import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react'
import { useDispatch } from 'react-redux';

const ContactForm = () => {
    const [name, setName] = useState("")
    const [phoneNum, setPhoneNum] = useState(0)
    const dispatch = useDispatch()

    const addContact = (event) => {
        event.preventDefault()  // page refresh를 막음
        dispatch({type:"ADD_CONTACT",payload:{name, phoneNum}})
    }

  return (
    <div className='contact-left-container'>
        <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" onChange={(event)=>{setName(event.target.value)}}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="number" placeholder="Enter phone number" onChange={(event)=>{setPhoneNum(event.target.value)}} />
        </Form.Group>

        <Button variant="primary" type="submit">
            Add
        </Button>
        </Form>
    </div>
  )
}

export default ContactForm
