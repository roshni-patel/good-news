import React, { useState, useRef} from 'react';
import Moment from 'moment';
import './Article.css'; 
import { CopyToClipboard } from 'react-copy-to-clipboard';


const Article = (props) => {

    // const [copySuccess, setCopySuccess] = useState('');
    // const textAreaRef = useRef(null);

    // const copyToClipboard = (e) => {
    //     textAreaRef.current.select();
    //     document.execCommand('copy');
    //     // This is just personal preference.
    //     // I prefer to not show the whole text area selected.
    //     e.target.focus();
    //     setCopySuccess('Copied!');
    // };

    return (
        <div className="card">
        <img src={props.image_url} class="card-img-top" alt="news"/>
        <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.description ? props.description : null }</p>
            <a href={props.article_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read</a>
            {/* <button className="btn btn-primary" onClick={props.saveArticle}>Save</button> */}

        </div>
        </div>
    ) 
    // return (
    //     <article>
    //         {props.source_name}
    //         <a href={props.article_url} target="_blank" rel="noopener noreferrer">{props.title}</a>
    //         {Moment(props.publication_date).format("MMM DD, YYYY")}
    //         {/* {props.sentiment} */}
    //         <img src={props.image_url} alt="news article img"/>
    //     </article>
    // )
    
}

export default Article; 