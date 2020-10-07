import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Jumbotron, Container } from 'reactstrap';
export default class Contact extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid style={{ flex: 1, backgroundImage: "url('https://www.immigration.ca/wp-content/uploads/2020/04/contact_us_279387361-scaled.jpeg')" }}>
          <Container fluid>
            <h1 className="display-3"><font color='red'><br></br><br></br><br></br></font></h1>
            <p className="lead"></p>
          </Container>
        </Jumbotron>
<br></br>
<Jumbotron  fluid style={{ flex: 1, backgroundImage: "url('https://https://cdn.hipwallpaper.com/i/30/65/bpIr9d.jpg')" }}>
        <Container fluid>
          <h1 className="display-4"><font color='black'>E-mail</font></h1>
          <p className="lead"><h3><font color='black'>E-Mail : Toe7528@gmail.com<br></br>zboompopz@hotmail.com</font></h3></p>
        </Container>
      </Jumbotron>

      <Jumbotron  fluid style={{ flex: 1, backgroundColor: "brown" }}>
        <Container fluid>
          <h1 className="display-5"><font color='white'>Social media</font></h1>
          <p className="lead"><h3><font color='white'>Facebook : Sneaker B&T Store<br></br>Line : @Sneaker B&T Store</font></h3></p>
        </Container>
      </Jumbotron>

      <Jumbotron  fluid style={{ flex: 1, backgroundColor: "green" }}>
        <Container fluid>
          <h1 className="display-5"><font color='white'>เบอร์โทรติดต่อ</font></h1>
          <p className="lead"><h3><font color='white'>เบอร์โทร : 08x-xxx-xxxx</font></h3></p>
        </Container>
      </Jumbotron>

        
        
        



      </div>
    )
  }
}
