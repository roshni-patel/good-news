import React, { useState } from 'react'; 
import { CopyToClipboard } from 'react-copy-to-clipboard';
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
import PropTypes from 'prop-types';

const SavedArticle = (props) => {
    const [copied, setCopied] = useState(false); 

    return (
        <div className="col-sm-6 mb-4">
        <div className="card h-100">
        <img src={props.image_url} className="card-img-top" alt="news"/>
        <div className="card-body">
            <h5 className="card-title">{props.source_name}: {props.title}</h5>
            <p className="card-subtitle mb-2 text-muted">{props.source_name === 'Buzzfeed' ? null : props.author }</p>
            <p className="card-subtitle mb-2 text-muted">{props.convertTime(props.publication_date)}</p>
            <p className="card-text">{props.description ? props.description : null }</p>
        </div>
        <div className="card-footer">
            <a href={props.article_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary m-1">Read</a>
            <button className="btn btn-primary m-1" onClick={() => props.unsaveArticle(props.userId, props.articleId)}>Unsave</button>
            <CopyToClipboard text={props.article_url} onCopy={() => setCopied(true)}>
                { copied ?  <button className="btn btn-primary m-1">Copied!</button> : <button className="btn btn-primary m-1">Copy Link</button>}
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

SavedArticle.propTypes = {
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
    unsaveArticle: PropTypes.func.isRequired
};

export default SavedArticle;