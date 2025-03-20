import { classDeclaration } from "./constant";

interface Field {
    name: string;
    type: string;
    isNullable: boolean;
    isRequired: boolean;
}

function getFields(clsDefin: string): string[] {
    const fieldRegex = /final.*/g;
    const dirtyFields: string[] = [];

    let match;

    while ((match = fieldRegex.exec(clsDefin)) !== null) {
        const dField = match[0];
        dirtyFields.push(dField);
    }
    return dirtyFields;
}


function parseParams(dirtyFields: string[]): Field[] {
    const fields: Field[] = [];
    for (const item of dirtyFields) {
        const regRes = item.match(/(\w+\??)\W+(\w*);/)!;
        const name = regRes[2];
        const type = regRes[1];
        let isNullable = false;

        if (type.includes('?')) {
            isNullable = true;
        }
        const isRequired = getConstrParams(name, classDeclaration);

        fields.push({ name: name, type: type, isNullable: isNullable, isRequired: isRequired });
    }
    return fields;
}

function getConstrParams(fieldName: string, clsDefin: string): boolean {
    const fieldRegex = /\(.*\)/;
    const regRes = clsDefin.match(fieldRegex)![0];
    const constrPrms = regRes.split(',');
    let isRequired = false;
    for (const prm of constrPrms) {
        if (prm.includes(fieldName) && prm.includes('required')) {
            isRequired = true;
        }
    }
    return isRequired;
}

const dirtyFields = getFields(classDeclaration);
const fields = parseParams(dirtyFields);

console.log(fields);



