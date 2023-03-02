import React ,{Component} from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card, Button } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Home3 extends Component {
  state = {
    counter :0
   }
   render(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <>
        <div>
         <h1 style={{marginLeft: 20 ,fontWeight:'bold'}}> Best Selling </h1> 
        </div>
      <Carousel responsive={responsive}>
        <div><Card style={{ width: "inherit" }}>
        <Card.Img variant="top" src="./images/Layer-134_540x.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card></div>
        <div><Card style={{ width: "inherit" }}>
        <Card.Img variant="top" src="./images/Layer-142_360x (1).jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card></div>
        <div><Card style={{ width: "inherit" }}>
        <Card.Img variant="top" src="./images/Untitled-2_360x.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card></div>
        <div><Card style={{ width: "inherit" }}>
        <Card.Img variant="top" src="./images/Layer-141-1000x1280_540x (1).jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      </Carousel>
      </>
      )}}
