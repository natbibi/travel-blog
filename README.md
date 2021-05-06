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


## Bugs

## Changelog

### React-Client
1. Set up pages and components   


### API
1. Set up server with routes and controllers


## Wins & Challenges

### Wins


### Challenges


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
