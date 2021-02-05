import React from 'react';
import Article from './Article';

const ArticleList = (props) => {
    console.log(props)
    const articleComponents = props.articles.map((article, i) => {
        return (
            <Article key={i}
            article_url={article.article_url}
            title={article.title}
            author={article.author}
            description={article.description}
            source_name={article.source_name}
            publication_date={article.publication_date}
            image_url={article.image_url}
            sentiment={article.sentiment} />
        )
    })
    console.log(articleComponents)
    return articleComponents
}

export default ArticleList;