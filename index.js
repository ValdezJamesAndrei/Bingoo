console.log("Hello World!");

    function generateRandomNumber (){
        let randomNum = Math.floor (Math.random() * 15) + 1;

        if (randomNum > 5){
            console.log(`RandomNumberIs > = to 5`);
        }else{
            console.log (`RandomNumberIs < = to 5`);
        }
        return console.log(randomNum);
    }  
