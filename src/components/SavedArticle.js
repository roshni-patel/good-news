import React, {useState} from 'react'; 
import axios from 'axios'; 

const SavedArticle = (props) => {
    const [errorMessage, setErrorMessage] = useState('')

    const unsaveArticle = (userId, articleId) => {
        axios.delete(`${props.baseUrl}/users/${userId}/articles/${articleId}`)
            .then((response) => {
            // const updatedArticles = [...savedArticles, response.data]
            // setSavedArticles(updatedArticles)
            // setIsSaved(true)
        })
            .catch((error) => {
            setErrorMessage(error)
        })
    };

    return (
        <div className="card">
        <img src={props.image_url} class="card-img-top" alt="news"/>
        <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.description ? props.description : null }</p>
            <a href={props.article_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read</a>
            <button className="btn btn-primary" onClick={() => unsaveArticle(props.userId, props.articleId)}>Unsave</button>
        </div>
        </div>
    ) 
}


export default SavedArticle;