import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText,Row } from 'reactstrap';
import { Jumbotron, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Card, CardBody,  CardTitle, CardText, CardImg } from 'reactstrap';
export default class Payment extends Component {
    render() {
        return (
            <div class="container-full-bg">
      <Jumbotron  fluid style={{ flex: 1, backgroundColor: "green" }}>
        <Container fluid>
          <h1 className="display-3"><font color='white'>ข้อมูลการชำระเงิน</font></h1>
          <p className="lead"></p>
        </Container>
      </Jumbotron>
    
            <Form>
      <FormGroup Row>
        <Label for="examplename" md={5}><h3>ชื่อ-นามสกุล</h3></Label>
        <Col md={10}>
          <Input type="text" name="name" id="examplename" placeholder="with a placeholder" />
        </Col>
      </FormGroup>
      <FormGroup Row>
            <Label for="exampleEmail" md={3}><h3>Email</h3></Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </FormGroup>
      <FormGroup Row>
        <Label for="examplename" md={5}><h3>เบอร์โทร</h3></Label>
        <Col md={10}>
          <Input type="number" name="name" id="examplename" placeholder="with a placeholder" />
        </Col>
      </FormGroup>
      <FormGroup >
        <Label for="exampleSelect" sm={5}><h3>เลือก size สินค้า</h3></Label>
        <Col sm={15}>
          <Input type="select" name="select" id="exampleSelect">
          <option>(เลือก size)</option>
          <option>UK 6.5/UK 5.5/Eure 39</option>
            <option>UK 7/UK 6/Eure 39.5</option>
            <option>UK 7.5/UK 6.5/Eure 40</option>
            <option>UK 8/UK 7/Eure 41 </option>
            <option>UK 8.5/UK 7.5/Eure 41.5</option>
            <option>UK 9/UK 8/Eure 42</option>
            <option>UK 9.5/UK 8.5/Eure 42.5</option>
            <option>UK 10/UK 9/Eure 43</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup >
        <Label for="exampleSelect" sm={5}><h3>ช่องทางการชำระเงิน</h3></Label>
        <Col sm={10}>
          <Input type="select" name="select" id="exampleSelect">
          <option>(เลือกช่องทางการชำระเงิน)</option>
          <option>ชำระผ่านบัตรเครดิต/ บัตรเดบิต</option>
            <option>ชำระผ่าน Online Banking</option>
            <option>ชำระผ่าน Mobile Banking</option>
            <option>ชำระผ่าน Internet Banking </option>
            <option>ชำระเงินปลายทาง</option>
          </Input>
        </Col>
      </FormGroup>
      
      
      <FormGroup Row>
        <Label for="exampleText" sm={2}><h3>ที่อยู่</h3></Label>
        <Col sm={10}>
          <Input type="textarea" name="text" id="exampleText" />
        </Col>
      </FormGroup>
      <br></br>
      <Col md={{ size: 50, offset: 0 }}>
      <Button  color="success"><Link to ='/Payment' ><font color="link">ชำระเงิน</font></Link></Button>
      </Col>
      <br></br>
      
      <img src="/images/visa.jpg" alt=""/>
      
      
    </Form>
    </div>
        )
    }
}
