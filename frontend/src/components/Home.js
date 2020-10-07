import React, { Component } from 'react'
import { Jumbotron, Button, Form } from 'react-bootstrap';
import Slides from './Slides';
import { Badge } from 'reactstrap';



export default class Home extends Component {
    render() {
        return (


            <div>


                <div className="container">
                    <Jumbotron style={{ flex: 1, backgroundImage: "url('https://i.pinimg.com/564x/1b/74/db/1b74dbda310b4bd53d4d87b207781ee2.jpg')" }}>
                        <h1 className="display-3"><font color='black'>Sneakers</font></h1>
                        <p className="lead"><font color='red'><h3><br></br><br></br><br></br><br></br></h3></font></p>
                        <hr className="my-2" />
                        <p className="lead">



                        </p>
                    </Jumbotron>
                </div>
                <h1><font color='black'>Products</font> <Badge color="danger">New</Badge></h1>
                <Slides>
                    <h1>Stock Home <Badge color="danger">New</Badge></h1>
                </Slides >
            </div>
        )
    }
}
