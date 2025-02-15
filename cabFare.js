function calculatePrice(distance) {
    let price = 0;
    if(distance<=5) {
        console.log(`Your Total Fare is : ${distance*10}`);
    } else if(distance <= 15){
        console.log(`Your Total Fare is : ${ (5*10)+(distance-5)*8   }`);
        
    } else if (distance > 15){
        console.log(` Your Total Fare is : ${  (5*10)+ (10*8) + ( distance-15)*5 }`);
        
    }
}
calculateFare(46)