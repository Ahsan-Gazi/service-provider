
import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Home.css';
import { useNavigate } from "react-router-dom";
import person1 from '../../images/person1.jpg';
import person2 from '../../images/person2.jpg';
import person3 from '../../images/person3.jpg';

const Home = () => {
    const navigate = useNavigate();

    return (
        
        

        <div className="grid-container container-fluid">
      
          <div className="col">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={person1} />
              <Card.Body>
                <Card.Title>Jamil Hossen</Card.Title>
                <Card.Text>
                  Laptop service provider
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Mac service provider</ListGroupItem>
                <ListGroupItem>HP service provider</ListGroupItem>
                <ListGroupItem>Dell service provider</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <button onClick={() => navigate("/checkout")}>CheckOut</button>
              </Card.Body>
            </Card>
          </div>
          {/* card 2 */}
          <div className="col">
            <Card style={{ width: "18rem" }}>
              <Card.Img height={185} variant="top" src={person2} />
              <Card.Body>
                <Card.Title>Bayan Mike</Card.Title>
                <Card.Text>
                  Cloth service provider
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Italian Bindas</ListGroupItem>
                <ListGroupItem>Bangladeshi Garments product</ListGroupItem>
                <ListGroupItem>Kashmiri shal</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <button onClick={() => navigate("/checkout")}>CheckOut</button>
              </Card.Body>
            </Card>
          </div>
          {/* card 3 */}
          <div className="col">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={person3} />
              <Card.Body>
                <Card.Title>Naila Hossen</Card.Title>
                <Card.Text>
                  Book service provider
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>English Book</ListGroupItem>
                <ListGroupItem>Chinese book</ListGroupItem>
                <ListGroupItem>Korean Book</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <button
                  className="btn-primary"
                  onClick={() => navigate("/checkout")}
                >
                  CheckOut
                </button>
              </Card.Body>
            </Card>
          </div>
       
      </div>

       
    );
};

export default Home;