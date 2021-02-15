import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import SavedArticle from './SavedArticle';
import { Redirect } from 'react-router-dom';
import { UserContext } from "../providers/UserProvider";
import PropTypes from 'prop-types';


const SavedArticleList = (props) => {
    const [savedArticles, setSavedArticles] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [reload, setReload] = useState(0);
    const user = useContext(UserContext)
    console.log(user)


    useEffect(() => {
        if (!user) { return; } 
    axios.get(`${props.baseUrl}/users/${user.id}/articles`)
        .then((response) => {
            const apiArticles = response.data 
            console.log(apiArticles)
            setSavedArticles(apiArticles)
            console.log("GOT THE ARTICLES")
        })
        .catch((error) => {
            setErrorMessage(error);
            console.log(errorMessage)
            console.log("COULD NOT GET ARTICLES")
        })
    }, [reload])


    const unsaveArticle = (userId, articleId) => {
        axios.delete(`${props.baseUrl}/users/${userId}/articles/${articleId}`)
            .then((response) => {
            setReload(reload + 1)
        })
            .catch((error) => {
            setErrorMessage(error)
        })
    };

    if (!user) {
        return <Redirect to="/"/>
    }

    const savedArticleComponents = savedArticles.map((savedArticle) => {
        return (
            <SavedArticle key={savedArticle.id}
            article_url={savedArticle.article_url}
            title={savedArticle.title}
            author={savedArticle.author}
            description={savedArticle.description}
            source_name={savedArticle.source_name}
            publication_date={savedArticle.publication_date}
            image_url={savedArticle.image_url}
            sentiment={savedArticle.sentiment} 
            isSaved={true}
            articleId={savedArticle.id}
            userId={props.user.id}
            baseUrl={props.baseUrl}
            unsaveArticle={unsaveArticle} 
            convertTime={props.convertTime}
            />
        )
    })

    return (
    <div className="row">
        {savedArticleComponents}
    </div>
    )
}

SavedArticleList.propTypes = {
    baseUrl: PropTypes.string.isRequired,
    convertTime: PropTypes.func.isRequired
};

export default SavedArticleList; 