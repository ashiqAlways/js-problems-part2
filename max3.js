const jim = 256;
const tim = 389;
const kim = 168;

if (jim > tim && jim > kim){
    console.log('Jim is the ultimate boss');
}
else if(tim > jim && tim > kim){
    console.log('Time is the boss');
}
else{
    console.log('Kim is the kardashians boss');
}



function maxOfThree (num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        return "Number 1 is max";
    }
    else if (num2 > num1 && num2 > num3){
        return "Number 2 is max";
    }
    else {
        return "number 3 is max"
    }
}
 
console.log(maxOfThree(18, 15, 12));


const max = Math.max(21, 4, 51, 32, 3, 18);
console.log('max isuing Math.max', max);