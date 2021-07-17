# Project: Travel Blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/3a2fce6c-fb85-4bf1-803c-c84b20d9f1fb/deploy-status)](https://app.netlify.com/sites/nat-travels/deploys)

## Description 
A personal travel blog with react on the client and connected to my [REST API](https://github.com/natbibi/my-rest-api) to fetch travel data and use django mail service (for mailing subscribers).

## Installation and Usage

Clone or download this repo

To start client:  
    `cd client`      
    `npm install`   
    `npm run dev`  
The client will open on port 8080   

To run test suite for client:
    `npm run test`  

To start api (no longer in use):   
    `cd api`  
    `pipenv shell`  
    `pipenv install`   
    `pipenv run dev`  
Flask API will be running on port 5000   

## Technologies  
- HTML, CSS, JavaScript, Python   

### Dependencies: 
   - Server: flask, flask-mail, flask-cors, gunicorn
   
   - Client: axios, react, router-dom, react-router-dom, react-icons
   
### DevDependencies:
   - Server: pytest, pytest-cov
   
   - Client: babel, react-testing-library, jest

## Process 
1. Create a front end in react with a previously made [react template](https://github.com/natbibi/react-template)
2. Create a back end with flask in Python 
3. Set up route for /mailinglist
4. Install flask-mail and create welcome template for new subscribers
5. Create JoinForm component on front end with POST to /mailinglist
6. Render sample destination data and work out general layout of pages  
7. Switch to fetch data and POST mailing data to/from my [REST API](https://github.com/natbibi/my-rest-api)

### TODOS
- [x] convert mail to link to django mail
- [x] change from sample data to fetch from personal API
- [x] seed data with images 
- [x] add social icons
- [x] deploy! 
- [ ] improve landing page, make it more personal
- [ ] add a favicon!
- [ ] add test suite and tests 

## Bugs
- [x] unable to set up flask-mail with my personal email account
    - on gmail settings: allow less secure apps
    - use app password for google 
    - tried different email service (yahoo)
    - SOLVED!! The issue was with python-dotenv -.-
- [x] .env file causing flask to not run in dev mode.... had to add .flaskenv file to solve issue

## Changelog

### React-Client
1. Set up pages and components from my previously set up react template
2. Create a form component and render on Home page 
3. Add text, details and social icons
4. Fetch posts from my api 


### API
1. Set up server with routes and controllers
2. Set up flask-mail and install necessary dependencies
3. Connect a db to api to store travel destinations
4. Decide to switch to my django REST API for mail service

## Wins & Challenges

### Wins
- Connecting front end to back end :D

### Challenges
- Took some time to understand flask-mail and using dotenv with Python
- Set up for react testing 
