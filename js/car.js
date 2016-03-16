function makeNormalCar (make, model){
    return {
        make: make,
        model: model,
        size: 1,
       
    };
     console.log (make, model);
}
function makeLargeCar(make, model){
    return {
         make: make,
        model: model,
        size: 2,
    };
        console.log (make, model);

}

function makeGarage(lotSize){
    return{
        
        filledspots: [],
        available: lotSize,
        
        park: function (car){
            var available =lotSize;
            //Check how many vehicles/spaces are occupied
            if(car.size <= this.available){
                this.filledspots.push(car); 
                this.available= this.available -car.size;
                console.log('Parked the ' + car.make);
        
            } else {
                return 'Unable to Park Car';
            }
            },
        
        //return available. if space add car, else return
        full: function (){
            
                if(this.available ===0){
                    return 'full';
                }else {
                    return 'not full';
                }
                
            }
};
}



/*
park(car) adds a new car to the garage if there's space (which starts to fill it up). Return true if the car was allowed in or false if there wasn't enough space.
full() returns a boolean describing whether the lot is full or not

add car a new car into the garage array only if there is space
returns true if car is allowed to park in the garage
return false if the car is not allowed in the garage

make a garage with a cap of cars allowed in



*/
