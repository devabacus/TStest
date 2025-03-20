
interface Param {
    name: string;
    isRequired: boolean;
    isNullable: boolean;
}

const prm: Param = {
    name: "привет",    
    isRequired: false,
    isNullable: true
}


console.log(prm.isNullable);
console.log(prm.isRequired);
console.log(prm.name);


