import React, { useState, useEffect} from 'react';
import Article from './Article';
import axios from 'axios';

const ArticleList = (props) => {
    const [latestArticles, setLatestArticles] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    // useEffect(() => {
    //     axios.get(`${props.baseUrl}/articles`)
    //     .then((response) => {
    //         const apiArticles = response.data 
    //         // console.log(apiArticles)
    //         setLatestArticles(apiArticles)
    //     })
    //     .catch((error) => {
    //         setErrorMessage(error);
    //         console.log(errorMessage)
    //     })
    // }, []);

    useEffect(() => {
        axios.get(`${props.baseUrl}`)
        .then((response) => {
            const apiArticles = response.data 
            // console.log(apiArticles)
            setLatestArticles(apiArticles)
        })
        .catch((error) => {
            setErrorMessage(error);
            console.log(errorMessage)
        })
    }, []);

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
            // this would be null if user not logged in, safe traversal/elvis operator, if expression on left evaluates then it stops, otherwise keeps going
            // isSaved={article.isSaved}
            // saveArticle={article.saveArticle}
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