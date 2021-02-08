import React, {useState} from 'react'; 
import axios from 'axios'; 

const SavedArticle = (props) => {
    const [errorMessage, setErrorMessage] = useState('')


    return (
        <div className="card">
        <img src={props.image_url} class="card-img-top" alt="news"/>
        <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.description ? props.description : null }</p>
            <a href={props.article_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read</a>
            <button className="btn btn-primary" onClick={() => props.unsaveArticle(props.userId, props.articleId)}>Unsave</button>
        </div>
        </div>
    ) 
}


export default SavedArticle;