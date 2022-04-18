
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
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <button onClick={() => navigate("/checkout")}>CheckOut</button>
              </Card.Body>
            </Card>
          </div>
          {/* card 2 */}
          <div className="col">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={person2} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
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
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
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
        {/* </div> */}
      </div>

       
    );
};

export default Home;