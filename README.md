# Kasa - Find your next appartment !

![Appartement cosy](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg)

Kasa is an application that allows people to find appartments between individuals. Kasa interface enables people to connect directly with each other and to reach agreements on prices, dates, etc.

## Tech Stack

**Client:** React, React-router
**Server:** JSON Server

## Installation

Install Kasa with npm

```
  git clone https://github.com/lmleopold/Kasa.git
```

## Run locally the backend

```
  cd kasa/backend
```
To run the backend you must have JSON Server installed

### install JSON Server

```
  npm install -g json-server
```

### start JSON Server

```
  json-server --watch ./data/db.json
```
Now if you go to http://localhost:3000/accomodations, you'll get the data

## Run locally the frontend

```
  cd ../kasa/frontend
  npm start
```
Runs the app in the development mode.\
Open [http://localhost:2000](http://localhost:2000) to view it in your browser.