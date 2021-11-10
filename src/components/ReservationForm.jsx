import { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// HOW TO CREATE AN OBJECT PROPERTY FROM THE VALUE OF A VARIABLE/PARAMETER?
let myObj = {}
let property = 'studentName'

// you want to create a property into myObj called 'studentName'
// (so with the VALUE of the name variable!)

// this will create a property called 'name', not 'studentName'
myObj['property'] = 'Stefano Casasola'

// the result (not what you wanted...)
// let myObj = {
//     property: 'Strive School'
// }

// this instead will create a property called 'studentName',
// so the VALUE of the variable property
myObj[property] = 'Stefano Casasola'

// the result (this time is right!)
// let myObj = {
//     studentName: 'Stefano Casasola'
// }

class ReservationForm extends Component {

    // this component will be about a form for submitting a restaurant reservation
    // we want to leverage the state of this component to hold the values of the input fields

    // fields of my form:
    // name
    // phone
    // numberOfPeople
    // smoking
    // dateTime
    // specialRequests

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

    handleInput = (fieldName, value) => {
        // which parameter do I need?
        // 1) field name
        // 2) the value for the field
        this.setState({
            reservation: {
                // spread operator
                ...this.state.reservation,
                [fieldName]: value
                // I'm putting the square brackets on fieldName to EVALUATE IT
                // and take its value for overwriting the corresponding property
                // in the reservation object
                // look for the explanation at the top of the file
            }
        })
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
                            onChange={(e) => {
                                // this is the long way
                                // this.setState({
                                //     reservation: {
                                //         // spread operator
                                //         ...this.state.reservation,
                                //         name: e.target.value
                                //     }
                                // })
                                // and now this is with the function I created:
                                this.handleInput('name', e.target.value)
                            }}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Your phone</Form.Label>
                        <Form.Control
                            type="tel"
                            placeholder="Input your cellphone"
                            value={this.state.reservation.phone}
                            onChange={(e) => {
                                this.handleInput('phone', e.target.value)
                            }}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>How many people?</Form.Label>
                        <Form.Control as="select"
                            value={this.state.reservation.numberOfPeople}
                            onChange={(e) => {
                                this.handleInput('numberOfPeople', e.target.value)
                            }}
                        >
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
                            onChange={(e) => {
                                this.handleInput('smoking', e.target.checked)
                            }}

                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Date?</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            value={this.state.reservation.dateTime}
                            onChange={(e) => {
                                this.handleInput('dateTime', e.target.value)
                            }}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Any special request?</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            value={this.state.reservation.specialRequests}
                            onChange={(e) => {
                                this.handleInput('specialRequests', e.target.value)
                            }}
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