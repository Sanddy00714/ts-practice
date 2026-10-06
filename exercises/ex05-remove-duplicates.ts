const tags = ["smoke", "login", "smoke", "regression", "login", "checkout"];
const unique: string[] = [];
let dup = 0;

for (const tag of tags){
    if(!unique.includes(tag)){
        unique.push(tag);
    }else{
        dup++
    }
}

console.log(unique);
console.log(`Duplicate: ${dup}`);
console.log(`Check: ${tags.length - unique.length}`);