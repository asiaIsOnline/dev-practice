/*
CSV WRITER
----------------------------------------
OVERVIEW
* The CSV writer turns an array of objects into a CSV file that is saved to the local computer.
* These objects are formatted for basic payments. 
*/

interface Payment {
    id: number,
    amount: number,
    to: string,
    notes: string
}

type PaymentColumns = ('id' | 'amount' | 'to' | 'notes')[]

class CSVWriter {
    constructor() {}

    private csv: string
}