import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <h2>What is Good News?</h2>
            <p>
            Many of us check the news on a daily basis and perhaps even more frequently during the pandemic.
            Much of the news coverage we see is negative and while it is important for us to be aware of the latest breaking news,
            consuming too much of these kinds of news stories without hearing about some of the good that is still happening in our world despite
            the situation we are in can be exhausting or even harmful for our mental health. Good News aims to supplement the news we see on a regular basis
            by providing a few new positive articles every day. The inspiration for this website comes from <a href="https://youtube.com/playlist?list=PL_7yEns96WJN5JtKJIL7Kw2_HUuiTjPdq" target="_blank" rel="noopener noreferrer">John Krasinski's Some Good News series on YouTube</a>,
            in which he hosted a weekly news show sharing positive news stories from around the world when the COVID-19 pandemic first began.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6DLU4Gih0gY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            <h2>How are news articles selected?</h2>
            <p>
            The news articles are retrieved from the <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">News API</a> and come from up to 20 sources across categories such as general, health, science, business, and technology. These articles
            have been published within the last day and are sorted by popularity before the headlines are analyzed for their sentiment with the <a href="https://azure.microsoft.com/en-us/services/cognitive-services/text-analytics/" target="_blank" rel="noopener noreferrer">Microsoft Azure Cognitive Services Text Analytics API</a>.
            Only articles that have an overall positive sentiment are listed, though these sentiment labels may not always be accurate. 
            </p>
            <h2>Where can I learn more about this project?</h2>
            <ul>
                <li><a href="https://github.com/roshni-patel/good-news-api" target="_blank" rel="noopener noreferrer">GitHub</a> for the API built with Python (Flask) to retrieve articles and analyze sentiment</li>
                <li><a href="https://github.com/roshni-patel/good-news-api" target="_blank" rel="noopener noreferrer">GitHub</a> for the front-end built with Javascript (React) </li>
            </ul>
        </div>
    )
}

export default About; 