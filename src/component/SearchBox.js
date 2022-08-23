import React from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

const SearchBox = () => {
    const [keyword, setKeyword] = useState("")
    const dispatch = useDispatch()
    
    const getInformationByKeyword = (e) => {
        e.preventDefault()
        console.log("보낸 키워드는",keyword)
        dispatch({type:"SHOW_FILTERED", payload: {keyword}})
    }
  return (
    <Form onSubmit={getInformationByKeyword}>
        <Row>
            <Col lg={10}>
                <Form.Control type="text" placeholder="Search" onChange={(e)=>{setKeyword(e.target.value)}}></Form.Control>
            </Col>
            <Col lg={2}>
                <Button type="submit">Find</Button>
            </Col>
        </Row>
    </Form>
  )
}

export default SearchBox
