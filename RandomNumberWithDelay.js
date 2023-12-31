function generateRandomNumber(delayNumber){
     console .log(`Generate random number in ${delayNumber} second`);

     function countdown(remaining){
        if(remaining>0){
            console.log(`Remaining time: ${remaining} second`);
            setTimeout(()=>countdown(remaining-1),1000);
        }
        else{
            let randomNumber = Math.floor(Math.random()*100);
            console.log(`\n generated random number is ${randomNumber} \n Happy New Year 🎇🎆🍾 `)
        }
     }
     countdown(delayNumber);
}


let delayNumber = 3;
generateRandomNumber(delayNumber);