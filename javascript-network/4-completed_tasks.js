#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request.get(url, function(error, response, body){
    const users = JSON.parse(body);
    const completed_task = {};
    users.forEach((user) => {
        if (user.completed){
            completed_task[user.userId];
            completed_task[user.userId]++;
            
        }
        else{
            completed_task[user.userId] =1;
        }
    });

    console.log(completed_task)
});