//---------- Task 01 --------------
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

const heights = [167, 190, 120, 165, 137];

function getLowestNumber(numbers){
    let lowestNum = numbers[0];
    for(const number of numbers){
        if(number < lowestNum){
            lowestNum = number;
        }
    }
    return lowestNum;
}

const lowestNum = getLowestNumber(heights);
// console.log('Lowest number is:', lowestNum);



// Math.min method use
const heights1 = [167, 190, 120, 165, 137];
const highestNum = Math.min(...heights1);

// console.log('Lowest number is:', lowestNum);



//---------- Task 02 --------------
// Find the friend with the smallest name.

const nameList = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

let smallestName = nameList[0];
for(const name of nameList){
    if(name.length < smallestName.length){
        smallestName = name;
    }
}

// console.log('Smallest name is:', smallestName);



//---------- Task 03 -----------------
// Your task is to calculate the total budget required to buy electronics:

const products = [
    {name: 'laptop', price: 35000},
    {name: 'tablet', price: 15000},
    {name: 'mobile', price: 20000}   
]

function getTotalBudget(products){
    let total = 0;
    for(const product of products){
        total = total + product.price;
    }
    return total;
}

const total = getTotalBudget(products);
// console.log('Total budget is:', total);


//---------- Task 04 --------------------
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required:


    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];


    function findAveragePhonePrice(phones){
        let sum = 0;
        for(const phone of phones){
            sum = sum + phone.price;
        }

        const count = phones.length;
        const avg = sum / count;
        return avg;  
    }

    const averagePrice =findAveragePhonePrice(phones);
    // console.log(averagePrice);



//---------- Task 05 --------------------
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];

    
        function getTotalSalary(employees){
            let total = 0;
            for(const emp of employees){
                const increase = emp.experience * emp.increment;
                const currentSalary = emp.starting + increase;
                total = total + currentSalary;
            }
            return total;
        }


        const totalSalary = getTotalSalary(employees)
        console.log(totalSalary);


