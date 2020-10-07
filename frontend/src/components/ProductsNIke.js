import React, { Component } from 'react'
import { CardBody, CardText, CardImg, Card, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
import data from '../datanike';
import { Jumbotron, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
export default class ProductNike extends Component {
    render() {
        return (
            <div>
                <br></br>
                <Jumbotron style={{ flex: 1, backgroundImage: "url('https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')" }}>
        <Container>
          <h1 className="display-3"><font color='white'>NIKE</font></h1>
          <p className="lead"></p>
        </Container>
      </Jumbotron>,
                <br></br>
                <Row>
                    {data.ProductNike.map(pd =>

                        <Col md="3">
                            <Card color='white'>
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
            </div>
        )
    }

}
