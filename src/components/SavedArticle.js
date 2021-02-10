import React, {useState} from 'react'; 

const SavedArticle = (props) => {
    const [errorMessage, setErrorMessage] = useState('')

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
            <button className="btn btn-primary m-1" onClick={() => props.unsaveArticle(props.userId, props.articleId)}>Unsave</button>
        </div>
        </div>
        </div>
    ) 
}

export default SavedArticle;