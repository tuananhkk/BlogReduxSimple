import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }
  
render() {
    
    const { post } = this.props;
    
    if (!post) {
        return <div>...Loading your Post</div>
    }
    
    return (
      <div>
        <Link to="/">Back</Link>

        <h3>{post.title}</h3>
        <h6>By: </h6>
        <p>{post.body}</p>

      </div>
    );
  }
}


function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);