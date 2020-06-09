import React, { Component } from 'react';
import {Container,Row,Col,Image,Badge} from 'react-bootstrap'
import './MovieDetails.css'
import AddComment from './AddComment'
import CommentList from './CommentList'
class MovieDetails extends Component {
    state = { 
        movie:{},
        loading: true
     }

     componentDidMount = async () => {
     const url = 'http://www.omdbapi.com/?apikey=809d53f5'
        const movieId = this.props.match.params.id;
        let response = await fetch(url + '&i=' + movieId)
        let movie = await response.json()
        this.setState({
          movie,
          loading:false
        })
        console.log('state',this.state.movie)
    }
   render(){
       return (
     <Container>
         <Row>
             <Col>
             <Image className='mt-3' src={this.state.movie.Poster}>
             </Image>
             </Col>
             <Col>
             <div>
            <h1>{this.state.movie.Title}
            <Badge variant='primary' className='mx-2'>{this.state.movie.Rated}</Badge>
            </h1>
            </div>
            <div>
            <p>{this.state.movie.Plot}</p>
       <span>Released - {this.state.movie.Released}</span>
       <span className='mx-3'>Language - {this.state.movie.Language}</span>
       <span>Duration - {this.state.movie.Runtime}</span>
            </div>
            <div>
            <Badge variant='success' className='mx-2'>IMDB RATING - {this.state.movie.imdbRating}</Badge>
            <Badge variant='success' className='mx-2'>Votes- {this.state.movie.imdbVotes}</Badge>
            </div>
            <div className='mt-5'>
         <AddComment id={this.state.movie.imdbID}/>
            </div>
             </Col>
          
         </Row>
     </Container>
       )
   }
}
 
export default MovieDetails;