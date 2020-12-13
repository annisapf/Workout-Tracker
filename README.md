# Workout-Tracker

*Workout-Tracker* allows user to be able to view create and track daily workouts. User may also be able to log multiple exercises in a workout on a given day. This Workout Tracker has used Node and MongoDB to query and route data in our app. This apps is deployed in Heroku. 

    
## Table of Contents 

* [Screen Shots](#screenshots)

* [Demo](#demo)
    
* [Installation](#installation)

* [Business Context](#businesscontext)

* [Acceptance Criteria](#acceptancecriteria)

* [Structure](#structure)
    
* [Usage](#usage)
    
* [License](#license)
    
* [Contributing](#contributing)
    
* [Questions](#questions)

## Screenshots
Homepage
![Screen Shot 2020-12-14 at 9 14 05 am](https://user-images.githubusercontent.com/7066137/102025564-f4965080-3dec-11eb-8ce3-fbd979a000b9.png)

Pick Exercie
![Screen Shot 2020-12-14 at 9 14 16 am](https://user-images.githubusercontent.com/7066137/102025566-f52ee700-3dec-11eb-90f4-4272317d705b.png)

Stats Page
![Screen Shot 2020-12-14 at 9 13 53 am](https://user-images.githubusercontent.com/7066137/102025568-f6f8aa80-3dec-11eb-8eea-9f4ef9caea4b.png)


## Demo

![gif (1)](https://user-images.githubusercontent.com/7066137/102025500-79cd3580-3dec-11eb-8e0d-2668c61e6ebd.gif)

   
## Installation
    
This project uses 3 npm packages: 
* [express](https://expressjs.com/en/starter/installing.html)
* [mongoose](https://www.npmjs.com/package/mongoose)
* [morgan](https://www.npmjs.com/package/morgan)
To install necessary dependencies, run the following command:
    
```
npm install express --save
```

```
npm install mongoose
```
    
## Business Context

A consumer will reach their fitness goals more quickly when they track their workout progress.

## Acceptance Criteria

When the user loads the page, they should be given the option to create a new workout or continue with their last workout.

The user should be able to:

  * Add exercises to a previous workout plan.

  * Add new exercises to a new workout plan.

  * View the combined weight of multiple exercises on the `stats` page.

## Structure

All the recommended files and directories from the steps above should look like the following structure:

```
.
├── models
│   ├── index.js
│   └── workout.js
│ 
│
├── public
│   ├── api.js
│   ├── exercise.html
│   ├── exercise.js
│   ├── index.html
│   ├── index.html
│   ├── stats.html
│   ├── stats.js
│   ├── style.css
│   └── workout.js
│
├── routes
│   ├── apiRoutes.js
│   └── htmlRoutes.js
│ 
├── node_modules
│ 
├── package.json
├── package-lock.json
│
│   
├── server.js
│
└── seeders
    └── seed.js
```


## Usage
    
To run tests, run the following command:
    
```
npm start
```
  

## License
The license is MIT standard license.
        
## Contributing
    
It is an open project and everyone can contribute - please send an email requesting to be added as a contributor

## Link to the App
<a href="https://secure-lake-18405.herokuapp.com">The URLs of the deployed applications in Heroku</a><hr>

     
## Questions
    
If you have any questions about the repo, open an issue or contact [annisapf](https://github.com/annisapf/) directly at a.purbandari@gmail.com.


