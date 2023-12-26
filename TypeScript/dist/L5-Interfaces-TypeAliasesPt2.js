"use strict";
/*
INTERFACES & TYPE ALIASES PT2
----------------------------------------
SUMMARY
*
*/
function logDetails(value) {
    if (value.type === 'admin') {
        console.log(`Welcome Admin ${value.lastName}`);
    }
    else {
        console.log(`Welcome ${value.firstName}`);
    }
}
