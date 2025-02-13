//   +++++++++++++++++Question 2 +++++++++++++++++++++++++++
function billAmount(amount) {
    if(amount>2000){
        console.log((2000*30)/100);
    } else if(amount>= 1000 && amount<=2000){
        console.log((amount*20)/100);
    } else if( amount>= 500 && amount<=1000 ){
        console.log((amount*10)/100);
    } else if(amount<500){
        console.log(`No Discount`);
        
    }
}