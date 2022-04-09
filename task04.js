'use strict';

const getVisGod=(year)=>{ 
    return  ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0); 
    } 
     
    const getRandom4 = (n,m) =>{ 
    let arr = []; 
    for(i=0; i<20; i++){ 
    if(n<m) 
       arr.push(Math.floor(Math.random() * (m-n+1)) + n) 
       else 
       arr.push(Math.floor(Math.random() * (n-m+1)) + m) 
         } 
     let checkArray = arr; 
      
     for(i=0; i=checkArray.length; i++){ 
      return getVisGod(checkArray[i]); 
      
     } 
        
    } 
     
    console.log(getVisGod(2020)); 
     
    console.log(getRandom4(1000,2000));