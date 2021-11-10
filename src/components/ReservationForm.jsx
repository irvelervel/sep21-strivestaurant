// this component will be about a form for submitting a restaurant reservation
// we want to leverage the state of this component to hold the values of the input fields

import { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// name
// phone
// numberOfPeople
// smoking
// dateTime
// specialRequests

class ReservationForm extends Component {

    state = {
        reservation: {
            name: '',
            phone: '',
            numberOfPeople: 1,
            smoking: false,
            dateTime: '',
            specialRequests: ''
        }
    }

    render() {
        return (
            <>
                <h2>Book your table NOW!</h2>
                <Form>
                    <Form.Group>
                        <Form.Label>Your name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Input your name"
                            value={this.state.reservation.name}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Your phone</Form.Label>
                        <Form.Control
                            type="tel"
                            placeholder="Input your cellphone"
                            value={this.state.reservation.phone}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>How many people?</Form.Label>
                        <Form.Control as="select"
                            value={this.state.reservation.numberOfPeople}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Check
                            type="checkbox"
                            label="Do you smoke?"
                            // value -> on/off, not very useful
                            checked={this.state.reservation.smoking}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Date?</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            value={this.state.reservation.dateTime}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Any special request?</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            value={this.state.reservation.specialRequests}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </>
        )
    }
}

export default ReservationForm