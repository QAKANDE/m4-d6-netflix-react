import React, { Component } from 'react';
import formik from 'formik'
import {Col,Form,Button,Row,Container} from 'react-bootstrap'
import './Register.css'
 class Register  extends Component{
    state = {
        details:{
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        dob:"",
        creditcard:"",
        address:"",
        street:"",
        city:"",
        postcode:"",
        submit:""
        }
    }

 handleChange = (event) => {
     let details = this.state.details
     let id = event.currentTarget.id
     details[id] = event.currentTarget.value
     this.setState({
         details
     })
     console.log(this.state)
    }
     render(){
        return <>
        <Container>
        <Form onSubmit={this.handleSubmit}>
        <Row>
        <Col>
        <Form.Group >
        <Form.Label className='formlabel' htmlFor="firstname">First Name</Form.Label>
        <Form.Control type="text" 
           name="firstname"
           id="firstname"
            placeholder="Please enter your first name"
            value={this.state.details.firstname}
            onChange={this.handleChange} />
        </Form.Group>
        </Col>
        <Col>
        <Form.Group >
        <Form.Label className='formlabel' htmlFor="lastname">Last Name</Form.Label>
        <Form.Control type="text" 
           name="lastname"
           id="lastname"
            placeholder="Please enter your last name"
            value={this.state.details.lastname}
            onChange={this.handleChange}
            required
            />
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
              <div className="valid-feedback">Looks good!</div>
        </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col> <Form.Group >
    <Form.Label className='formlabel' htmlFor="email">Email address</Form.Label>
    <Form.Control 
    type="email" 
       name="email"
       id="email"
       value={this.state.details.email}
       onChange={this.handleChange}
    placeholder="Please enter your email" />
  </Form.Group>
  </Col>
        <Col> <Form.Group >
    <Form.Label className='formlabel' htmlFor="password">Password</Form.Label>
    <Form.Control type="password" 
       name="password"
       id="password"
       value={this.state.details.password}
       onChange={this.handleChange}
    placeholder="Please enter your password" />
  </Form.Group>
  </Col>
        </Row>
        <Row>
        <Col> <Form.Group >
    <Form.Label className='formlabel' htmlFor="dob">Year of birth</Form.Label>
    <Form.Control type="number" 
       name="dob"
       id="dob"
       value={this.state.details.dob}
       onChange={this.handleChange}
    placeholder="Please enter your Year Of Birth" />
  </Form.Group></Col>
        <Col> <Form.Group >
    <Form.Label className='formlabel' htmlFor="creditcard">Credit Card Details</Form.Label>
    <Form.Control type="number"
       name="creditcard"
       id="creditcard"
       value={this.state.details.creditcard}
       onChange={this.handleChange}
    placeholder="Please enter the number on your card" />
  </Form.Group>
  </Col>
        </Row>
        <Row>
        <Col> <Form.Group>
    <Form.Label className='formlabel' htmlFor="address">Address Line</Form.Label>
    <Form.Control type="text" 
       name="address"
       id="address"
       value={this.state.details.address}
       onChange={this.handleChange}
    placeholder="Please enter your address" />
  </Form.Group></Col>
        <Col> <Form.Group >
    <Form.Label className='formlabel' htmlFor="city">City</Form.Label>
    <Form.Control type="text"
    name="city"
    id="city"
    value={this.state.details.city}
    onChange={this.handleChange}
    placeholder="Please enter your city"
     />
  </Form.Group>
  </Col>
        </Row>
        <Row>
        <Col> <Form.Group >
    <Form.Label className='formlabel' htmlFor="street">Street</Form.Label>
    <Form.Control type="text"
     name="street"
     id="street"
     value={this.state.details.street}
     onChange={this.handleChange}
    placeholder="Please enter your street name" />
  </Form.Group></Col>
        <Col> <Form.Group >
    <Form.Label className='formlabel' htmlFor="postcode">Postal Code</Form.Label>
    <Form.Control type="number" 
     name="postcode"
     id="postcode"
     value={this.state.details.postcode}
     onChange={this.handleChange}
    placeholder="Please enter your post code" />
        </Form.Group>
        </Col>
        </Row>
        <div className="d-flex justify-content-center">
        <Button type="submit">Submit</Button>
        </div>
        </Form>
        </Container>
        </>
}
 }
 
export default Register;