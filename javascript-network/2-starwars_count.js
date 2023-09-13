#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request.get(url, function(error, response, body){
    const films = JSON.parse(body);
    const character = films.results.filter((film)=>
        film.characters.includes(`https://swapi-api.alx-tools.com/api/people/18/`|| `http://swapi.co/api/people/18/`)
        
    );

    const count = character.length;
    console.log(count);
});