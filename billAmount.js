//   +++++++++++++++++Question 2 +++++++++++++++++++++++++++
function billAmount(amount) {
    let Discount = 0;
    let remainAmount;
    if(amount >= 2000){
        remainAmount =+ (amount*30)/100;
        console.log(` You gt 30% Discount ${remainAmount}.The Remaining Amount you have to pay after discount is ${amount - remainAmount}`);
    } else if(amount>= 1000 && amount<=2000){
        remainAmount =+ (amount*20)/100 
        console.log(`The Remaining Amount you have to pay after discount is ${amount - remainAmount}`);

    } else if( amount>= 500 && amount<=1000 ){
        remainAmount =+ (amount*10)/100
        console.log(`The Remaining Amount you have to pay after discount is ${amount - remainAmount}`);

    } else if(amount<500){
        console.log(`The Remaining Amount you have to pay after discount is ${amount - remainAmount}`);
    }
    return remainAmount = amount-Discount;
    console.log(remainAmount);
}

billAmount(1000)


