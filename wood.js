/**
 * chair --> 3 cft
 * table --> 10 cft
 * bed --> 50
 */


function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

    return totalWood;
}

const wood = woodQuantity(1, 1, 4);
console.log('wood needed', wood,  'CFT');





/**
 * shirt price --> 500
 * pant price --> 300
 * shoe price --> 900
 */


function dressQuantity(shirtQuantity, pantQuantity, shoeQuantity){
    const shirtPerPrice = 500;
    const pantPerPrice = 300;
    const shoePerPrice = 900;

    const shirtTotalPrice = shirtQuantity * shirtPerPrice;
    const pantTotalPirce = pantQuantity * pantPerPrice;
    const shoeTotalPrice = shoeQuantity * shoePerPrice;

    const totalDressPrice = shirtTotalPrice + pantTotalPirce + shoeTotalPrice;

    return totalDressPrice;
}


const dress = dressQuantity(2, 1, 1);
console.log('Total Pice:', dress, 'Tk');