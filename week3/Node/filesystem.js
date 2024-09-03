const fs = require('fs');
// path of the file

// To place your file in an existing folder named ICreatedANewFolder, you'll need to specify the path to that folder when using fs.writeFile. Here’s how you can modify your code to do that:

// javascript
// Copy code
// const fs = require('fs');
// const path = require('path');

// // Define the folder and file path
// const folderPath = 'ICreatedANewFolder'; // Specify your folder name
// const filePath = path.join(folderPath, 'Files.txt'); // Create the full file path

// const content = "Don't Connect to my Network. You will be Hacked";

// // Write the content to the file in the specified folder
// fs.writeFile(filePath, content, 'UTF-8', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(`The Data is successfully written`);
//     console.log(content);
// });
// const path = require('path');

const folderPath = 'ICreatedANewFolder'; // Specify your folder name
const pathofthefolder = path.join(folderPath, 'Files.txt'); // Create the full file path


// read File
fs.readFile('introduction.txt','UTF-8',(err,data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(`File Content: ${data}`);
})

// Writing a File
const content = "Don't Connect to my Network. You will be Hacked";

fs.writeFile('Files.text',content, 'UTF-8',(err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(`The Data is successfuly written`);
    console.log(content);
})

// Check if Files/Directories exit
const filePath = 'introduction.txt';
if(fs.existsSync(filePath)){
    console.log("The file is already existing!");
}else{
    console.log("The File is not existing!");
}

// Create Directories /Folders
fs.mkdir('ICreatedANewFolder',(err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("Directory created successfully!");
})

//List files in a directory
const directoryPath = 'ICreatedANewFolder';

fs.readdir(directoryPath,(err,files)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("Files in the directory:",files);
})

//Remove files
// fs.unlink('output.txt',(err)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log("Files removed");
// })

// //Removing folder when empty
// fs.rmdir('output.txt',(err)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log("Files removed");
// })

//Removing everything inside the folder as well as the folder
// fs.rmSync('ICreatedANewFolder',{recursive: true,force:true},(err)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log("Files removed");
// })