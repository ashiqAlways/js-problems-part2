const phones = [
    {name: 'samsung', price: 20000, camera: '12mp', color: 'black' },
    {name: 'Xoami', price: 18000, camera: '12mp', color: 'black' },
    {name: 'Oppo', price: 30000, camera: '12mp', color: 'black' },
    {name: 'Iphone', price: 100000, camera: '12mp', color: 'black' },
    {name: 'Walton', price: 31000, camera: '12mp', color: 'black' },
    {name: 'HTC', price: 27000, camera: '12mp', color: 'black' },
]


function getCheapestPhone(phones){
    for(const phone of phones){
        console.log(phone)
    }
}


const cheep = getCheapestPhone(phones);
console.log('Cheapest phone is:', cheep);