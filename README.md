# Good News 
## Checking out the website
If you would simply like to use the website, please visit https://good-news-6d972.firebaseapp.com/. Note that it does initially take a few seconds to load due to being on the free tier for Heroku. For instructions on how to set up the project on your machine, please keep reading. 

## Setting up the backend
Before moving on to the next steps, please set up the backend first. The backend is responsible for retrieving the news articles and analyzing sentiment as well as managing users and storing information such as which articles they have saved. You can find the link to the backend repository here: https://github.com/roshni-patel/good-news-api.

## Getting the code

```shell=bash
# Clone the code
git clone https://github.com/roshni-patel/good-news.git 

# Go into the code folder
cd good-news

# Install the dependencies 
npm install
```

## Creating an env file
Create an `.env` file in the `good-news` folder that looks like this: 
```shell=sh
REACT_APP_API_KEY="Insert firebase app API key here"
REACT_APP_AUTH_DOMAIN="Insert firebase app auth domain here "
REACT_APP_PROJECT_ID="Insert firebase app project ID here"
REACT_APP_STORAGE_BUCKET="Insert firebase app storage bucket here"
REACT_APP_MESSAGING_SENDER_ID="Insert firebase app messenging sender id here"
REACT_APP_APP_ID="Insert firebase app app ID here"
```

## Running Locally
1. In `App.js` change the Heroku base url to http://localhost:5000. Make sure that you've followed the steps to setup the backend first — see instructions at https://github.com/roshni-patel/good-news-api.
3. Start the server with `yarn start` and the app should be loaded on http://localhost:3000.

## Deploying on Firebase
1. Click on the **Hosting** tab from the Firebase console and click on **Get Started**. 
2. Follow the instructions to deploy to Firebase Hosting. You can find documentation on Firebase Hosting here: https://firebase.google.com/docs/hosting