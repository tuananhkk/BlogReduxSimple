import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }
  
  onDeleteClick () {
    const { id } = this.props.match.params;
    
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  
  render() {
    
    const { post } = this.props;
    
    if (!post) {
        return <div>...Loading your Post</div>;
    }
    
    return (
      <div>
        <div>
          <Link to="/" className='btn btn-info'>Back</Link>
          <button 
            className='btn btn-danger pull-xs-right'
            onClick={this.onDeleteClick.bind(this)}>
            Delete Post
          </button>
        </div>
        
        <h3>{post.title}</h3>
        <h6>By: </h6>
        <br></br>
        <p>{post.body}</p>

      </div>
    );
  }
}


function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPost, deletePost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);