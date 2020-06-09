import React, { Component } from "react";
import {
  Col,
  Modal,
  Form,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import CommentList from "./CommentList";
import {Link} from 'react-router-dom'

class Movie extends Component {
  state = {
    selected: false,
    newComment: {
      comment: "",
      rate: 0,
      elementId: this.props.data.imdbID,
    },
  };

  submitComment = async (e) => {
    e.preventDefault();
    const commentsUrl = "https://striveschool.herokuapp.com/api/comments/";
    const response = await fetch(commentsUrl, {
      method: "POST",
      body: JSON.stringify(this.state.newComment),
      headers: new Headers({
        Authorization: "Basic dXNlcjIzOjJhazlFNXFxQkt2VjJ3a3k=",
        "Content-Type": "application/json",
      }),
    });
    if (response.ok) {
      alert("Comment added");
      this.setState({
        newComment: {
          comment: "",
          rate: 0,
          elementId: this.props.data.imdbID,
        },
      });
    } else {
      alert("An error has occurred");
    }
  };

  handleRadioChange = (e) => {
    let newComment = this.state.newComment;
    newComment.rate = e.currentTarget.id;
    this.setState({ newComment });
  };

  handleCommentText = (e) => {
    let newComment = this.state.newComment;
    newComment.comment = e.currentTarget.value;
    this.setState({ newComment });
  };

  render() {
    return (
      <Col className="mb-2" key={this.props.data.imdbID}>
        <Link to={'/details/' + this.props.data.imdbID}>
        <img
          className="img-fluid"
          src={this.props.data.Poster}
          alt="movie"
          onClick={() => {
            this.setState({ selected: !this.state.selected });
            this.props.fetchComments(this.props.data.imdbID);
          }}
        /> 
        </Link>
      </Col>
    );
  }
}

export default Movie;
