'use strict';

const getRandom = (length) =>{ 
    let arr = []; 
    for(i = 0; i < length; i++) { 
      arr.push(Math.floor(Math.random() * 101)); 
    } 
    return arr; 
    } 
    

console.log(getRandom(5));