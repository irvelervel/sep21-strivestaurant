import { Component } from 'react'
import { Carousel, Container, Col, Row, ListGroup } from 'react-bootstrap'
import items from '../data/menu.json'

// now I want to generate dinamically a list of comments
// the list should come from the last pasta slide I clicked on
// the list of comments wil be shown below the carousel
// for remembering which is the last pasta we clicked on we're gonna use the STATE
// for having a state object in a React Component, we cannot use the functional shape
// we have to convert the Home component from a function to a class
// once you have a class component, you can create a state object!

class Home extends Component {

    state = {
        // the state object is useful for keeping track of things,
        // remembering properties until the tab is closed or the browser
        // gets a refresh
        selectedDish: null,
        // strive: 'School',
        // batch: 'web-sep21'
    }

    // write the only mandatory method in a class component
    render() {
        return (
            // <div className="container" />
            <Container>
                {/* <div className="row" /> */}
                <Row className="mt-3 justify-content-center">
                    {/* <div className="col" /> */}
                    <Col xs={12} md={6} className="text-center">
                        <h1>Welcome to Strivestaurant!</h1>
                        <p>We can serve only pasta</p>
                        <Carousel>

                            {/* .map() and .forEach() are quite similar */}
                            {/* the only difference is that .map() RETURNS you a new array */}

                            {
                                items.map((pastaObject) => (
                                    <Carousel.Item key={pastaObject.id}>
                                        <img
                                            className="d-block w-100"
                                            src={pastaObject.image}
                                            alt="First slide"
                                            onClick={() => this.setState(
                                                {
                                                    selectedDish: pastaObject
                                                }
                                            )}
                                        />
                                        <Carousel.Caption>
                                            <h3>{pastaObject.name}</h3>
                                            <p>{pastaObject.description}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                ))
                            }

                        </Carousel>
                    </Col>
                </Row>
                <Row className="mt-3 justify-content-center">
                    <Col xs={12} md={6} className="text-center">
                        <ListGroup>
                            {
                                // the && is a conditional rendering operator
                                // is called SHORT CIRCUIT
                                // if the section before the && is truthy, the second
                                // half will be rendered
                                // this.state.selectedDish && this.state.selectedDish.comments.map(c => (
                                //     <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
                                // ))

                                // otherwise, if you want to provide 2 different outputs, you can
                                // use the good & ol' ternary operator
                                this.state.selectedDish ? this.state.selectedDish.comments.map(c => (
                                    <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
                                )) : <ListGroup.Item>Click on a pasta to see the reviews!</ListGroup.Item>
                            }
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home