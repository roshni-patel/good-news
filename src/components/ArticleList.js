import React, { useState, useEffect, useContext, useCallback} from 'react';
import Article from './Article';
import axios from 'axios';
import {UserContext} from "../providers/UserProvider";


const ArticleList = (props) => {
    const [latestArticles, setLatestArticles] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [savedArticles, setSavedArticles] = useState([]); 
    const user = useContext(UserContext)

    const getSavedArticles = useCallback(() => {
        axios.get(`${props.baseUrl}/users/${user.id}/articles`)
        .then((response) => {
            const apiArticles = response.data 
            console.log(apiArticles)
            setSavedArticles(apiArticles)
        })
        .catch((error) => {
            setErrorMessage(error);
            console.log(error)
        })
    }, [props.baseUrl, user.id]) 

    const getLatestArticles = useCallback(() => {
        axios.get(`${props.baseUrl}`)
        .then((response) => {
            const apiArticles = response.data 
            // console.log(apiArticles)
            setLatestArticles(apiArticles)
        })
        .catch((error) => {
            setErrorMessage(error);
            console.log(error) //the variable doesn't update until re-render
            // console.log(errorMessage)
        })
    }, [props.baseUrl]) 

    useEffect(() => {
        getSavedArticles() // retrieve user's saved articles as well, order not predictable
        getLatestArticles()
    }, [getSavedArticles, getLatestArticles]);

    // console.log(props)

    const articleComponents = latestArticles.map((article) => {
        return (
            <Article key={article.id}
            article_url={article.article_url}
            title={article.title}
            author={article.author}
            description={article.description}
            source_name={article.source_name}
            publication_date={article.publication_date}
            image_url={article.image_url}
            sentiment={article.sentiment} 
            isSaved={false}
            articleId={article.id}
            userId={props.user?.id}
            baseUrl={props.baseUrl} 
            onSaveUpdated={getSavedArticles}
            // this would be null if user not logged in, safe traversal/elvis operator, if expression on left evaluates then it stops, otherwise keeps going
            />
        )
    })
    // console.log(articleComponents)
    return (
        <div className="row">
            {articleComponents}
        </div>
        )

}

export default ArticleList;