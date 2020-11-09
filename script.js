'use strict';
//Learn "REST"  + SPREAD


//1. REST    in argument ( ...x) - all another arguments pack in the array
const log = function (a, b, ...x) {
    console.log(a, b, x);
};

log("This A", "This B", 12, "other text");


//2. SPREAD    Unpack array (...x) and create string (use all elements in the array)
const printAllelements = (array) => {
    console.log(...array);
};

const arr = [1, 3, 4, 5, 6, "sdsd", {
    a: 2,
    b: 23
}];

printAllelements(arr);

//3. Function set default property
function caldOrDouble(number,basis = 3){
    //old style
    //if not "basis"  basis = 2
    basis = basis || 2;

    console.log(number*basis);
}
caldOrDouble(3);
