# Assignment 2 - Web API.

Name: Ben Capper

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)

 + Swagger API Yaml File
 + Firebase Analytics Implemented
 + Full API integration


## API Configuration

______________________
NODEENV=development
PORT=8080
HOST=localhost
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
______________________

## API Design

Swagger Yaml file is provided in the root folder.

![](./images/api1.png)
![](./images/api2.png)
![](./images/api3.png)
![](./images/api4.png)
![](./images/api5.png)

## Security and Authentication

All routes except login are protected. The following API endpoints are passport authenticated:

 - Movies
 - Users
 - Tv
 - Company

## Integrating with React App

All calls to the TMDB API now go through the localhost api. Favourites are now saved to the user objects and retrieved via an API call.

## Independent learning (if relevant)

- Swagger yaml file layout
- Implement firebase analytics  
