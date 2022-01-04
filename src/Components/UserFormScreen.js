import React, { useState, useReducer, useRef} from 'react'
import { Col, Form, Button, Alert } from "react-bootstrap"
import validator from "email-validator"
import { useDispatch, useSelector } from 'react-redux'
import { addUserAction } from '../action/userActions'




export default function UserFormScreen() {

    const dispatch = useDispatch()

    const ref = useRef()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [photo, setphoto] = useState('')

    const [valerror, setValerror] = useState(false)
    const [errorMessage, seterrorMessage] = useState("")

    

    const addUser = useSelector(state => state.addUser)

    const { loading , error , success } = addUser

   

     const submitHandler = (e) =>{

        console.log(photo)

        e.preventDefault()
  
        if(name && email && password && photo)
        {
        if(!validator.validate(email)){
                seterrorMessage("Enter the correct Email address")
                setValerror(true)
        }
        else if(!(photo.type.split('/')[0] === 'image')){

            seterrorMessage("Give image format")
            setValerror(true)
        }
        else{
        setValerror(false)
        const formData = new FormData();
        formData.append('name',name)
        formData.append('email',email)
        formData.append('password',password)
        formData.append('photo', photo);

        dispatch(addUserAction(formData))

        setName("")
        setEmail("")
        setPassword("")
        setphoto("")
        ref.current.value = ""

            }
        }
        else{

            seterrorMessage("Enter all the fields")
            setValerror(true)
           
        }  
    }

    return (
        <div className='container'>

            <Col md={6} className='offset-md-3 mt-3'>
            { loading ? <Alert>loading...</Alert> 
            : error ? <Alert>Error Occured. Email may already present</Alert>
            : success ?  <Alert>Success</Alert> : null}
            <p className="text-center">User Form</p>
            {valerror && <Alert variant='danger'>{errorMessage}</Alert>}
            <Form>
            <Form.Group className='mt-3'>
             <Form.Label>Name</Form.Label>
             <Form.Control type="text" 
             placeholder="Enter the name"
             value={name}
             onChange={e=> setName(e.target.value)}
             />
            </Form.Group>
           
            <Form.Group className='mt-3'>
            <Form.Label>Email</Form.Label>
             <Form.Control type="email" 
             placeholder="Enter the name"
             value={email}
             onChange={e=> setEmail(e.target.value)}/>
            </Form.Group>
              
            <Form.Group className='mt-3'>
             <Form.Label>Password</Form.Label>
             <Form.Control type="password" placeholder="Enter the password"
             value={password}
             onChange={e=> setPassword(e.target.value)}
             />
            </Form.Group>

            <Form.Group className='mt-3'>
            <Form.Label>Profile</Form.Label>
             <Form.Control type="file"
             ref={ref}
             onChange={ e => setphoto(e.target.files[0])}/>
            </Form.Group>

            <Button className="bg-success mt-3"
            onClick={submitHandler}>Add Product</Button>
            </Form>
            </Col>
        </div>
    )
}
