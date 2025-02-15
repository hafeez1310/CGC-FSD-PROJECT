function withdrawlAmount(withdrawAmt, balance, newAmount) {
    if((withdrawAmt%100==0 || withdrawAmt%200==0 || withdrawAmt%500==0 || withdrawAmt%500==0) && balance >= withdrawAmt  ){
        console.log(`Your Amount ${withdrawAmt} is Deducted and Your new Balance is ${balance-withdrawAmt}`);
        
        return newAmount =+ balance-withdrawAmt
    } else {
        console.log(`Enter Valid Amount`);
        
    }

}

withdrawlAmount(450,10000)