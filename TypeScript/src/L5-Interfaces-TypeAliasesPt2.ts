/*
INTERFACES & TYPE ALIASES PT2
----------------------------------------
SUMMARY
* 
*/

// ----------------------------------------
// TAGGED INTERFACES

interface Admin {
    type: 'admin',
    lastName: string,
    email: string,
    id: Id
}

interface Employee {
    type: 'employee',
    firstName: string,
    role: string,
    id: Id
}

function logDetails(value: Admin | Employee): void {
    if (value.type === 'admin') {
        console.log(`Welcome Admin ${value.lastName}`)
    } else {
        console.log(`Welcome ${value.firstName}`)
    }
}