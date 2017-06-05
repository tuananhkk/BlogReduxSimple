import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
import _ from 'lodash';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
    
  renderPosts(){
    return _.map(this.props.posts, post => {
        return (
          <li className='list-group-item' key={post.id}>
            <Link to={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        );
    });
  }
  
  render() {
    return (
      <div>
      <h1>Welcome to my Blog</h1>
      
      <br></br>
      
      <h3>Posts</h3>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
      
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);