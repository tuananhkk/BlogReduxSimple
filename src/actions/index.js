import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

//const ROOT_URL1 = 'http://reduxblog.herokuappp.com/api';
//const API_KEY = '?key=TUANANHKK123';
const ROOT_URL = 'http://jsonplaceholder.typicode.com/posts';


export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}`);
    
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/${id}`);
    
    return {
        type: FETCH_POST,
        payload: request
    }
}

export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}`, values)
    .then(() => callback());
    
    return {
        type: CREATE_POST,
        payload: request
    }
}

export function deletePost(id, callback) {
    const request = axios.delete(`${ROOT_URL}/${id}`)
    .then(() => callback ());
    
    return {
        type: DELETE_POST,
        payload: request
    }
}