import React from 'react'
import {Row, Col} from 'react-bootstrap'

const ContactItem = ({item}) => {
  return (
    <div className="contact-item">
        <Row>
            <Col lg={2}>
                <img width={50} src='https://cdn-icons-png.flaticon.com/512/149/149071.png'></img>
            </Col>
            <Col lg={10}>
                <div>{item.name}</div>
                <div>{item.phoneNum}</div>
            </Col>
        </Row>
    </div>
  )
}

export default ContactItem
