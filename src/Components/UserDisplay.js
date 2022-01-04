import React, { useState ,useEffect} from 'react'
import { Col, Row, Image, Alert } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import { showUserAction } from '../action/userActions'

export default function UserDisplay() {

    const dispatch = useDispatch()

    const showUser = useSelector(state => state.showUser)


    const getData = async() =>{
        dispatch(showUserAction())
    }

    useEffect(() => {
        getData()
    },[])

    const { loading , error ,users, success } = showUser


    return (        
        <div className='container'>
            <Col md={6} className='offset-md-3 mt-3'>
            <p className="text-center">List of users</p>
            { loading ?  <Alert>loading...</Alert> : null}
            {users ? users.map(user =>{
                return(
                    <Row key={user._id}>
                    <Col md={4}>
                    <Image src={user.image.secure_url} className="heroImage"/>
                    </Col>
                    
                    <Col>
                    <Row><h6>Name:</h6></Row>
                    <Row><p>{user.name}</p></Row>
                    
                    </Col>

                     <Col>
                      <Row><h6>Email:</h6></Row>
                    <Row><p>{user.email}</p></Row>
                    </Col>
                    <br></br>
                    <hr></hr>
                    </Row>
                    
                )
            }) : null}
            </Col>
        </div>
    )
}
