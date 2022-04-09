'use strict';



const gameRobot = () => {
    const getRandomNumber = Math.floor(Math.random() * 100);
    console.log(`Загадонное число: ${getRandomNumber}`);
    let userNumber = +prompt('Введите число');
    console.log(`Число игрока: ${userNumber}`);
if (userNumber === null) {
alert("Игра закончился")
    return;
        }else{
                if (isNaN(userNumber)){
                    alert("Введи число");
                    return gameRobot();
                        }else{
                                if(getRandomNumber <= userNumber){
                                    alert("Меньше!")
                                    return  gameRobot();
                                }
                                    if (getRandomNumber >= userNumber){
                                        alert("Больше!")
                                        return  gameRobot();
                                    }
                                        if (getRandomNumber === userNumber){
                                            alert("Правильно!");
                                            return  gameRobot();
                                        }
                                }
                }
                        }


console.log(gameRobot());
