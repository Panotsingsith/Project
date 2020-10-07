import React, { Component } from 'react'
import data from '../data';
import { Jumbotron, Container } from 'reactstrap';

import { Toast, ToastBody, ToastHeader, Spinner } from 'reactstrap';

export default class About extends Component {

  render() {
    return (
      <div>
        <Jumbotron fluid style={{ flex: 1, backgroundImage: "url('https://www.sneakerhdwallpapers.com/wallpapers/2020/nike-sb-dunk-low-pro-muslin-wallpaper-preview.jpg')" }}>
          <Container fluid>
            <h1 className="display-1"><font color='black'>About us</font></h1>
            <p className="lead"><font color='purple'><br></br><h3><br></br><br></br><br></br><br></br><br></br></h3></font></p>
          </Container>
        </Jumbotron>

        <Jumbotron style={{ flex: 1, backgroundImage: "url('https://wallpapercave.com/wp/wp3631175.jpg')" }}>
        <Container fluid>
          <h1 className="display-3"><font color='white'>Sneaker</font></h1>
          <p className="lead"><font color='black'><h3>เราได้นำคอมพิวเตอร์เข้ามาประยุกต์ใช้เกี่ยวกับการบันทึกข้อมูลรายการสินค้าและข้อมูลการขายหน้าร้าน ทำให้การทำงานมีความรวดเร็ว ถูกต้อง และสะดวกสบายมากขึ้น</h3></font></p>
        </Container>
      </Jumbotron>

      <Jumbotron style={{ flex: 1, backgroundImage: "url('https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')" }}>
          <Container fluid>
            <h1 className="display-4"><font color='white'>วัตถุประสงค์ของเว็บไซด์</font></h1>
            <p className="lead"><h4><font color='white'>เราอยากจะใช้เทคโนโลยีนี้ให้เป็นประโยชน์<br></br>เพื่อการเพิ่มช่องทางใหม่ในการเลือกซื้อสินค้าผ่านอินเทอร์เน็ตของลูกค้า</font> </h4></p>
          </Container>
        </Jumbotron>

        <Jumbotron style={{ flex: 1, backgroundImage: "url('https://i.pinimg.com/564x/66/2e/5f/662e5f608f0e53df7b09fda9942dff60.jpg')" }}>
        <Container fluid>
          <h4 className="display-4">ผู้จัดทำ</h4>
          <p className="lead"><h4><br></br>นายปณต สิงห์สิทธิ์ <br></br>
          นายวุฒินันท์ ราโรจน์<br></br><br></br><br></br><br></br></h4></p>
        </Container>
      </Jumbotron>

      
        



      </div>
    )
  }
}
