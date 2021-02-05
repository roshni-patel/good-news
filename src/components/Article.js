import React from 'react';
import Moment from 'moment';
import './Article.css'; 

const Article = (props) => {

    return (
        <div className="card">
        <img src={props.image_url} class="card-img-top" alt="news"/>
        <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.description ? props.description : null }</p>
            <a href={props.article_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read</a>
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