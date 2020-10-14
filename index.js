import { fifaData } from './fifa.js';
console.log(fifaData);
console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

let fifaStatistic = fifaData.filter((statistic)=>{
    return statistic.Year === 2014 && statistic.Stage === "Final";
})

console.log(fifaStatistic[fifaStatistic.length -1]["Home Team Name"]);
console.log(fifaStatistic[fifaStatistic.length -1]["Away Team Name"]);
console.log(fifaStatistic[fifaStatistic.length -1]["Home Team Goals"]);
console.log(fifaStatistic[fifaStatistic.length -1]["Away Team Goals"]);

fifaData.forEach(game =>{
    return game["Win conditions"] = function(name){
    if(game["Home Team Goals"] > game["Away Team Goals"]){
       return name = game["Home Team Name"];
    }
    else{
        return name = game["Away Team Name"];
    }
}
})
//console.log(fifaData);
console.log(fifaStatistic[fifaStatistic.length -1]["Win conditions"]());


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

return data.filter((item) => {return item.Stage === "Final";});
}
console.log(getFinals(fifaData));


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb) {

 return  cb(fifaData).map((item) => {
     return item.Year;
 });
}

console.log(getYears(getFinals));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cb) {
return  cb(fifaData).map((item) => {
    return item["Win conditions"]();
});
};

console.log(getWinners(getFinals));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cbWin,cbYear) {
   let country = cbWin(getFinals);
    let year = cbYear(getFinals);
    let newarr = [];
    for(let i in country){
   newarr[i] = `In ${year[i]}, ${country[i]} won the world cup!\n`
    }
return newarr;
};

 console.log(getWinnersByYear(getWinners,getYears));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
let averageHome;
let averageAway;
data.reduce((acc,item)=>{  
return averageHome = (acc + item["Home Team Goals"])/data.length;
},0)

data.reduce((acc,item)=>{
   return averageAway = (acc + item["Away Team Goals"])/data.length;
    },0)
   return console.log("Home: " + averageHome, "Away: " + averageAway); 
};

getAverageGoals(fifaData);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data,initial) {
let arr = data.filter(item => {
    return item.Stage === "Final";
});

   return arr.reduce((count,item) => {
       if(item['Home Team Initials'] === initial && item['Home Team Name'] === item['Win conditions']()){
           count ++;
       }
       else if(item['Away Team Initials'] === initial && item['Home Team Name'] === item['Win conditions']()){
           count ++;
       }
     return count;
    },0)

};

console.log(getCountryWins(fifaData,"FRG"));


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

// function getGoals(data) {
//     let country = [];
//     let arr = data.filter(item => {
//         return item.Stage === "Final";
//     });
// arr.map.forEach((item)=>{

// })


// getGoals(fifaData);


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense() {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
