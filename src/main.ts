import { method } from "./consts";



// const regexConst = /\s*void\s+navigateToSecond\s*\([^)]*\)\s*\{[\s\S]*?\}\s*/g;
// const regexConst = /\s*void.*navigateToSecond\s*/g;


const pageName = `second`;
// const regexConst = /\s*.*Second.*\{[\s\S]*?\}/g;
// const regexConst = new RegExp(`\\s*.*${pageName}.*\\{[\\s\\S]*?\\}`, 'g');
// const regexConst = new RegExp(`[\\s\\n]*GoRoute.*\\n.*${pageName}.*[\\s\\S]*?\\),\\n`, 'g');

const regexConst = /[\s\n]*GoRoute.*\n.*second.*[\s\S]*?\),/g;

const name = method.replace(regexConst, '')

console.log(name);


export function sum(x: number, y: number):number {
    return x+y;

}





