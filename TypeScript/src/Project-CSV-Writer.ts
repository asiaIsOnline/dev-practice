/*
CSV WRITER
----------------------------------------
OVERVIEW
* The CSV writer turns an array of objects into a CSV file that is saved to the local computer.
* These objects are formatted using a interface with properties that correspond to the CSV file columns. 
*/

import { appendFileSync } from 'fs'

interface Payment {
    id: number,
    amount: number,
    from: string,
    notes: string
}

type PaymentColumns = ('id' | 'amount' | 'from' | 'notes')[]
// The PaymentColumns type alias sets the headers for the CSV file making sure they can only be id, amount, from, or notes
// However, using the or symbol (vertical bar) we can include some or all of the given columns

class CSVWriter {
    constructor(private columns: PaymentColumns) {
        this.csv = this.columns.join(',') + '\n'
    }
        
    private csv: string
    // The csv property stores the string format of all the rows and is what will become the csv file

    save(filename: string):void {
        appendFileSync(filename, this.csv)
        this.csv = '\n'

        console.log('File saved to: ', filename)
    }

    addRows(values: Payment[]):void {
        let rows = values.map((v) => this.formatRow(v))

        this.csv += rows.join('\n')

        console.log(this.csv)
    }
    // The addRows function accepts an array of objects with each object adhering to the Payment interface format

    private formatRow(p: Payment): string {
        return this.columns.map((col) => p[col]).join(',')
    }
    // The formatRow is private so it can only be used within the class and formats the column array joining each item with a comma
}

const writer = new CSVWriter(['id', 'amount', 'from', 'notes'])
// The writer variable creates a new instance of the CSVWriter class and passes in an array adhering to the PaymentColumns type alias

writer.addRows([
    {id: 249568, amount: 300, from: 'Tanaka', notes: 'Completed landing page'},
    {id: 249569, amount: 240, from: 'Next Kitchen', notes: 'Completed menu update'}
])

writer.save('./data/payments.csv')