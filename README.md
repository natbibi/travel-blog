# Project: Travel Blog

## Description 
A personal travel blog built in fullstack with react on the client, flask on the server and is connected to an email service using flask-mail. 

## Installation and Usage

Clone or download this repo

To start api:
    - `cd api`  
    - `pipenv shell`  
    - `pipenv install`   
    - `pipenv run dev`  
Flask API will be running on port 5000   

To start client:  
    - `cd client`      
    - `npm install`   
    - `npm run dev`  
The client will open on port 8080   

To run API test suite:      
    `pipenv run test`  

## Technologies  
- HTML, CSS, JavaScript, Python   

### Dependencies: 
   - Server: flask, flask-mail, flask-cors, gunicorn
   
   - Client: axios, react, router-dom, react-router-dom, react-icons
   
### DevDependencies:
   - Server: pytest, pytest-cov
   
   - Client: babel, react-testing-library, jest

## Process 
1. Create a front end in react with a previously made react template repo
2. Create a back end with flask in Python 
3. Set up route for /mailinglist
4. Install flask-mail and create welcome template for new subscribers
5. Create JoinForm component on front end with POST to /mailinglist
6. Render sample destination data and work out general layout of pages  

### TODOS
- [ ] convert mail to link to django mail
- [x] change from sample data to fetch from personal API
- [ ] seed data with images 
- [x] add social icons
- [ ] deploy! 

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


### API
1. Set up server with routes and controllers
2. Set up flask-mail and install necessary dependencies
3. Connect a db to api to store travel destinations


## Wins & Challenges

### Wins
- Connecting front end to back end :D

### Challenges
- Took some time to understand flask-mail and using dotenv with Python

## Future Features 
??






## For development:  
`npm install`  
`npm run dev`  

## For production:  
`npm run build`   
`touch netlify.toml`  

    # in netlify.toml
      
    [build]  
        command = "npm run build" # how to trigger a build  
        publish = "/build" # what folder to publish    
    [[redirects]]   
        from = "/*" # redirect any path  
        to = "/index.html" # to this html page   
        status = 200 # with this status   
       
 Deploy as usual on Netlify!
