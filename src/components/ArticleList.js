import React, { useState, useEffect, useContext, useCallback} from 'react';
import Article from './Article';
import axios from 'axios';
import { UserContext } from "../providers/UserProvider";
// import { Redirect } from 'react-router-dom';

const ArticleList = (props) => {
    const [latestArticles, setLatestArticles] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [savedArticles, setSavedArticles] = useState([]); 
    const user = useContext(UserContext)
    console.log(user)

    const getSavedArticles = useCallback(() => {
        if (!user) { return; }
        // if (!user) {
        //     return <Redirect to="/"/>
        // }

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
    }, [props.baseUrl, user]) 

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

    
    const checkIsSaved = (articleId) => {
        // in is indices, of is obj
        for (const article of savedArticles) {
            if (article.id === articleId) {
                return true; 
            } 
        }
        return false; 
    }

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
            isSaved={checkIsSaved(article.id)}
            articleId={article.id}
            userId={props.user?.id}
            baseUrl={props.baseUrl} 
            onSaveUpdated={getSavedArticles}
            convertTime={props.convertTime}
            // this would be null if user not logged in, safe traversal/elvis operator, if expression on left evaluates then it stops, otherwise keeps going
            />
        )
    })

    return (
        <div className="row">
            {articleComponents}
        </div>
        )
}

export default ArticleList;