// import React from "react";
// import { Badge, ListGroup } from "react-bootstrap";
 
// class CommentList extends React.Component {
//   state = { 
//     comments:[],
//   }
//   componentDidMount = async () => {
//          const commentsUrl = "https://striveschool.herokuapp.com/api/comments/";
//          let response = await fetch(commentsUrl + this.props.id, {
//            headers: new Headers({
//              Authorization: "Basic dXNlcjIzOjJhazlFNXFxQkt2VjJ3a3k=",
//            }),
//          })
//          let comments = await response.json()
//          this.setState({ comments });
       
//      }
//   render() { 
//     return (
//        <ListGroup>
//         <ListGroup.Item>
//           <Badge pill variant="info" className="mr-3">
//                  {comments.rate}
//             </Badge>
//                {comments.comment}
//              </ListGroup.Item>
//            </ListGroup> 
//            );
//   }
// }
 
// export default CommentList;
