import { Carousel, Container, Col, Row } from 'react-bootstrap'
import items from '../data/menu.json'

for (let i = 0; i < items.length; i++) {

}

const Home = () => (
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
    </Container>
)

export default Home