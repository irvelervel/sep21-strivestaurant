// for fetching external data and use it in our component, we'll need
// to store it in the STATE
// we're building Reservations as a Class Component

// in this component we're going to grab all the reservations sent through the form
// our reservations are going to come back as an array of objects

// [ {}, {}, {}, ... ]

// we need to make room in our state for the incoming array of reservations
// the state variable you're going to use for storing the array of reservations
// must be initialized with an EMPTY ARRAY (because we still want to be able to map() it)

import { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup'
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'

class Reservations extends Component {

    state = {
        reservations: [], // <-- this is the array for storing the reservations data
        isLoading: true, // <-- this is a property for storing the loading process of the fetch operation
        isError: false // <-- this is a property for storing any errors that may occurr in the fetch operation
    }

    // what's the best practise to fill our state up with data coming from an API?

    // componentDidMount is a lifecycle method
    // it will allow you to inject come logic immediately after the mounting of the
    // component into the DOM
    // you can use componentDidMount just in a Class Component

    // componentDidMount is PERFECT for fetching remote data in a React Component
    // it happens AFTER the initial invokation of render()

    // 1) render()
    // 2) componentDidMount()
    // ...and, if you're setting the state in componentDidMount
    // 3) render()

    componentDidMount = () => {
        console.log("I'm the componentDidMount")
        // let's do our fetch here!
        this.fetchReservations()
        // now let's set the state of the component with the reservations we just grabbed!

        // componentDidMount gets just called ONCE
        // that's why it's the perfect place for an initial fetch
    }

    fetchReservations = async () => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/reservation')
            console.log(response)
            // we came here after some time...

            if (response.ok) {
                // we got something! the response code was likely 200
                let data = await response.json()
                // console.log(data)
                this.setState({
                    reservations: data, // <-- this.state.reservations now is NOT a [] anymore
                    isLoading: false
                })
            } else {
                // if we fall here we're getting an error, maybe a 404
                this.setState({
                    isLoading: false,
                    isError: true
                })
            }
        } catch (error) {
            // an internet problem
            this.setState({
                isLoading: false,
                isError: true
            })
        }
    }

    render() {
        // the render() method FIRES AGAIN every time there's a change in the state
        // or in the props of this component

        console.log("I'm the render")
        return (
            <>
                <h2 className="mt-4">BOOKED TABLES</h2>
                {
                    this.state.isLoading && <Spinner animation="border" variant="info" />
                }
                {
                    this.state.isError ? (
                        <Alert variant="danger">
                            Something went wrong :(
                        </Alert>
                    ) : (
                        <ListGroup className="mb-5">
                            {
                                this.state.reservations.map(res => (
                                    <ListGroup.Item key={res._id}>
                                        {res.name} for {res.numberOfPeople}
                                    </ListGroup.Item>
                                ))
                            }
                        </ListGroup>
                    )
                }
            </>
        )
    }
}

export default Reservations