import React, { useState, useContext} from 'react';
import './Article.css'; 
import { CopyToClipboard } from 'react-copy-to-clipboard';
import axios from 'axios'; 
// import {UserContext} from "../providers/UserProvider";



const Article = (props) => {
    // const user = useContext(UserContext)

    const [copied, setCopied] = useState(false); 
    const [errorMessage, setErrorMessage] = useState('')

    const saveArticle = (userId, articleId) => {
        axios.post(`${props.baseUrl}/users/${userId}/articles/${articleId}`)
            .then((response) => {
        })
            .catch((error) => {
            setErrorMessage(error)
        })
    };

    return (
        <div className="col-sm-6 mb-4">
        <div className="card h-100">
        <img src={props.image_url} class="card-img-top" alt="news"/>
        <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.description ? props.description : null }</p>
        </div>
        <div class="card-footer">
        <a href={props.article_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary m-1">Read</a>
            { props.isSaved ? <button className="btn btn-primary" onClick={props.unsaveArticle}>Unsave</button> : <button className="btn btn-primary m-1" onClick={() => saveArticle(props.userId, props.articleId)}>Save</button> }
            <CopyToClipboard text={props.article_url} onCopy={() => setCopied(true)}>
            <button className="btn btn-primary m-1">Share</button>
            </CopyToClipboard>
            {copied ? <span style={{ color: "red" }}>Copied!</span> : null}
        </div>
        </div>
        </div>
    ) 
}

export default Article; 