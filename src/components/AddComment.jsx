import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap'
import './AddComment.css'
class AddComment extends Component {
    state = { 
            NewComments:{
                comment:'',
                rate :'',
                bookID :this.props.id
            }
        }
        updateComment = (event) => {
            let NewComments = this.state.NewComments
            let id  = event.currentTarget.id;
           if(id === 'rate' || id === 'bookID'){
             NewComments[id] = parseInt(event.currentTarget.value)
           }
           else {
             NewComments[id] = event.currentTarget.value
           }
           this.setState({NewComments})
            }
            submitComment = async () => {
                try{
                    let response = await fetch("https://striveschool.herokuapp.com/api/comments/",{
                        method:"POST",
                        body: JSON.stringify(this.state.NewComments),
                        Headers:({
                            'Content-Type' : 'Application/json',
                            'Authorization':'Basic dXNlcjIzOjJhazlFNXFxQkt2VjJ3a3k='
                        })
                    })
                    if(response.ok){
                      alert('sucess')
                    }
                    else{
                      alert('something wrong')
                    }
                }catch(err){
                    console.log(err)
                }
                    }
    render() { 
        return ( 
            <>
            <Form onSubmit={this.submitComment}>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label className='formlabel' htmlFor="comment">Comment</Form.Label>
                <Form.Control
                  type="text"
                  name="comment"
                  id="comment"
                  placeholder="Please enter your comment"
                  value={this.state.NewComments.comment}
                  onChange={this.updateComment}
                />
              </Form.Group>
            </Col>
            <Form.Group>
                <Form.Label className='formlabel' htmlFor="rate">
               Please rate the book
              </Form.Label>
                <Form.Control
                  as="select"
                  name="rate"
                  id="rate"
                  value={this.state.NewComments.rate}
                  onChange={this.updateComment}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
          </Row>
          <Row>
          <Col md={6}>
              <Form.Group>
                <Form.Label className='formlabel' htmlFor="bookID">Book ID</Form.Label>
                <Form.Control
                  type="text"
                  name="bookID"
                  id="bookID"
                  value={this.props.id}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button type="submit">Submit</Button>
        </Form>
            </>
         );
    }
}
 
export default AddComment;