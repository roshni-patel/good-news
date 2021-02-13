import React, { useState, useContext} from 'react';
import './Article.css'; 
import { CopyToClipboard } from 'react-copy-to-clipboard';
import axios from 'axios'; 
import {UserContext} from "../providers/UserProvider";
import {
    EmailShareButton,
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";

import {
    EmailIcon,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";


const Article = (props) => {
    const user = useContext(UserContext)

    const [copied, setCopied] = useState(false); 
    const [errorMessage, setErrorMessage] = useState('')

    // pull into article list or pass into article 
    // delete call as well
    const saveArticle = (userId, articleId) => {
        axios.post(`${props.baseUrl}/users/${userId}/articles/${articleId}`)
            .then((response) => {
                props.onSaveUpdated()
        })
            .catch((error) => {
            setErrorMessage(error)
        })
    };

    const unsaveArticle = (userId, articleId) => {
        axios.delete(`${props.baseUrl}/users/${userId}/articles/${articleId}`)
            .then((response) => {
                props.onSaveUpdated()
        })
            .catch((error) => {
            setErrorMessage(error)
        })
    };


    return (
        <div className="col-sm-6 mb-4">
        <div className="card h-100">
        <img src={props.image_url} className="card-img-top" alt="news"/>
        <div className="card-body">
            <h5 className="card-title">{props.source_name}: {props.title}</h5>
            <p className="card-text">{props.description ? props.description : null }</p>
        </div>
        <div className="card-footer">
        <a href={props.article_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary m-2">Read</a>
        { user ? 
            props.isSaved ? <button className="btn btn-primary m-2" onClick={() => unsaveArticle(props.userId, props.articleId)}>Unsave</button> : <button className="btn btn-primary m-2" onClick={() => saveArticle(props.userId, props.articleId)}>Save</button>
            : null 
        }
            <CopyToClipboard text={props.article_url} onCopy={() => setCopied(true)}>
            { copied ?  <button className="btn btn-primary m-2">Copied!</button> : <button className="btn btn-primary m-2">Copy Link</button>}
            </CopyToClipboard>
            <EmailShareButton url={props.article_url}><EmailIcon size={40} className="m-2" /></EmailShareButton>
            <FacebookShareButton url={props.article_url} quote={props.title}><FacebookIcon size={40} className="m-2"/></FacebookShareButton>
            <TwitterShareButton url={props.article_url}><TwitterIcon size={40} className="m-2"/></TwitterShareButton>
            <WhatsappShareButton url={props.article_url}><WhatsappIcon size={40} className="m-2"/></WhatsappShareButton>
        </div>
        </div>
        </div>
    ) 
}

export default Article; 