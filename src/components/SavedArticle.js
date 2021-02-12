import React, { useState } from 'react'; 
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
    EmailShareButton,
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    LinkedinShareButton
} from "react-share";

import {
    EmailIcon,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    LinkedinIcon
} from "react-share";

const SavedArticle = (props) => {
    const [copied, setCopied] = useState(false); 

    return (
        <div className="col-sm-6 mb-4">
        <div className="card h-100">
        <img src={props.image_url} className="card-img-top" alt="news"/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description ? props.description : null }</p>
        </div>
        <div className="card-footer">
            <a href={props.article_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary m-1">Read</a>
            <button className="btn btn-primary m-1" onClick={() => props.unsaveArticle(props.userId, props.articleId)}>Unsave</button>
            <CopyToClipboard text={props.article_url} onCopy={() => setCopied(true)}>
            <button className="btn btn-primary m-1">Copy Link</button>
            </CopyToClipboard>
            {copied ? <span style={{ color: "red" }}>Copied!</span> : null}
            <EmailShareButton url={props.article_url}><EmailIcon size={40} className="m-1" /></EmailShareButton>
            <FacebookShareButton url={props.article_url} quote={props.title}><FacebookIcon size={40} className="m-1"/></FacebookShareButton>
            <TwitterShareButton url={props.article_url}><TwitterIcon size={40} className="m-1"/></TwitterShareButton>
            <WhatsappShareButton url={props.article_url}><WhatsappIcon size={40} className="m-1"/></WhatsappShareButton>
            <LinkedinShareButton url={props.article_url}><LinkedinIcon size={40} className="m-1"/></LinkedinShareButton>
        </div>
        </div>
        </div>
    ) 
}

export default SavedArticle;