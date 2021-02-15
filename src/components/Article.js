import React, { useState, useContext} from 'react';
import './Article.css'; 
import { CopyToClipboard } from 'react-copy-to-clipboard';
import axios from 'axios'; 
import { UserContext } from "../providers/UserProvider";
import {
    EmailShareButton,
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    RedditShareButton
} from "react-share";

import {
    EmailIcon,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    RedditIcon
} from "react-share";
import PropTypes from 'prop-types';


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
                console.log("SAVED!")
        })
            .catch((error) => {
            console.log(error)
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
            <p className="card-subtitle mb-2 text-muted">{props.source_name === 'Buzzfeed' ? null : props.author }</p>
            <p className="card-subtitle mb-2 text-muted">{props.convertTime(props.publication_date)}</p>
            <p className="card-text">{props.description && props.source_name !== 'Buzzfeed' ? props.description : null }</p>
        </div>
        <div className="card-footer">
        <a href={props.article_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary m-1">Read</a>
        { user ? 
            props.isSaved ? <button className="btn btn-primary m-1" onClick={() => unsaveArticle(props.userId, props.articleId)}>Unsave</button> : <button className="btn btn-primary m-1" onClick={() => saveArticle(props.userId, props.articleId)}>Save</button>
            : null 
        }
            <CopyToClipboard text={props.article_url} onCopy={() => setCopied(true)}>
            { copied ?  <button className="btn btn-primary m-1">Copied!</button> : <button className="btn btn-primary m-1">Copy Link</button>}
            </CopyToClipboard>
            <EmailShareButton url={props.article_url}><EmailIcon size={40} className="m-1" /></EmailShareButton>
            <FacebookShareButton url={props.article_url} quote={props.title}><FacebookIcon size={40} className="m-1"/></FacebookShareButton>
            <TwitterShareButton url={props.article_url}><TwitterIcon size={40} className="m-1"/></TwitterShareButton>
            <WhatsappShareButton url={props.article_url}><WhatsappIcon size={40} className="m-1"/></WhatsappShareButton>
            { !user ? <RedditShareButton url={props.article_url}><RedditIcon size={40} className="m-1"/></RedditShareButton> : null }
        </div>
        </div>
        </div>
    ) 
}

Article.propTypes = {
    baseUrl: PropTypes.string.isRequired,
    convertTime: PropTypes.func.isRequired,
    article_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    description: PropTypes.string,
    source_name: PropTypes.string.isRequired,
    publication_date: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    sentiment: PropTypes.string.isRequired,
    isSaved: PropTypes.bool.isRequired,
    articleId: PropTypes.string.isRequired, 
    userId: PropTypes.string,
    onSaveUpdated: PropTypes.func.isRequired
};

export default Article; 