let myCar = {
    make: 'Honda',
    model: 'Civic',
    year: 1999,
    miles: 300000,
    runs: true,
    showInfo : function () {
        console.log(myCar.make, myCar.model);
    },
    drive: function(miles) {
        myCar.miles = myCar.miles + miles
        console.log(myCar.miles)
    }
};
myCar.drive(80)


// console.log(`My car is a ${myCar.year} ${myCar.make} ${myCar.model}, with ${myCar.miles} miles.`)

// Write a drive function that accepts numbers of miles driven as a parameter 'miles' and add those to 'my Car' total miles