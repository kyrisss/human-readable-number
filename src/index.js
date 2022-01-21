module.exports = function toReadable (number) {
  
    let stringNum = String(number);
    

    if(stringNum.length == 1){
        return readNumber(number);
    }
    else if(stringNum.length == 2){
        if(number>9 && number<20){
            return readNumber(number);
        }
        if(number%10 == 0){
            return readNumberTy(+stringNum[0]);
        }  
        return readNumberTy(+stringNum[0]) + " " + readNumber(+stringNum[1]);
    }
    else if(stringNum.length == 3){
        if(number % 100 == 0){
            return readNumber(+stringNum[0]) + " hundred"
        }
        
        return readNumber(+stringNum[0]) + " hundred " + toReadable(+stringNum.slice(1));
    
    }


    function readNumber(num){
        switch(num){
            case 0:
                return 'zero';
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            case 4:
                return "four";
            case 5:
                return "five";
            case 6:
                return "six";
            case 7:
                return "seven";
            case 8:
                return "eight";
            case 9:
                return "nine";
            case 10:
                return "ten";
            case 11:
                return "eleven";
            case 12:
                return "twelve";
            case 13:
                return "thirteen";
            case 14:
                return "fourteen";
            case 15:
                return "fifteen";
            case 16:
                return "sixteen";
            case 17:
                return "seventeen";
            case 18:
                return "eighteen";
            case 19:
                return "nineteen";

        }
    }


    function readNumberTy(num){
        switch(num){
            case 2:
                return "twenty";
            case 3:
                return "thirty";
            case 4:
                return "forty";
            case 5:
                return "fifty";
            case 6:
                return "sixty";
            case 7:
                return "seventy";
            case 8:
                return "eighty";
            case 9:
                return "ninety";

        }
    }

}
