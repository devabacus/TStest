import { classDeclaration } from "./constant";

interface Field {
    name: string;
    type: string;
    isNullable: boolean;
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
        fields.push({ name: name, type: type, isNullable: isNullable });
    }
    return fields;
}

const fieldsStr = getFields(classDeclaration);
const fieldsField = parseParams(fieldsStr);



console.log(fieldsField);

// const item = `final String? mvar;`
// const regRes = item.match(/(\w+\??)\W+(\w*);/)!;
// console.log(regRes[1]);







