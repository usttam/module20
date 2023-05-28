let minValue = 0;
let maxValue = 100;
let answerNumber  = 0;
let orderNumber = 0;
let gameRun = false;


const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');

GameStart();

document.querySelector('#btnRetry').addEventListener('click',()=> {
    GameStart();
})

document.querySelector('#btnOver').addEventListener('click', ()=> {
    CheckValue (false);  
})

document.querySelector('#btnEqual').addEventListener('click', ()=> {
    if (gameRun){
        const phraseRandom = Math.round( Math.random()*2);
        let answerPhrase;
        switch (phraseRandom) {
            case 1:
                answerPhrase = `That's how I can do it!\n\u{1F61C}`; 
                break;
            case 2:
                answerPhrase = `Hooray! Guessed!\n\u{1F601}`; 
                break;
            default: 
                answerPhrase =`I always guess!\n\u{1F60E}`;
                break;
        }        
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})

document.querySelector('#btnLess').addEventListener('click',()=>{
    CheckValue (true);    
})

function GameStart (){
    minValue = parseInt(prompt('The minimum value of the number for the game','0')) || 0; 
    (minValue < -999) || (minValue > 998) ?  minValue = -999 :  minValue = minValue;
    maxValue = parseInt(prompt('The maximum value of the number for the game','100')) || 100;
    (maxValue > 999) || (maxValue < -998) ?  maxValue = 999 :  maxValue = maxValue;  
    alert(`Think of a number from ${minValue} to ${maxValue}, and i guess it`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    const answerText=TextAnswer (answerNumber);
    answerField.innerText = `You guessed the number is ${answerNumber }? \n (${answerText})`;
}

function CheckValue (isLess){  
           
    if (gameRun && typeof(isLess)==='boolean'){
        let answerPhrase;
        if ((isLess && minValue === answerNumber) ||  minValue === maxValue){
            const phraseRandom = Math.round( Math.random()*2);            
            switch (phraseRandom) {
                case 1:
                    answerPhrase = `Really, i don't know...\n\u{1F612}`; 
                    break;
                case 2:
                    answerPhrase = `I give up...\n\u{1F92F}`; 
                    break;
                default: 
                    answerPhrase = `You guessed the wrong number!\n\u{1F914}`;
                    break;
            } 
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {            
            const phraseRandom = Math.round( Math.random()*2);                                
            (isLess)? maxValue = answerNumber  - 1 : minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const answerText= TextAnswer (answerNumber);
            switch (phraseRandom) {
                case 1:
                    answerPhrase = `And this number is ${answerNumber }? \n(${answerText})`; 
                    break;
                case 2:
                    answerPhrase = `Yes, it's easy! You made a guess ${answerNumber }? \n(${answerText})`; 
                    break;
                default: 
                    answerPhrase = `You guessed the number ${answerNumber }? \n(${answerText})`;
                    break;
            } 
            answerField.innerText = answerPhrase;
            
        }
    } else {
        console.log ('gameRun is False or isLess is not boolean');
    }
}
function TextAnswer (answerNumber){
    let remOfNumber1,remOfNumber2;   
    let hunrds,tens, ones;    
    let isMinus
    let textAnswer;
    if (Number.isInteger(answerNumber)) {
        if (answerNumber > 0) {                        
            isMinus = false;                   
        }
        if (answerNumber <0 ){
            answerNumber = answerNumber * (-1);
            isMinus=true;
        }
        if (answerNumber == 0) {
            return 'ноль';
        }   
         
        remOfNumber1 = answerNumber % 100;
        remOfNumber2 = answerNumber % 10;

      //debugger;
      

        if (remOfNumber1 == 0){
          /*  switch (answerNumber) {
                case 900:
                    textAnswer = 'девятьсот';                        
                    break;
                case 800:
                    textAnswer = 'восемьсот';                        
                    break;
                case 700:
                    textAnswer = 'семьсот';                        
                    break;
                case 600:
                    textAnswer = 'шестьсот';                        
                    break;
                case 500:
                    textAnswer = 'пятьсот';                        
                    break;
                case 400:
                    textAnswer = 'четыриста';                        
                    break;
                case 300:
                    textAnswer = 'триста';                        
                    break;
                case 200:
                    textAnswer = 'двести';                        
                    break;
                case 100:
                    textAnswer = 'сто';                        
                    break;                   
            }*/
            textAnswer=IntValueAnswer(answerNumber);
        }  else if (remOfNumber2 == 0 && answerNumber < 100){
              /*  switch (answerNumber) {
                    case 90:
                        textAnswer ='девяносто';                        
                        break;
                    case 80:
                        textAnswer ='восемьдесят';                          
                        break;
                    case 70:
                        textAnswer ='семьдесят';                   
                        break;
                    case 60:
                        textAnswer ='шестьдесят';                 
                        break;
                    case 50:
                        textAnswer ='пятьдесят';                      
                        break;
                    case 40:
                        textAnswer ='сорок';                      
                        break;
                    case 30:
                        textAnswer ='тридцать';                      
                        break;
                    case 20:
                        textAnswer ='двадцать';                    
                        break;
                    case 10:
                        textAnswer ='десять';                     
                        break;                    
                }  */
                textAnswer=IntValueAnswer(answerNumber);
        }  else { 
            hunrds = Math.trunc(answerNumber / 100);
            tens =  Math.trunc(remOfNumber1 / 10);
            ones = remOfNumber2;
            console.log (hunrds,tens,ones);

            if (hunrds > 0) {
                hunrds === 0? textAnswer = '':  textAnswer = IntValueAnswer(hunrds*100);
               /* switch (hunrds) {
                    case 0:
                    textAnswer = '';
                    break;
                    case 1:
                        textAnswer = 'сто';
                        break;
                    case 2:
                        textAnswer = 'двести';
                        break;
                    case 3:
                        textAnswer = 'триста';
                        break;
                    case 4:
                        textAnswer = 'четыриста';
                        break;
                    case 5:
                        textAnswer = 'пятьсот';
                        break;
                    case 6:
                        textAnswer = 'шестьсот';
                        break;
                    case 7:
                        textAnswer = 'семьсот';
                        break;
                    case 8:
                        textAnswer = 'восемьсот';
                        break;
                    case 9:
                        textAnswer = 'девятьсот';
                        break;                
                }*/
            } else {
                textAnswer = '';  
            }
           if (remOfNumber1 < 20 && remOfNumber1 > 9) {
                switch (remOfNumber1) {
                    case 10:
                        textAnswer = textAnswer + ' '+'десять';
                        break;
                    case 11:
                        textAnswer = textAnswer + ' '+'одиннадцать';
                        break;
                    case 12:
                        textAnswer = textAnswer +' '+'двенадцать';
                        break;
                    case 13:
                        textAnswer = textAnswer +' '+'тренадцать';
                        break;
                    case 14:
                        textAnswer = textAnswer +' '+'четырнадцать';
                        break;
                    case 15:
                        textAnswer = textAnswer +' '+'пятнадцать';
                        break;
                    case 16:
                        textAnswer = textAnswer +' '+'шестнадцать';
                        break;
                    case 17:
                        textAnswer = textAnswer +' '+'семнадцать';
                        break;
                    case 18:
                        textAnswer = textAnswer +' '+'восемнадцать';
                        break;
                    case 19:
                        textAnswer = textAnswer +' '+'девятнадцать';
                        break;                
                } 
           } else {
               /* switch (tens) {                    
                    case 1:
                        textAnswer = '';
                        break;
                    case 2:
                        textAnswer = textAnswer +' '+'двадцать';
                        break;
                    case 3:
                        textAnswer = textAnswer +' '+'тридцать';
                        break;
                    case 4:
                        textAnswer = textAnswer +' '+'сорок';
                        break;
                    case 5:
                        textAnswer = textAnswer +' '+'патьдесят';
                        break;
                    case 6:
                        textAnswer = textAnswer +' '+'шестьдесят';
                        break;
                    case 7:
                        textAnswer = textAnswer +' '+'семьдесят';
                        break;
                    case 8:
                        textAnswer = textAnswer +' '+'восемьдесят';
                        break;
                    case 9:
                        textAnswer = textAnswer +' '+'девяносто';
                        break;                
                }*/
                (tens <= 1)? textAnswer = '':  textAnswer = textAnswer +' '+ IntValueAnswer(tens*10);

                switch (ones) {
                    case 0:
                        textAnswer =  textAnswer + '';
                        break;
                    case 1:
                        textAnswer = textAnswer +' '+'один';
                        break;
                    case 2:
                        textAnswer = textAnswer +' '+'два';
                        break;
                    case 3:
                        textAnswer = textAnswer +' '+'три';
                        break;
                    case 4:
                        textAnswer = textAnswer +' '+'четыре';
                        break;
                    case 5:
                        textAnswer = textAnswer +' '+'пять';
                        break;
                    case 6:
                        textAnswer = textAnswer +' '+'шесть';
                        break;
                    case 7:
                        textAnswer = textAnswer +' '+'семь';
                        break;
                    case 8:
                        textAnswer = textAnswer +' '+'восемь';
                        break;
                    case 9:
                        textAnswer = textAnswer +' '+'девять';
                        break;                
                }
            }
           
        }
        console.log(textAnswer);
        if (isMinus){
            return 'минус' + ' ' + textAnswer;
        }
        else {
            return textAnswer;
        } 

    } else {
        console.log ('answerNumber is not integer');
    } 
    
}

function IntValueAnswer(answerNumber){   
  

    textArray = [
        "сто",
        "двести",
        "триста",
        "четыриста",
        "пятьсот",
        "шестьсот",
        "семьсот",
        "восемьсот",
        "девятьсот",   
        "десять",   
        "двадцать",   
        "тридцать",   
        "сорок",   
        "пятьдесят",
        "шестьдесят",   
        "семьдесят",   
        "восемьдесят",   
        "девяносто",         
    ];
    answerNumber < 100 ? answerNumber = answerNumber/10+9 : answerNumber = answerNumber/100;

    return textArray[answerNumber - 1];
}


