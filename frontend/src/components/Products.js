import React, { Component } from 'react'
import { CardBody, CardText, CardImg, Card, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
import datas from '../data';
import { Jumbotron, Container  } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Products extends Component {
    render() {
        return (
                <div>
                <br></br>
                <Jumbotron  fluid style={{ flex: 1, backgroundImage: "url('https://i.pinimg.com/564x/66/2e/5f/662e5f608f0e53df7b09fda9942dff60.jpg')" }}>
        <Container>
          <h1 className="display-3"><font color='black'>ALL PRODUCTS</font></h1>
          <p className="lead"></p>
          <br></br><br></br><br></br><br></br><br></br><br></br>
        </Container>
      </Jumbotron>,
                <br></br>
                <Row>
                    {datas.products.map(pd =>

                        <Col md="3">
                            <Card style={{flex:1, backgroundColor:'white'}}>
                                <CardImg src={pd.image} />
                                <CardBody>
                                    <CardTitle><h5>{pd.name}</h5></CardTitle>
                                    <CardText>รายละเอียดสินค้า</CardText>
                                    <CardSubtitle>ราคา : {pd.price} บาท</CardSubtitle>
                                    <CardSubtitle>จำนวน : {pd.numStock} ชิ้น</CardSubtitle>
                                    
                                    <Button color="success"><Link to ='/Payment' ><font color="link">ชำระเงิน</font></Link></Button>
                                </CardBody>
                            </Card>
                        </Col>

                    )
                    }
                </Row>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
            
        )
    }

}
