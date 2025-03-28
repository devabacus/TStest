import { tableCategory, tableTask } from "./consts";


export class DriftClassParser {

    private driftClass: string

    constructor(driftClass: string) {
        this.driftClass = driftClass
    }


    get tableName(): string {
        return this.driftClass.match(/\s(\w+)Table/)![1];
    }

    get fields(): any[] {
        const fieldsRegex = /(\w+)Column get (\w+)/g;
        const fields = [];
        let fieldMatch;
        while ((fieldMatch = fieldsRegex.exec(tableCategory)) !== null) {
            fields.push({
                type: fieldMatch[1], // тип колонки (Int, Text и т.д.)
                name: fieldMatch[2]  // имя колонки (id, title и т.д.)
            });
        }
        return fields;

    }

}



// const driftParser = new DriftClassParser(tableCategory);

const tableName = tableCategory.match(/(\w+)Column get (\w+)/);




const fieldsRegex = /(\w+)Column get (\w+)/g;
const fields = [];
let fieldMatch;
while ((fieldMatch = fieldsRegex.exec(tableTask)) !== null) {
    fields.push({
        type: fieldMatch[1], // тип колонки (Int, Text и т.д.)
        name: fieldMatch[2]  // имя колонки (id, title и т.д.)
    });
}



console.log(fields);