import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import SavedArticle from './SavedArticle';

const SavedArticleList = (props) => {
    const [savedArticles, setSavedArticles] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [reload, setReload] = useState(0);

    useEffect(() => {
    axios.get(`${props.baseUrl}/users/${props.user.id}/articles`)
        .then((response) => {
            const apiArticles = response.data 
            console.log(apiArticles)
            setSavedArticles(apiArticles)
            // call load saved articles here 
            // loadSavedArticles()
        })
        .catch((error) => {
            setErrorMessage(error);
            console.log(errorMessage)
        })
    }, [reload])

    // const loadSavedArticles = useCallback(() => {
    //     axios.get(`${props.baseUrl}/users/${props.user.id}/articles`)
    //     .then((response) => {
    //         const apiArticles = response.data 
    //         console.log(apiArticles)
    //         setSavedArticles(apiArticles)
    //     })
    //     .catch((error) => {
    //         setErrorMessage(error);
    //         console.log(errorMessage)
    //     })
    // }, [])


    const unsaveArticle = (userId, articleId) => {
        // const updatedArticles = savedArticles.filter((article) => {
        //     return article.id !== articleId;
        // })

        axios.delete(`${props.baseUrl}/users/${userId}/articles/${articleId}`)
            .then((response) => {
            // loadSavedArticles()
            setReload(reload + 1)
        })
            .catch((error) => {
            setErrorMessage(error)
        })
    };


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
            />
        )
    })
    return savedArticleComponents
}

export default SavedArticleList; 