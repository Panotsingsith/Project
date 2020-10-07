import React, { Component } from 'react'
import { CardBody, CardText, CardImg, Card, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
import datas from '../dataConverse';
import { Jumbotron, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
export default class Products extends Component {
    render() {
        return (
            <div>
               <br></br>
               <Jumbotron style={{ flex: 1, backgroundImage: "url('https://mwarv.click.co.ke/wp-content/uploads/2013/10/African_Screens_Wallpapers_Waridi_Man_1920X1200.jpg')" }}>
        <Container>
          <h1 className="display-3"><font color='white'>CONVERSE</font></h1>
          <p className="lead"></p>
        </Container>
      </Jumbotron>,
                <br></br>
                <Row>
                    {datas.products.map(pd =>

                        <Col md="3">
                            <Card>
                                <CardImg src={pd.image} />
                                <CardBody>
                                    <CardTitle><h5>{pd.name}</h5></CardTitle>
                                    <CardSubtitle>ราคา : {pd.price} บาท</CardSubtitle>
                                    <CardSubtitle>จำนวน : {pd.numStock} ชิ้น</CardSubtitle>
                                    <CardText>รายละเอียดสินค้า</CardText>
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
