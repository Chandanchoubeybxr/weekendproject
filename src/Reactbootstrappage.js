import React from 'react'
import { Button,Card } from 'react-bootstrap';
import MUIpage from './MUIpage';
import { FcBusinessman,FcGoogle } from "react-icons/fc";

function Reactbootstrappage() {
  return (
    <div>
        <h1>Reactbootstrappage</h1>
        <Button variant="primary">Primary</Button>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <h1>MUI page</h1>
    
    <MUIpage></MUIpage>

    <h1> <FcBusinessman></FcBusinessman> <FcGoogle></FcGoogle></h1>



    </div>
  )
}

export default Reactbootstrappage