import path from "path"
import { mpath } from "./consts";



console.log(path.dirname(mpath)); //g:\Projects\Flutter\a25\lib\features\home\presentation\pages
console.log(path.basename(mpath)); //home_page.dart
console.log(path.parse(mpath)); //{root: 'g:\\', dir: 'g:\\Projects\\Flutter\\a25\\lib\\features\\home\\presentation\\pages', base: 'home_page.dart', ext: '.dart', name: 'home_page'}
console.log(path.extname(mpath)); //.dart

console.log(mpath.split(`lib`)[0]); //g:\Projects\Flutter\a25\
console.log(mpath.split(`lib`)[1]); //\features\home\presentation\pages\home_page.dart

