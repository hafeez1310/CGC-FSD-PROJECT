                        //++++++++++++Electricity Bill using for loop+++++++++++++++++++++++++
// for (let i = 0; i<=260; i++) {
//     const unit = i;
//     const usedUnit = 100;
//     if(usedUnit <= unit) {
//         console.log(`the price of the used unit ${usedUnit} is ${usedUnit*2.5}`);
//         break;
//     } else if(usedUnit >= 50 && usedUnit < 100) {
//         console.log(`the price of the used unit ${usedUnit} is ${usedUnit*4}`);
//         break;
//     } else if(usedUnit >= 100 && usedUnit <= 200) {
//         console.log(`the price of the used unit ${usedUnit} is ${usedUnit*6}`);
//         break;
//     }else if(usedUnit >= 200 && usedUnit <= 260) {
//         console.log(`the price of the used unit ${usedUnit} is ${usedUnit*8}`);
//         break;
//     }
    
// }
                    //    +++++++++++++++++++Practice+++++++++++++++++++++
// function addTwoNumber(num1, num2) {
//     if(num1 == num2){
//         console.log(num1 + num2);
//     }
    
// }
// addTwoNumber(4,2)

// function addTwoNumber(num1, num2)  {
//     let result = num1 + num2;
//     return result
// }
// let result = addTwoNumber(2,9);
// // console.log(result);

// function loginUserMessage(username= "user") {
//     if(!username ){
//         console.log('please enter a username');
//         return
        
//     }
//     return `${username} just logged in `
// }
// // console.log(loginUserMessage('hafeez'));
// console.log(loginUserMessage('hafeez'));

            //++++++++++++++++Electricity Bill Count using function++++++++++++++++++++++
function electricityBill(unit) {
    if( unit > 0 && unit<=50) {
        console.log(`the price of the consumed unit is ${unit*2.5}`);
        
    } else if (unit >50 && unit<=100){
        console.log(`the price of the consumed unit is ${unit*4}`);
        
    } else if (unit >100 && unit<=200){
        console.log(`the price of the consumed unit is ${unit*6}`);
        
    } else if (unit >200 && unit<=260){
        console.log(`the price of the consumed unit is ${unit*8}`);
        
    } else {
        console.log(`Enter the correct unit`);
        
    }
    return 
}
electricityBill(220);