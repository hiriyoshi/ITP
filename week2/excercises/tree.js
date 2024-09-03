const prompt = require('prompt-sync')();

let user = parseInt(prompt("Enter a integer:"),10);

function tree(tree){
    console.log("tree");
    for(let i = 0; i<tree;i++){
        let line ="";
        for(let j = 0;j<tree;j++){
            line += '*';
        }
        
    }
}
tree(userInput);